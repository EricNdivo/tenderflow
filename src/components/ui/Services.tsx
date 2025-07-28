import { Link } from 'react-router-dom'
import { TrendingUp, Shield, Clock } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-blue-600">Financing Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our specialized financing modules designed to meet your specific business needs
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Tender Support */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-bl-3xl"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tender Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Financing solutions for businesses that have won government or private tenders
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Financing Options:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Independent SME - Direct financing for SMEs
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Secondary SME - Partnership-based financing
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Required Documents:</h4>
                  <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Tender document (official notice)
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Notification of Award letter
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Company compliance documents
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      KRA PIN, CR12, Tax Compliance
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/tender-application" 
                className="group w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Apply for Tender Financing
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* PO Support */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-3xl"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">PO Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Multiple financing options for businesses with confirmed purchase orders
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Financing Options:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Partial Funding - Get partial advance funding
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Debt Financing - Competitive rates
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Equity Financing - For larger projects
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Required Documents:</h4>
                  <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Purchase Order document
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Signed Agreement
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Company registration documents
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Financial statements
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/po-application" 
                className="group w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Apply for PO Financing
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose TenderFlow Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TenderFlow?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage your procurement process efficiently and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Compliant</h3>
              <p className="text-gray-600 text-center">Enterprise-grade security with full compliance to procurement regulations and standards.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-center">Process tenders and purchase orders with unprecedented speed and efficiency.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics & Reports</h3>
              <p className="text-gray-600 text-center">Comprehensive analytics and detailed reports for better decision making.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration Tools</h3>
              <p className="text-gray-600 text-center">Advanced collaboration features for teams and stakeholders throughout the process.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Ready</h3>
              <p className="text-gray-600 text-center">Access your tenders and purchase orders from anywhere with our mobile-optimized interface.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Filtering</h3>
              <p className="text-gray-600 text-center">Powerful search and filtering capabilities to find exactly what you need quickly.</p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple <span className="text-emerald-600">Three-Step Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your tender or purchase order financed quickly and efficiently with our streamlined process.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="relative group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Application</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upload your tender award letter or purchase order documents through our secure online platform.
                </p>
              </div>
              {/* Connecting Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Document Review</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team reviews your application and verifies all documentation within 24 hours.
                </p>
              </div>
              {/* Connecting Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Receive Funding</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upon approval, receive your financing to execute your project immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
              <div className="group">
                <div className="text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">24 Hours</div>
                <div className="text-lg text-gray-600 font-medium">Average Review Time</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">95%+</div>
                <div className="text-lg text-gray-600 font-medium">Approval Rate</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">$50M+</div>
                <div className="text-lg text-gray-600 font-medium">Successfully Funded</div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-2xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Application
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-sm text-gray-600 mt-4 font-medium">
                ⚡ Secure process • 🔒 No upfront fees • 📈 Fast approval
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
