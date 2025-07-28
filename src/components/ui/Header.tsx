import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/25 group-hover:shadow-2xl group-hover:shadow-indigo-500/40 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
                Tender<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Flow</span>
              </span>
              <span className="text-sm text-slate-500 font-semibold tracking-wide">Financing Solutions</span>
            </div>
          </Link>

          {/* Enhanced Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link 
              to="/" 
              className="text-slate-700 hover:text-indigo-600 transition-all duration-300 font-semibold text-lg relative group"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            
            <Link 
              to="/dashboard" 
              className="text-slate-700 hover:text-indigo-600 transition-all duration-300 font-semibold text-lg relative group"
            >
              Dashboard
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            
            <div className="relative group">
              <span className="text-slate-700 hover:text-indigo-600 transition-all duration-300 font-semibold text-lg cursor-pointer relative">
                Services
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                <svg className="w-4 h-4 ml-1 inline-block transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  <Link 
                    to="/tender-application" 
                    className="flex items-center px-4 py-4 text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300 rounded-xl group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Tender Financing</div>
                      <div className="text-sm text-slate-500">Government & corporate tenders</div>
                    </div>
                  </Link>
                  <Link 
                    to="/po-application" 
                    className="flex items-center px-4 py-4 text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300 rounded-xl group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m4 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0V3a2 2 0 00-2-2H7a2 2 0 00-2 2v2m4 0h2m-2 4h2m-6 4h6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">PO Financing</div>
                      <div className="text-sm text-slate-500">Purchase order funding</div>
                    </div>
                  </Link>
                  <Link 
                    to="/source-supply" 
                    className="flex items-center px-4 py-4 text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300 rounded-xl group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Source & Supply</div>
                      <div className="text-sm text-slate-500">Procurement & supply chain</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="#" 
              className="text-slate-700 hover:text-indigo-600 transition-all duration-300 font-semibold text-lg relative group"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            
            <Link 
              to="#" 
              className="text-slate-700 hover:text-indigo-600 transition-all duration-300 font-semibold text-lg relative group"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </nav>

          {/* Enhanced Auth Buttons */}
          <div className="flex items-center space-x-6">
            <Link
              to="/login"
              className="text-slate-700 hover:text-indigo-600 transition-all duration-300 font-semibold text-lg relative group"
            >
              Login
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            
            <Link
              to="/register"
              className="relative group bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-500 font-bold text-lg shadow-2xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
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
    </header>
  )
}

export default Header
