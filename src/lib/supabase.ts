import { createClient } from '@supabase/supabase-js'
import { mockSupabase } from './mockSupabase'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if we have valid Supabase credentials
const hasValidCredentials = supabaseUrl && 
                           supabaseAnonKey && 
                           supabaseUrl !== 'https://your-project-id.supabase.co' && 
                           supabaseAnonKey !== 'your-anon-key'

console.log('Supabase URL:', supabaseUrl)
console.log('Has valid credentials:', hasValidCredentials)

// Use real Supabase if credentials are valid, otherwise use mock
export const supabase = hasValidCredentials 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : mockSupabase as any

// Log which service we're using
if (hasValidCredentials) {
  console.log('✅ Using real Supabase service')
} else {
  console.log('⚠️ Using mock Supabase service (for development)')
}
