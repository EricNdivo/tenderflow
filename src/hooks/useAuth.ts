import { useState, useEffect, useCallback } from 'react';
import { 
  signUp, 
  signIn, 
  signOut, 
  getCurrentUser, 
  getUserProfile,
  isAuthenticated as checkIsAuthenticated
} from '../lib/auth';
import type { SignUpCredentials, SignInCredentials } from '../lib/auth';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Initialize auth state
  const initAuth = useCallback(async () => {
    try {
      setLoading(true);
      const currentUser = await getCurrentUser();
      setUser(currentUser);

      if (currentUser) {
        const userProfile = await getUserProfile();
        setProfile(userProfile);
      }
    } catch (err) {
      console.error('Error initializing auth:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    initAuth();

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`Auth event: ${event}`);
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user);
        const userProfile = await getUserProfile();
        setProfile(userProfile);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setProfile(null);
      }
    });

    // Cleanup listener on unmount
    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, [initAuth]);

  // Handle user registration
  const handleSignUp = async (credentials: SignUpCredentials) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('useAuth: Attempting sign up with:', credentials.email);
      const { user: newUser, error: signUpError, session } = await signUp(credentials);
      
      console.log('useAuth: Sign up response:', { user: newUser, error: signUpError, session });
      
      if (signUpError) {
        console.error('useAuth: Sign up error:', signUpError);
        throw signUpError;
      }
      
      // Set user if registration was successful and didn't require email verification
      // Otherwise, the user should verify their email before being logged in
      if (newUser) {
        console.log('useAuth: Setting new user in state:', newUser);
        setUser(newUser);
      }
      
      // Determine if email confirmation is required
      const requiresEmailConfirmation = newUser && !session;
      const successMessage = requiresEmailConfirmation
        ? 'Registration successful! Please check your email to confirm your registration.'
        : 'Registration successful!';
      
      return { 
        success: true, // Consider signup successful even if email confirmation is required
        message: successMessage
      };
    } catch (err) {
      console.error('useAuth: Registration error caught:', err);
      setError(err as Error);
      return { 
        success: false, 
        message: (err as Error).message || 'Registration failed. Please try again.'
      };
    } finally {
      setLoading(false);
    }
  };

  // Handle user login
  const handleSignIn = async (credentials: SignInCredentials) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('useAuth: Attempting sign in with:', credentials.email);
      const { user: signedInUser, error: signInError, session } = await signIn(credentials);
      
      console.log('useAuth: Sign in response:', { user: signedInUser, error: signInError, session });
      
      if (signInError) {
        console.error('useAuth: Sign in error:', signInError);
        throw signInError;
      }
      
      if (!signedInUser) {
        console.error('useAuth: No user returned from sign in');
        throw new Error('Failed to sign in. Please check your credentials.');
      }
      
      setUser(signedInUser);
      console.log('useAuth: User set in state:', signedInUser);
      
      if (signedInUser) {
        const userProfile = await getUserProfile();
        console.log('useAuth: User profile retrieved:', userProfile);
        setProfile(userProfile);
      }
      
      return { 
        success: !!signedInUser,
        message: signedInUser ? 'Login successful!' : 'Login failed.'
      };
    } catch (err) {
      console.error('useAuth: Login error caught:', err);
      setError(err as Error);
      return { 
        success: false, 
        message: (err as Error).message || 'Login failed. Please check your credentials.'
      };
    } finally {
      setLoading(false);
    }
  };

  // Handle user logout
  const handleSignOut = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { error: signOutError } = await signOut();
      
      if (signOutError) {
        throw signOutError;
      }
      
      setUser(null);
      setProfile(null);
      
      return { 
        success: true,
        message: 'Logout successful!'
      };
    } catch (err) {
      setError(err as Error);
      return { 
        success: false, 
        message: (err as Error).message || 'Logout failed. Please try again.'
      };
    } finally {
      setLoading(false);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = async () => {
    try {
      return await checkIsAuthenticated();
    } catch (err) {
      console.error('Error checking authentication:', err);
      return false;
    }
  };

  return {
    user,
    profile,
    loading,
    error,
    signUp: handleSignUp,
    signIn: handleSignIn,
    signOut: handleSignOut,
    isAuthenticated,
    refreshProfile: async () => {
      if (user) {
        const userProfile = await getUserProfile();
        setProfile(userProfile);
      }
    }
  };
}
