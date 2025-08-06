import { supabase } from './supabase';

/**
 * Generic function to fetch data from a Supabase table
 * @param table - The table name
 * @param query - Optional query parameters (select, eq, etc.)
 * @returns Promise with data or error
 */
export const fetchData = async <T>(
  table: string,
  query?: {
    select?: string;
    eq?: [string, any][];
    order?: [string, { ascending: boolean }];
    limit?: number;
    range?: [number, number];
  }
): Promise<{ data: T[] | null; error: Error | null }> => {
  try {
    let queryBuilder = supabase.from(table).select(query?.select || '*');

    // Apply equality filters
    if (query?.eq) {
      query.eq.forEach(([column, value]) => {
        queryBuilder = queryBuilder.eq(column, value);
      });
    }

    // Apply ordering
    if (query?.order) {
      const [column, { ascending }] = query.order;
      queryBuilder = queryBuilder.order(column, { ascending });
    }

    // Apply limit
    if (query?.limit) {
      queryBuilder = queryBuilder.limit(query.limit);
    }

    // Apply range
    if (query?.range) {
      const [from, to] = query.range;
      queryBuilder = queryBuilder.range(from, to);
    }

    const { data, error } = await queryBuilder;

    if (error) throw error;

    return { data: data as T[], error: null };
  } catch (error) {
    console.error(`Error fetching data from ${table}:`, error);
    return { data: null, error: error as Error };
  }
};

/**
 * Generic function to insert data into a Supabase table
 * @param table - The table name
 * @param data - The data to insert
 * @returns Promise with inserted data or error
 */
export const insertData = async <T>(
  table: string,
  data: any
): Promise<{ data: T | null; error: Error | null }> => {
  try {
    const { data: insertedData, error } = await supabase
      .from(table)
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return { data: insertedData as T, error: null };
  } catch (error) {
    console.error(`Error inserting data into ${table}:`, error);
    return { data: null, error: error as Error };
  }
};

/**
 * Generic function to update data in a Supabase table
 * @param table - The table name
 * @param id - The record ID
 * @param data - The data to update
 * @returns Promise with updated data or error
 */
export const updateData = async <T>(
  table: string,
  id: string,
  data: any
): Promise<{ data: T | null; error: Error | null }> => {
  try {
    const { data: updatedData, error } = await supabase
      .from(table)
      .update(data)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return { data: updatedData as T, error: null };
  } catch (error) {
    console.error(`Error updating data in ${table}:`, error);
    return { data: null, error: error as Error };
  }
};

/**
 * Generic function to delete data from a Supabase table
 * @param table - The table name
 * @param id - The record ID
 * @returns Promise with success status or error
 */
export const deleteData = async (
  table: string,
  id: string
): Promise<{ success: boolean; error: Error | null }> => {
  try {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id);

    if (error) throw error;

    return { success: true, error: null };
  } catch (error) {
    console.error(`Error deleting data from ${table}:`, error);
    return { success: false, error: error as Error };
  }
};

/**
 * Function to upload a file to Supabase storage
 * @param bucket - The storage bucket name
 * @param path - The file path within the bucket
 * @param file - The file to upload
 * @returns Promise with file URL or error
 */
export const uploadFile = async (
  bucket: string,
  path: string,
  file: File
): Promise<{ url: string | null; error: Error | null }> => {
  try {
    const { data, error } = await supabase
      .storage
      .from(bucket)
      .upload(path, file, {
        upsert: true,
        cacheControl: '3600'
      });

    if (error) throw error;

    const { data: publicURL } = supabase
      .storage
      .from(bucket)
      .getPublicUrl(data.path);

    return { url: publicURL.publicUrl, error: null };
  } catch (error) {
    console.error(`Error uploading file to ${bucket}:`, error);
    return { url: null, error: error as Error };
  }
};

/**
 * Function to download a file from Supabase storage
 * @param bucket - The storage bucket name
 * @param path - The file path within the bucket
 * @returns Promise with file data or error
 */
export const downloadFile = async (
  bucket: string,
  path: string
): Promise<{ data: Blob | null; error: Error | null }> => {
  try {
    const { data, error } = await supabase
      .storage
      .from(bucket)
      .download(path);

    if (error) throw error;

    return { data, error: null };
  } catch (error) {
    console.error(`Error downloading file from ${bucket}:`, error);
    return { data: null, error: error as Error };
  }
};
