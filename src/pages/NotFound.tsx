import { Link } from 'react-router-dom'
import Header from '../components/ui/Header'

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.493.905-6.077 2.389A8 8 0 119.076 5.61a7.993 7.993 0 012.924 0A8 8 0 0118.924 17.39 7.962 7.962 0 0117 15a7.962 7.962 0 00-5-1.709V12"
              />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-6">
          {}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </Link>
            
            <Link
              to="/dashboard"
              className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium"
            >
              Go to Dashboard
            </Link>
          </div>

          {}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Or explore our financing solutions:</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {}
              <Link
                to="/tender-application"
                className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4 group-hover:bg-indigo-200 transition-colors">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.493.905-6.077 2.389A8 8 0 119.076 5.61a7.993 7.993 0 012.924 0A8 8 0 0118.924 17.39 7.962 7.962 0 0117 15a7.962 7.962 0 00-5-1.709V12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      Tender Financing Application
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Get financing to support your tender bid and execution. We provide funding at every stage of your tendering process.
                    </p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                        <span>Bid bond financing</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                        <span>Performance guarantee</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                        <span>Working capital support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {}
              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Independent SME Support
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Comprehensive financing for independent small and medium enterprises
                    </p>
                    <div className="grid grid-cols-1 gap-4 text-xs">
                      <div>
                        <h5 className="font-medium text-gray-800 mb-1">Primary SME Support</h5>
                        <div className="space-y-1 text-gray-500">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                            <span>Bid bond financing</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                            <span>Performance guarantee</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                            <span>Working capital support</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800 mb-1">Secondary SME Support</h5>
                        <div className="space-y-1 text-gray-500">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                            <span>Subcontractor financing</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                            <span>Supply chain support</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                            <span>Equipment financing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="mt-3 text-green-600 hover:text-green-700 font-medium text-sm">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? <a href="mailto:support@tenderplus.com" className="text-indigo-600 hover:text-indigo-500">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default NotFound
