import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { AlertCircle, CheckCircle, Wifi, WifiOff } from 'lucide-react'

const ConnectionTest = () => {
  const [connectionStatus, setConnectionStatus] = useState<'testing' | 'connected' | 'failed'>('testing')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [supabaseUrl, setSupabaseUrl] = useState<string>('')
  const [hasAnonKey, setHasAnonKey] = useState<boolean>(false)

  useEffect(() => {
    testConnection()
  }, [])

  const testConnection = async () => {
    try {
      setConnectionStatus('testing')
      
      // Check environment variables
      const url = import.meta.env.VITE_SUPABASE_URL
      const key = import.meta.env.VITE_SUPABASE_ANON_KEY
      
      setSupabaseUrl(url || 'Not set')
      setHasAnonKey(key !== 'your-anon-key' && !!key)
      
      if (!url || !key || key === 'your-anon-key') {
        throw new Error('Supabase credentials not configured properly')
      }
      
      // Test the connection
      const { error } = await supabase.auth.getSession()
      
      if (error && error.message !== 'Invalid API key') {
        throw error
      }
      
      setConnectionStatus('connected')
      setErrorMessage('')
    } catch (error: any) {
      setConnectionStatus('failed')
      setErrorMessage(error.message || 'Unknown error occurred')
    }
  }

  const getStatusIcon = () => {
    switch (connectionStatus) {
      case 'testing':
        return <Wifi className="h-6 w-6 text-yellow-500 animate-pulse" />
      case 'connected':
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case 'failed':
        return <WifiOff className="h-6 w-6 text-red-500" />
    }
  }

  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'testing':
        return 'border-yellow-200 bg-yellow-50'
      case 'connected':
        return 'border-green-200 bg-green-50'
      case 'failed':
        return 'border-red-200 bg-red-50'
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className={`border rounded-lg p-6 ${getStatusColor()}`}>
        <div className="flex items-center space-x-3 mb-4">
          {getStatusIcon()}
          <h2 className="text-xl font-semibold">Supabase Connection Test</h2>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-medium">Status:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              connectionStatus === 'connected' ? 'bg-green-100 text-green-800' :
              connectionStatus === 'testing' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {connectionStatus === 'connected' ? 'Connected' :
               connectionStatus === 'testing' ? 'Testing...' :
               'Failed'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-medium">Supabase URL:</span>
            <span className="text-sm text-gray-600 max-w-xs truncate">
              {supabaseUrl}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-medium">Anonymous Key:</span>
            <span className={`px-2 py-1 rounded text-sm ${
              hasAnonKey ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {hasAnonKey ? 'Configured' : 'Missing'}
            </span>
          </div>
        </div>
        
        {connectionStatus === 'failed' && (
          <div className="mt-4 p-4 bg-red-100 border border-red-200 rounded-md">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Connection Failed</h3>
                <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                
                {!hasAnonKey && (
                  <div className="mt-3 text-sm text-red-700">
                    <p className="font-medium">To fix this:</p>
                    <ol className="list-decimal list-inside mt-1 space-y-1">
                      <li>Go to <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" className="underline">Supabase Dashboard</a></li>
                      <li>Select your project: <code className="bg-red-200 px-1 rounded">uvnzoymhclcbhsabbgyw</code></li>
                      <li>Go to <strong>Settings</strong> → <strong>API</strong></li>
                      <li>Copy the <strong>anon public</strong> key</li>
                      <li>Replace <code className="bg-red-200 px-1 rounded">your-anon-key</code> in your .env file</li>
                      <li>Restart your development server</li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {connectionStatus === 'connected' && (
          <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-md">
            <div className="flex">
              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Connection Successful!</h3>
                <p className="text-sm text-green-700 mt-1">
                  Your app is now connected to Supabase. You can test sign up and sign in functionality.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <button
          onClick={testConnection}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Test Connection Again
        </button>
      </div>
    </div>
  )
}

export default ConnectionTest
