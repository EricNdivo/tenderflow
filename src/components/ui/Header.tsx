import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthModal from './AuthModal'

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')

  const openLoginModal = () => {
    setAuthMode('login')
    setIsAuthModalOpen(true)
  }

  const openSignupModal = () => {
    setAuthMode('signup')
    setIsAuthModalOpen(true)
  }
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Modern Tender Plus Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Logo Icon - Financial/Flow themed */}
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/25 transition-all duration-300 transform group-hover:scale-105">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                Tender<span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Flow</span>
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Financing Solutions</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            
            <div className="relative group">
              <span className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium cursor-pointer relative flex items-center">
                Services
                <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  <Link 
                    to="/tender-application" 
                    className="flex items-center px-3 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 rounded-lg group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Tender Financing</div>
                      <div className="text-xs text-slate-500">Government & corporate tenders</div>
                    </div>
                  </Link>
                  <Link 
                    to="/po-application" 
                    className="flex items-center px-3 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 rounded-lg group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m4 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0V3a2 2 0 00-2-2H7a2 2 0 00-2 2v2m4 0h2m-2 4h2m-6 4h6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-sm">PO Financing</div>
                      <div className="text-xs text-slate-500">Purchase order funding</div>
                    </div>
                  </Link>
                  <Link 
                    to="/source-supply" 
                    className="flex items-center px-3 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 rounded-lg group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Source & Supply</div>
                      <div className="text-xs text-slate-500">Procurement & supply chain</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="#" 
              className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            
            <Link 
              to="/contact" 
              className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </nav>

          {/* Enhanced Auth Buttons and Dashboard */}
          <div className="flex items-center space-x-3">
            {/* Enhanced Dashboard Button */}
            <Link
              to="/dashboard"
              className="relative group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-xl hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 hover:scale-105 flex items-center space-x-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z" />
              </svg>
              <span className="relative z-10">Dashboard</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse group-hover:scale-110 transition-transform"></div>
            </Link>

            {/* Enhanced Join Us Button */}
            <button
              onClick={openSignupModal}
              className="relative group text-slate-700 hover:text-emerald-600 transition-all duration-300 font-semibold px-4 py-2.5 rounded-xl hover:bg-emerald-50 border-2 border-transparent hover:border-emerald-200 transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <span>Join Us</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            
            {/* Enhanced Login Button - Now Last */}
            <button
              onClick={openLoginModal}
              className="relative group text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 border-2 border-transparent hover:border-blue-200 transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Login</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>

            {/* Admin Access Button */}
            <Link 
              to="/admin"
              className="relative group text-slate-700 hover:text-purple-600 transition-all duration-300 font-semibold px-4 py-2.5 rounded-xl hover:bg-purple-50 border-2 border-transparent hover:border-purple-200 transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Admin</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button (for future mobile implementation) */}
          <div className="lg:hidden">
            <button className="text-slate-700 hover:text-indigo-600 transition-colors p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </header>
  )
}

export default Header
