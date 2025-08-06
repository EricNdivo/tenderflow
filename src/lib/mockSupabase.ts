// Mock authentication service for development
// This simulates Supabase authentication without requiring actual Supabase credentials

export type MockUser = {
  id: string;
  email: string;
  created_at: string;
  email_confirmed_at?: string;
};

export type MockSession = {
  access_token: string;
  user: MockUser;
  expires_at: number;
};

export type MockAuthResponse = {
  user: MockUser | null;
  session: MockSession | null;
  error: Error | null;
};

// Simple in-memory store for mock users
const mockUsers: { [email: string]: { password: string; user: MockUser } } = {};

// Generate a simple mock user ID
const generateMockId = () => Math.random().toString(36).substr(2, 9);

// Generate a mock access token
const generateMockToken = () => 'mock_token_' + Math.random().toString(36).substr(2, 16);

export const mockSupabase = {
  auth: {
    signUp: async ({ email, password }: { email: string; password: string }): Promise<{ data: { user: MockUser | null; session: MockSession | null }; error: Error | null }> => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check if user already exists
      if (mockUsers[email]) {
        return {
          data: { user: null, session: null },
          error: new Error('User already registered')
        };
      }
      
      // Create mock user
      const mockUser: MockUser = {
        id: generateMockId(),
        email,
        created_at: new Date().toISOString(),
        email_confirmed_at: new Date().toISOString(),
      };
      
      // Store user
      mockUsers[email] = { password, user: mockUser };
      
      // Create mock session
      const mockSession: MockSession = {
        access_token: generateMockToken(),
        user: mockUser,
        expires_at: Date.now() + (60 * 60 * 1000), // 1 hour from now
      };
      
      console.log('Mock signup successful:', { email, userId: mockUser.id });
      
      return {
        data: { user: mockUser, session: mockSession },
        error: null
      };
    },
    
    signInWithPassword: async ({ email, password }: { email: string; password: string }): Promise<{ data: { user: MockUser | null; session: MockSession | null }; error: Error | null }> => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check if user exists and password matches
      const storedUser = mockUsers[email];
      if (!storedUser || storedUser.password !== password) {
        return {
          data: { user: null, session: null },
          error: new Error('Invalid login credentials')
        };
      }
      
      // Create mock session
      const mockSession: MockSession = {
        access_token: generateMockToken(),
        user: storedUser.user,
        expires_at: Date.now() + (60 * 60 * 1000), // 1 hour from now
      };
      
      console.log('Mock signin successful:', { email, userId: storedUser.user.id });
      
      return {
        data: { user: storedUser.user, session: mockSession },
        error: null
      };
    },
    
    signOut: async (): Promise<{ error: Error | null }> => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 200));
      console.log('Mock signout successful');
      return { error: null };
    },
    
    getUser: async (): Promise<{ data: { user: MockUser | null }; error: Error | null }> => {
      // For simplicity, return null (no persisted sessions in mock)
      return {
        data: { user: null },
        error: null
      };
    },
    
    onAuthStateChange: (callback: (event: string, session: MockSession | null) => void) => {
      // Mock auth state listener
      console.log('Mock auth state listener attached');
      return {
        subscription: {
          unsubscribe: () => console.log('Mock auth listener unsubscribed')
        }
      };
    }
  },
  
  from: (table: string) => ({
    select: (columns: string) => ({
      eq: (column: string, value: any) => ({
        single: async () => {
          // Mock database query
          console.log(`Mock query: SELECT ${columns} FROM ${table} WHERE ${column} = ${value}`);
          return {
            data: {
              id: value,
              first_name: 'Mock',
              last_name: 'User',
              email: 'mock@example.com',
              phone: null,
              company_name: null,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
            error: null
          };
        }
      })
    }),
    
    insert: (data: any) => ({
      async then(resolve: (result: { data: any; error: Error | null }) => void) {
        // Mock insert
        console.log(`Mock insert into ${table}:`, data);
        await new Promise(r => setTimeout(r, 200));
        resolve({ data, error: null });
      }
    }),
  })
};
