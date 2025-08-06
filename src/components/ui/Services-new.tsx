import { useState } from 'react'
import { FileText, Users, CheckCircle, Clock, AccessibilityIcon, Award, Heart, UserCheck } from 'lucide-react'
import AuthModal from './AuthModal'

const Services = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const openSignupModal = () => {
    setIsAuthModalOpen(true)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-emerald-600">Tender Documentation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tender preparation services designed to help you win more contracts with professionally crafted proposals
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* General Tender Services */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-bl-3xl"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">General Tender Documentation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive tender document preparation for businesses and individuals seeking government and private contracts
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">What We Provide:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                      <span>Custom proposal writing and formatting</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                      <span>Technical specification compliance</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                      <span>Financial proposal preparation</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
                      <span>Document review and editing</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Process:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs mr-3">1</div>
                      <span>Consultation and requirement analysis</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs mr-3">2</div>
                      <span>Document drafting and preparation</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs mr-3">3</div>
                      <span>Review and quality assurance</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs mr-3">4</div>
                      <span>Final submission support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>3-5 days</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="w-4 h-4 mr-1" />
                    <span>95% success rate</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={openSignupModal}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* PWD Support Services */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-3xl"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AccessibilityIcon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">PWD Specialized Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dedicated tender documentation services for People with Disabilities (PWD) with accessibility-focused support and specialized assistance
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Inclusive Services:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Heart className="w-4 h-4 text-purple-500 mr-3" />
                      <span>Accessible document formatting</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <UserCheck className="w-4 h-4 text-purple-500 mr-3" />
                      <span>One-on-one consultation support</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <AccessibilityIcon className="w-4 h-4 text-purple-500 mr-3" />
                      <span>Assistive technology compatibility</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 text-purple-500 mr-3" />
                      <span>Dedicated accessibility specialist</span>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Additional Support:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-pink-500 mr-3" />
                      <span>Audio document review sessions</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-pink-500 mr-3" />
                      <span>Extended consultation time</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-pink-500 mr-3" />
                      <span>Flexible communication options</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-pink-500 mr-3" />
                      <span>Priority support and follow-up</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>5-7 days</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>100% dedicated support</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={openSignupModal}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Specialized Support
              </button>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Document Review</h4>
            <p className="text-gray-600 text-sm">Professional review and editing of existing tender documents</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h4>
            <p className="text-gray-600 text-sm">Expert advice on tender strategy and compliance requirements</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Rush Service</h4>
            <p className="text-gray-600 text-sm">Express tender preparation for urgent deadlines</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Win Your Next Tender?</h3>
            <p className="text-xl mb-8 text-emerald-100">
              Join hundreds of successful clients who trust us with their tender documentation
            </p>
            <button 
              onClick={openSignupModal}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your Application Today
            </button>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode="signup"
      />
    </section>
  )
}

export default Services
