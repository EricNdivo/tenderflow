import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Index from './pages/Index'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'
import TenderApplication from './pages/TenderApplication'
import POApplication from './pages/POApplication'
import SourceSupplyApplication from './pages/SourceSupplyApplication'
import NotFound from './pages/NotFound'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/source-supply" element={<SourceSupplyApplication />} />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={<Dashboard />}
            />
            <Route 
              path="/admin" 
              element={<AdminDashboard />}
            />
            <Route 
              path="/tender-application" 
              element={<TenderApplication />}
            />
            <Route 
              path="/po-application" 
              element={<POApplication />}
            />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
