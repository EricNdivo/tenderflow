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
          {/* Modern TenderFlow Logo */}
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

          {/* Auth Buttons and Dashboard */}
          <div className="flex items-center space-x-4">
            {/* Special Dashboard Button */}
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 flex items-center space-x-2 group"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z" />
              </svg>
              <span>Dashboard</span>
            </Link>

            <button
              onClick={openLoginModal}
              className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
            >
              Login
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            
            <button
              onClick={openSignupModal}
              className="relative group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-lg hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 font-medium shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
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
