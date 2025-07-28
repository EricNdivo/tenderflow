const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple three-step process to get your tender or purchase order financed quickly and efficiently.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Submit Application</h3>
            <p className="text-gray-600 leading-relaxed">
              Upload your tender award letter or purchase order documents through our secure online platform.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Review</h3>
            <p className="text-gray-600 leading-relaxed">
              Our team reviews your application and verifies all documentation within 24 hours.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Receive Funding</h3>
            <p className="text-gray-600 leading-relaxed">
              Upon approval, receive your financing to execute your project immediately.
            </p>
          </div>
        </div>

        {/* Key Stats */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24 Hours</div>
              <div className="text-gray-600">Average Review Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%+</div>
              <div className="text-gray-600">Approval Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">$50M+</div>
              <div className="text-gray-600">Successfully Funded</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Start Your Application
          </button>
          <p className="text-sm text-gray-500 mt-3">Secure process • No upfront fees • Fast approval</p>
        </div>
      </div>
    </section>
  )
}

export default Features
