import { ArrowRight, CheckCircle, Shield, Users, Clock, Globe } from 'lucide-react'
import Header from '../components/ui/Header'

const SourceSupply = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Global Supplier Network",
      description: "Access our extensive network of verified suppliers across multiple industries and regions."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Quality Assurance",
      description: "Rigorous supplier vetting and quality control processes ensure you receive only the best products."
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Fast Procurement",
      description: "Streamlined sourcing process that reduces procurement time by up to 60%."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Dedicated Support",
      description: "Expert procurement specialists guide you through every step of the sourcing process."
    }
  ]

  const benefits = [
    "Competitive pricing through bulk purchasing power",
    "Comprehensive supplier due diligence",
    "End-to-end procurement management",
    "Real-time order tracking and updates",
    "Quality inspection and certification",
    "Flexible payment terms and financing options"
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Source & Supply
                <span className="block text-green-600">Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with verified suppliers and streamline your procurement process. 
                From sourcing to delivery, we handle it all so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center">
                  Start Sourcing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                  View Suppliers
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Sourcing Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of procurement with our comprehensive sourcing and supply solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Complete Procurement Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  From initial sourcing to final delivery, our platform provides end-to-end 
                  procurement solutions that save you time, money, and resources.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Get Started Today
                </button>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Procurement Process</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold mr-4">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Submit Requirements</h4>
                      <p className="text-gray-600 text-sm">Tell us what you need to source</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold mr-4">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Supplier Matching</h4>
                      <p className="text-gray-600 text-sm">We find the best suppliers for you</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold mr-4">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Check</h4>
                      <p className="text-gray-600 text-sm">Rigorous quality assurance process</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold mr-4">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Delivery</h4>
                      <p className="text-gray-600 text-sm">Fast and secure delivery to your location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Procurement?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have streamlined their sourcing with TenderFlow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                Contact Sales
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SourceSupply
