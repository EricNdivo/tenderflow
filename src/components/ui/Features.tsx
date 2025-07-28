import { Shield, Zap, TrendingUp, Clock, Users, Award } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            Why Choose TenderFlow
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for <span className="text-emerald-600">Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to accelerate your business growth with reliable financing solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-200 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast Processing</h3>
            <p className="text-gray-600 leading-relaxed">
              Get your financing approved in record time with our streamlined digital process and AI-powered document verification.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bank-Grade Security</h3>
            <p className="text-gray-600 leading-relaxed">
              Your sensitive business documents are protected with enterprise-level encryption and compliance standards.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-200 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Rates</h3>
            <p className="text-gray-600 leading-relaxed">
              Access the most competitive financing rates in the market tailored specifically for SMEs and tender winners.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:border-orange-200 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Round-the-clock customer support to help you through every step of your financing journey.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100 hover:border-teal-200 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
            <p className="text-gray-600 leading-relaxed">
              Work with experienced financing specialists who understand the unique challenges of tender and PO financing.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-100 hover:border-yellow-200 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
            <p className="text-gray-600 leading-relaxed">
              Join thousands of successful businesses who have scaled their operations with our reliable financing solutions.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Business?</h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join the growing community of businesses that trust TenderFlow for their financing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors duration-300 shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
