import { supabase } from './supabase';
import type { User } from '@supabase/supabase-js';

export type SignUpCredentials = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  companyName?: string;
};

export type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthResponse = {
  user: User | null;
  session: any | null;
  error: Error | null;
};

/**
 * Sign up a new user
 * @param credentials User sign up credentials
 * @returns AuthResponse
 */
export const signUp = async (credentials: SignUpCredentials): Promise<AuthResponse> => {
  try {
    console.log('Attempting to sign up with:', credentials.email);
    
    // Step 1: Sign up the user with email and password
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password,
    });

    if (authError) {
      console.error('Supabase signup error:', authError);
      throw authError;
    }

    console.log('Auth signup response:', authData);

    // Step 2: If auth successful, add user profile to the profiles table
    if (authData.user) {
      console.log('Creating profile for user:', authData.user.id);
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          first_name: credentials.firstName,
          last_name: credentials.lastName,
          phone: credentials.phone || null,
          company_name: credentials.companyName || null,
          email: credentials.email,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

      if (profileError) {
        console.error('Error creating user profile:', profileError);
        // If profile creation fails, we could delete the auth user
        // but that might be handled separately with admin verification
      }
    }

    return {
      user: authData.user,
      session: authData.session,
      error: null,
    };
  } catch (error) {
    console.error('Sign up error:', error);
    return {
      user: null,
      session: null,
      error: error as Error,
    };
  }
};

/**
 * Sign in an existing user
 * @param credentials User sign in credentials
 * @returns AuthResponse
 */
export const signIn = async (credentials: SignInCredentials): Promise<AuthResponse> => {
  try {
    console.log('Attempting to sign in with:', credentials.email);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) {
      console.error('Supabase sign in error:', error);
      throw error;
    }

    console.log('Sign in successful:', data);
    return {
      user: data.user,
      session: data.session,
      error: null,
    };
  } catch (error) {
    console.error('Sign in error:', error);
    return {
      user: null,
      session: null,
      error: error as Error,
    };
  }
};

/**
 * Sign out the current user
 * @returns Promise<{ error: Error | null }>
 */
export const signOut = async (): Promise<{ error: Error | null }> => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    
    return { error: null };
  } catch (error) {
    console.error('Sign out error:', error);
    return { error: error as Error };
  }
};

/**
 * Get the current authenticated user
 * @returns Promise<User | null>
 */
export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const { data } = await supabase.auth.getUser();
    return data?.user || null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

/**
 * Get the current user's profile data
 * @returns Promise<any | null>
 */
export const getUserProfile = async (): Promise<any | null> => {
  try {
    const user = await getCurrentUser();
    
    if (!user) return null;
    
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

/**
 * Check if a user is authenticated
 * @returns Promise<boolean>
 */
export const isAuthenticated = async (): Promise<boolean> => {
  const user = await getCurrentUser();
  return !!user;
};

/**
 * Reset password for a user
 * @param email The email of the user
 * @returns Promise<{ error: Error | null }>
 */
export const resetPassword = async (email: string): Promise<{ error: Error | null }> => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    
    if (error) throw error;
    
    return { error: null };
  } catch (error) {
    console.error('Password reset error:', error);
    return { error: error as Error };
  }
};

/**
 * Update user password
 * @param newPassword The new password
 * @returns Promise<{ error: Error | null }>
 */
export const updatePassword = async (newPassword: string): Promise<{ error: Error | null }> => {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });
    
    if (error) throw error;
    
    return { error: null };
  } catch (error) {
    console.error('Update password error:', error);
    return { error: error as Error };
  }
};
