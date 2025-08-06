import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Globe, Users, Award, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Form submitted:', formData)
    
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Office",
      details: "Karen Green Business Park\nNairobi, Kenya",
      color: "from-blue-500 to-blue-600",
      bgHover: "hover:bg-blue-50"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+254 700 123 456\n+254 730 456 789",
      color: "from-emerald-500 to-emerald-600",
      bgHover: "hover:bg-emerald-50"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@tenderflow.co.ke\nsupport@tenderflow.co.ke",
      color: "from-purple-500 to-purple-600",
      bgHover: "hover:bg-purple-50"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
      color: "from-orange-500 to-orange-600",
      bgHover: "hover:bg-orange-50"
    }
  ]

  const quickServices = [
    { 
      title: "General Inquiry", 
      description: "Questions about our services",
      icon: <MessageCircle className="w-5 h-5" />
    },
    { 
      title: "Loan Application", 
      description: "Start your financing journey",
      icon: <Award className="w-5 h-5" />
    },
    { 
      title: "Technical Support", 
      description: "Help with our platform",
      icon: <Users className="w-5 h-5" />
    },
    { 
      title: "Partnership", 
      description: "Business collaboration opportunities",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {}
        <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 py-24 overflow-hidden">
          {}
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noXarOlbFmsGPnpfMGQW-hYDGHzqZN-98VR9bqosttkoRh6Xis1BC7i3rSJXLggtOnLpZr7WnwxI1q1GpiBQRfWX4w5l4VdG-4t3AQA1QxkwRQ8zXCO2HHrGCxh4dH94CMudpU=s680-w680-h510-rw"
              alt="TenderFlow Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/60 via-teal-600/60 to-blue-600/60"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                <Mail className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Get In
                <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to unlock your business potential? Our expert team at Karen Green Business Park 
                is here to provide personalized financing solutions for your tender and procurement needs.
              </p>
              
              {}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">24hrs</div>
                  <div className="text-white/80 text-sm">Response Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-white/80 text-sm">SMEs Funded</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-white/80 text-sm">Approval Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">5★</div>
                  <div className="text-white/80 text-sm">Client Rating</div>
                </div>
              </div>
              
              {}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group shadow-xl">
                  <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Call Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center group">
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>
        </section>

        {}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Multiple convenient ways to connect with our team. Choose what works best for you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl ${info.bgHover} transition-all duration-300 group cursor-pointer border border-gray-100`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed">{info.details}</p>
                  <div className="mt-4 flex items-center text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Connect now</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {}
              <div>
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Have questions about our financing solutions? Fill out the form below and our 
                    expert team will respond within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-gray-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-gray-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-gray-300"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-gray-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="tender">Tender Financing</option>
                        <option value="po">PO Financing</option>
                        <option value="supply">Source & Supply</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-gray-300"
                      placeholder="Tell us more about your inquiry or financing needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center group transform hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>

              {}
              <div className="space-y-8">
                {}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noXarOlbFmsGPnpfMGQW-hYDGHzqZN-98VR9bqosttkoRh6Xis1BC7i3rSJXLggtOnLpZr7WnwxI1q1GpiBQRfWX4w5l4VdG-4t3AQA1QxkwRQ8zXCO2HHrGCxh4dH94CMudpU=s680-w680-h510-rw"
                    alt="TenderFlow Office - Karen Green Business Park"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Our Office</h3>
                    <p className="text-emerald-200 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Karen Green Business Park, Nairobi
                    </p>
                  </div>
                </div>

                {}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <MessageCircle className="w-6 h-6 text-emerald-600 mr-2" />
                    How Can We Help?
                  </h3>
                  <div className="space-y-4">
                    {quickServices.map((service, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300 cursor-pointer group">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">{service.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {}
        <section className="py-20 bg-gradient-to-br from-gray-100 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-gray-600 text-lg">Located in the heart of Nairobi's premier business district</p>
            </div>
            
            {}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative w-full h-96 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 flex items-center justify-center">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noXarOlbFmsGPnpfMGQW-hYDGHzqZN-98VR9bqosttkoRh6Xis1BC7i3rSJXLggtOnLpZr7WnwxI1q1GpiBQRfWX4w5l4VdG-4t3AQA1QxkwRQ8zXCO2HHrGCxh4dH94CMudpU=s680-w680-h510-rw"
                  alt="TenderFlow Office Location"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 to-blue-600/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Interactive Map Coming Soon</h3>
                    <p className="text-blue-100 mb-4">Karen Green Business Park, Nairobi, Kenya</p>
                    <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-300 flex items-center mx-auto">
                      <Globe className="w-5 h-5 mr-2" />
                      View in Google Maps
                    </button>
                  </div>
                </div>
                
                {}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Get quick answers to the most common questions about our financing services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly can I get approved for financing?",
                  answer: "Our streamlined process typically takes 24-48 hours for approval. For urgent tender deadlines, we offer express processing within 12 hours for qualified applicants."
                },
                {
                  question: "What documents do I need to apply?",
                  answer: "You'll need tender documents, company registration certificate, recent financial statements, valid ID, and bank statements. Our team provides a complete checklist during consultation."
                },
                {
                  question: "Do you work with businesses outside Nairobi?",
                  answer: "Absolutely! While our office is in Nairobi, we serve SMEs nationwide. We offer remote consultations and digital application processing for clients across Kenya."
                },
                {
                  question: "What are your interest rates and fees?",
                  answer: "Our competitive rates start from 1.5% per month, varying based on risk assessment and loan tenure. We provide transparent pricing with no hidden fees during your consultation."
                },
                {
                  question: "Can you help with both government and private tenders?",
                  answer: "Yes! We finance both government and private sector tenders, purchase orders, and supply contracts. Our team has expertise across various industries and tender types."
                },
                {
                  question: "What's the maximum funding amount available?",
                  answer: "We provide financing from KES 100,000 to KES 50 million depending on the tender value, your business profile, and repayment capacity. Custom solutions available for larger requirements."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl p-6 hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 border border-gray-100 hover:border-emerald-200 group">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center group">
                  <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Call Us Now
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group">
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Contact
