import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import type { SignUpCredentials, SignInCredentials } from '../lib/auth';
import type { User } from '@supabase/supabase-js';

// Define the auth context type
interface AuthContextType {
  user: User | null;
  profile: any | null;
  loading: boolean;
  error: Error | null;
  signUp: (credentials: SignUpCredentials) => Promise<{ success: boolean; message: string }>;
  signIn: (credentials: SignInCredentials) => Promise<{ success: boolean; message: string }>;
  signOut: () => Promise<{ success: boolean; message: string }>;
  isAuthenticated: () => Promise<boolean>;
  refreshProfile: () => Promise<void>;
}

// Create auth context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider props
interface AuthProviderProps {
  children: ReactNode;
}

// Auth provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  
  return context;
};
