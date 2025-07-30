import { useState } from 'react'
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Search,
  Truck,
  Star,
  Phone,
  Package,
  Building2,
  Laptop,
  Stethoscope,
  Factory,
  MessageSquare,
  Clock,
  GanttChart,
  Gauge,
  BarChart3,
  FileSearch,
  ShieldCheck,
  Boxes,
  LayoutGrid,
  HandshakeIcon,
  Briefcase,
  Globe,
  BadgeCheck,
  Building,
  CircleDollarSign,
  ChevronRight,
  Play,
  HardHat,
  PackageOpen,
  Pill,
  Wrench,
  Leaf,
  Shirt,
  Image
} from 'lucide-react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import AuthModal from '../components/ui/AuthModal'

const SourceSupply = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const openSignupModal = () => {
    setIsAuthModalOpen(true)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Modern Design */}
        <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-24 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute right-0 bottom-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3OTAiIHZpZXdCb3g9IjAgMCAxNDQwIDc5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLTM1LjcgMC4xTDE0NzIuNCAtMS4xVjc4OUgtMzUuN1YwLjF6IiBmaWxsPSIjMkE1NEU0IiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48cGF0aCBkPSJNLTU3LjcgMjQuMUwxNDM5LjQgNDcuOUw5NTkuOCA3ODkuOU0tNTcuNyAyNC4xTDk1OS44IDc4OS45IiBzdHJva2U9IiMyQTU0RTQiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')]"></div>
            <div className="absolute right-10 top-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-4xl opacity-10"></div>
            <div className="absolute -left-20 top-10 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-4xl opacity-10"></div>
            <div className="absolute left-20 bottom-10 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-4xl opacity-10"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-6 shadow-sm">
                  <Boxes className="w-4 h-4" />
                  Comprehensive Sourcing & Supply Solutions
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Streamlined <span className="text-blue-700">Procurement</span> Services
                </h1>

                <p className="text-lg text-gray-600 mb-8 max-w-xl">
                  We connect your business with the right suppliers, negotiate the best prices, and ensure on-time delivery of high-quality products and materials.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <button 
                    onClick={openSignupModal}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors"
                  >
                    <Briefcase className="w-4 h-4" />
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                  
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-700 rounded-lg font-medium transition-colors">
                    <Phone className="w-4 h-4" />
                    Schedule Consultation
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-blue-700" />
                    <span>Verified Suppliers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-blue-700" />
                    <span>Quality Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-blue-700" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* Hero image/illustration */}
              <div className="lg:w-1/2 relative overflow-visible">
                <div className="relative w-full h-full p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <img 
                      src="/src/assets/sourcing-supply-hero.jpg" 
                      alt="Sourcing and Supply Operations" 
                      className="w-full h-auto object-cover aspect-[4/3]"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                      }}
                    />
                    
                    {/* Floating stats cards */}
                    <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3 border border-gray-100 animate-float-slow z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Truck className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">98% On-time</div>
                        <div className="text-xs text-gray-500">Delivery rate</div>
                      </div>
                    </div>
                    
                    <div className="absolute -top-5 -right-5 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3 border border-gray-100 animate-float z-10">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <CircleDollarSign className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">25% Average</div>
                        <div className="text-xs text-gray-500">Cost savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { 
                  number: "500+", 
                  label: "Materials Sourced", 
                  icon: <Package className="w-6 h-6 text-blue-700" />,
                  description: "From construction to medical equipment"
                },
                { 
                  number: "24h", 
                  label: "Response Time", 
                  icon: <Clock className="w-6 h-6 text-blue-700" />,
                  description: "Quick turnaround on all requests"
                },
                { 
                  number: "98%", 
                  label: "Client Satisfaction", 
                  icon: <BadgeCheck className="w-6 h-6 text-blue-700" />,
                  description: "Based on post-project surveys"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 rounded-md p-3 mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Sourcing Process - Modern Design */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Add a full white background that extends to the edges */}
          <div className="absolute inset-0 bg-white"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                <LayoutGrid className="w-4 h-4" />
                Our Proven Process
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Our Sourcing Process <span className="text-indigo-700">Works</span>
              </h2>
              
              <p className="text-lg text-gray-600">
                From identifying your needs to final delivery, our streamlined procurement process ensures efficiency, quality, and reliability at every step.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  step: "01",
                  title: "Requirements Analysis",
                  description: "We begin by understanding your exact needs, specifications, and timeline to establish clear procurement goals.",
                  icon: <FileSearch className="w-8 h-8" />,
                  color: "blue"
                },
                {
                  step: "02",
                  title: "Supplier Selection",
                  description: "Our team identifies and vets optimal suppliers from our global network based on quality, price, and reliability.",
                  icon: <GanttChart className="w-8 h-8" />,
                  color: "indigo"
                },
                {
                  step: "03",
                  title: "Negotiation & Ordering",
                  description: "We leverage our purchasing power to secure the best terms and place orders according to your specifications.",
                  icon: <HandshakeIcon className="w-8 h-8" />,
                  color: "purple"
                },
                {
                  step: "04",
                  title: "Quality Control & Delivery",
                  description: "All products undergo thorough quality checks before coordinated delivery to your location.",
                  icon: <Truck className="w-8 h-8" />,
                  color: "indigo"
                }
              ].map((process, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 h-full hover:shadow-lg transition-all duration-300">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-md">
                      {process.step}
                    </div>
                    
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 mb-6">
                      {process.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Metrics */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl text-white">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Time Efficiency",
                    description: "Average 60% reduction in procurement time compared to traditional methods",
                    icon: <Gauge className="w-8 h-8" />
                  },
                  {
                    title: "Cost Optimization",
                    description: "Our clients typically save 15-30% on total procurement costs",
                    icon: <BarChart3 className="w-8 h-8" />
                  },
                  {
                    title: "Quality Assurance",
                    description: "100% compliance with industry standards and specifications",
                    icon: <ShieldCheck className="w-8 h-8" />
                  }
                ].map((metric, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mr-4 flex-shrink-0">
                      {metric.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{metric.title}</h4>
                      <p className="text-blue-100 text-sm">{metric.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Source - Modern Design */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-60 -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100 rounded-full opacity-60 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Boxes className="w-4 h-4" />
                Sourcing Categories
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What We <span className="text-blue-700">Source</span> For You
              </h2>
              
              <p className="text-lg text-gray-600">
                From construction materials to medical equipment, we source across diverse industries with uncompromising quality and reliability
              </p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  title: "Construction & Building",
                  icon: <Building2 className="w-8 h-8" />,
                  color: "blue",
                  items: ["Cement & Steel", "Roofing Materials", "Tiles & Flooring", "Paint & Hardware"]
                },
                {
                  title: "Medical & Healthcare", 
                  icon: <Stethoscope className="w-8 h-8" />,
                  color: "green",
                  items: ["Hospital Equipment", "Lab Supplies", "Medical Furniture", "Diagnostic Tools"]
                },
                {
                  title: "Technology & IT",
                  icon: <Laptop className="w-8 h-8" />,
                  color: "purple",
                  items: ["Computing Hardware", "Network Equipment", "Software Solutions", "Security Systems"]
                },
                {
                  title: "Industrial Equipment",
                  icon: <Factory className="w-8 h-8" />,
                  color: "orange",
                  items: ["Heavy Machinery", "Power Systems", "Safety Equipment", "Control Systems"]
                },
                {
                  title: "Office & Commercial",
                  icon: <Building className="w-8 h-8" />,
                  color: "pink",
                  items: ["Office Furniture", "Business Equipment", "Storage Solutions", "Meeting Technology"]
                },
                {
                  title: "Agriculture & Food",
                  icon: <Boxes className="w-8 h-8" />,
                  color: "emerald",
                  items: ["Farming Equipment", "Irrigation Systems", "Seeds & Fertilizers", "Processing Equipment"]
                },
                {
                  title: "Automotive & Transport",
                  icon: <Truck className="w-8 h-8" />,
                  color: "red",
                  items: ["Vehicle Parts", "Fleet Equipment", "Maintenance Tools", "Safety Gear"]
                },
                {
                  title: "Energy & Electrical",
                  icon: <Boxes className="w-8 h-8" />,
                  color: "yellow",
                  items: ["Power Equipment", "Lighting Systems", "Electrical Components", "Energy Solutions"]
                }
              ].map((category, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className={`bg-gradient-to-r from-${category.color}-500/10 to-${category.color}-700/10 p-6`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-14 h-14 bg-${category.color}-100 rounded-xl flex items-center justify-center mr-4 shadow-sm text-${category.color}-700 group-hover:scale-110 transition-transform duration-300`}>
                        {category.icon}
                      </div>
                      <h3 className="font-bold text-xl text-gray-900">{category.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-2">
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 flex items-center">
                          <div className={`w-2 h-2 bg-${category.color}-500 rounded-full mr-3 flex-shrink-0`}></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Need Something Specific?
                  </h3>
                  <p className="text-blue-100 mb-6 md:mb-0">
                    Our global network allows us to source virtually anything. Tell us your requirements and we'll handle the rest.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button 
                    onClick={openSignupModal}
                    className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-700 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <Briefcase className="w-5 h-5" />
                    Request Custom Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Linear Design */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <LayoutGrid className="w-4 h-4" />
                Streamlined Process
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Our <span className="text-purple-700">Supply Process</span> Works
              </h2>
              
              <p className="text-lg text-gray-600">
                Our efficient 4-step process takes you from request to delivery
              </p>
            </div>

            {/* Linear Process Steps */}
            <div className="relative mb-16">
              <div className="hidden lg:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {[
                  {
                    step: "1",
                    title: "Submit Request",
                    description: "Tell us your needs, specifications, and timeline",
                    icon: <MessageSquare className="w-6 h-6" />,
                    color: "blue"
                  },
                  {
                    step: "2",
                    title: "We Source",
                    description: "We find the best suppliers and negotiate prices",
                    icon: <Search className="w-6 h-6" />,
                    color: "purple"
                  },
                  {
                    step: "3",
                    title: "Review Quote",
                    description: "Approve transparent pricing and delivery terms",
                    icon: <CheckCircle className="w-6 h-6" />,
                    color: "indigo"
                  },
                  {
                    step: "4",
                    title: "Delivery",
                    description: "We handle procurement and coordinate delivery",
                    icon: <Truck className="w-6 h-6" />,
                    color: "blue"
                  }
                ].map((process, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 shadow-md">
                        {process.step}
                      </div>
                      
                      <div className={`w-14 h-14 bg-${process.color}-100 rounded-lg flex items-center justify-center text-${process.color}-700 mb-4`}>
                        {process.icon}
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-600 text-sm">{process.description}</p>
                    </div>
                    
                    {index < 3 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                        <div className="w-8 h-8 bg-white rounded-full border border-purple-200 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-purple-500" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Key Benefits - More Compact */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                    <BadgeCheck className="w-4 h-4" />
                    Benefits
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Why Our Process Works</h3>
                  <p className="text-gray-600">
                    Our streamlined approach delivers time savings, cost reduction, and quality assurance
                  </p>
                </div>
                
                <div className="md:w-2/3 grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "60% Time Saved",
                      icon: <Clock className="w-5 h-5" />,
                      color: "blue"
                    },
                    {
                      title: "15-30% Cost Savings",
                      icon: <CircleDollarSign className="w-5 h-5" />,
                      color: "green"
                    },
                    {
                      title: "100% Quality Verified",
                      icon: <ShieldCheck className="w-5 h-5" />,
                      color: "purple"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                      <div className={`w-10 h-10 bg-${benefit.color}-100 rounded-lg flex items-center justify-center text-${benefit.color}-700 mr-4 flex-shrink-0`}>
                        {benefit.icon}
                      </div>
                      <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories - Modern Design */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3OTAiIHZpZXdCb3g9IjAgMCAxNDQwIDc5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLTM1LjcgMC4xTDE0NzIuNCAtMS4xVjc4OUgtMzUuN1YwLjF6IiBmaWxsPSIjRkNENDM0IiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48cGF0aCBkPSJNLTU3LjcgMjQuMUwxNDM5LjQgNDcuOUw5NTkuOCA3ODkuOU0tNTcuNyAyNC4xTDk1OS44IDc4OS45IiBzdHJva2U9IiNGQ0Q0MzQiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-amber-500" />
                Success Stories
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted by <span className="text-amber-600">Leading Organizations</span>
              </h2>
              
              <p className="text-lg text-gray-600">
                Companies across Kenya and beyond rely on our expertise to optimize their procurement processes
              </p>
            </div>

            {/* Modern Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {[
                { 
                  number: "500+", 
                  label: "Products Sourced", 
                  icon: <Package className="w-8 h-8" />,
                  color: "blue"
                },
                { 
                  number: "KSh 50M+", 
                  label: "Value Delivered", 
                  icon: <CircleDollarSign className="w-8 h-8" />,
                  color: "green"
                },
                { 
                  number: "200+", 
                  label: "Happy Clients", 
                  icon: <Users className="w-8 h-8" />,
                  color: "indigo"
                },
                { 
                  number: "98%", 
                  label: "Success Rate", 
                  icon: <Star className="w-8 h-8" />,
                  color: "amber"
                }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col items-center hover:shadow-lg transition-all duration-300 relative z-10 h-full">
                    <div className={`w-16 h-16 bg-${stat.color}-100 rounded-xl flex items-center justify-center text-${stat.color}-700 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-700/10 rounded-xl transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-10 shadow-lg border border-amber-100">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Why Organizations Choose TenderFlow</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Join the growing list of satisfied clients who trust us with their procurement needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    icon: <ShieldCheck className="w-8 h-8" />,
                    title: "Verified Suppliers",
                    description: "All suppliers undergo rigorous verification and regular performance assessments",
                    color: "blue"
                  },
                  {
                    icon: <BadgeCheck className="w-8 h-8" />,
                    title: "Quality Guarantee",
                    description: "100% satisfaction guarantee with comprehensive quality assurance protocols",
                    color: "green"
                  },
                  {
                    icon: <Truck className="w-8 h-8" />,
                    title: "Timely Delivery",
                    description: "98% on-time delivery rate with real-time tracking and logistics management",
                    color: "amber"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center text-${feature.color}-700 mb-5`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Modern Design */}
        <section className="py-24 bg-gradient-to-br from-blue-700 to-indigo-800 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3OTAiIHZpZXdCb3g9IjAgMCAxNDQwIDc5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLTM1LjcgMC4xTDE0NzIuNCAtMS4xVjc4OUgtMzUuN1YwLjF6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48cGF0aCBkPSJNLTU3LjcgMjQuMUwxNDM5LjQgNDcuOUw5NTkuOCA3ODkuOU0tNTcuNyAyNC4xTDk1OS44IDc4OS45IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-30"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium inline-block mb-8">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4" />
                  Transform Your Procurement Strategy
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Ready to Elevate Your <span className="text-blue-300">Sourcing Experience?</span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl">
                Join hundreds of successful organizations that trust TenderFlow to optimize their procurement processes, reduce costs, and ensure quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button 
                  onClick={openSignupModal}
                  className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 flex-1"
                >
                  <Briefcase className="w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="bg-blue-600/30 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600/50 transition-all duration-300 flex items-center justify-center gap-3 flex-1">
                  <Phone className="w-5 h-5" />
                  Schedule Consultation
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Expert Guidance",
                    description: "Procurement specialists with industry-specific knowledge to advise your team",
                    icon: <Users className="w-6 h-6" />
                  },
                  {
                    title: "Risk Mitigation",
                    description: "Comprehensive vetting and quality control to minimize procurement risks",
                    icon: <ShieldCheck className="w-6 h-6" />
                  },
                  {
                    title: "Transparent Process",
                    description: "Complete visibility into sourcing, pricing, and delivery timelines",
                    icon: <CheckCircle className="w-6 h-6" />
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-blue-200">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-blue-100">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode="signup"
      />
      
      <Footer />
    </>
  )
}

export default SourceSupply
