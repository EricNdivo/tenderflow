import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FileText, User, Building, CheckCircle, Clock, AccessibilityIcon, Upload, Save } from 'lucide-react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'

const TenderApplication = () => {
  const [serviceType, setServiceType] = useState('')
  const [formData, setFormData] = useState({
    // Client Information
    clientType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    companyRegistration: '',
    taxNumber: '',
    
    // Accessibility Support
    requiresAccessibilitySupport: false,
    accessibilityNeeds: '',
    preferredCommunication: '',
    
    // Tender Information
    tenderTitle: '',
    tenderReference: '',
    tenderingOrganization: '',
    submissionDeadline: '',
    tenderCategory: '',
    estimatedValue: '',
    
    // Requirements
    servicesRequired: [] as string[],
    urgentDeadline: false,
    additionalRequirements: '',
    
    // Documents
    attachedDocuments: []
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const serviceOptions = [
    { 
      id: 'general', 
      name: 'General Tender Documentation', 
      description: 'Standard tender preparation and documentation services',
      icon: FileText,
      price: 'From KSh 65,000'
    },
    { 
      id: 'pwd-support', 
      name: 'PWD Specialized Support', 
      description: 'Dedicated accessibility-focused tender preparation with specialized assistance',
      icon: AccessibilityIcon,
      price: 'From KSh 52,000'
    }
  ]

  const servicesRequired = [
    'Complete tender document preparation',
    'Technical specification writing',
    'Financial proposal preparation',
    'Document review and editing',
    'Compliance verification',
    'Submission support',
    'Audio document review (PWD)',
    'Extended consultation time (PWD)'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-sm breadcrumbs mb-4">
              <Link to="/dashboard" className="text-emerald-600 hover:text-emerald-500">
                Dashboard
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900">Tender Documentation Application</span>
            </nav>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Tender Documentation Application</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Let us help you create winning tender documents. Provide your details and requirements below.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        currentStep >= step 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {step}
                      </div>
                      {step < 4 && (
                        <div className={`w-16 h-1 mx-2 ${
                          currentStep > step ? 'bg-emerald-500' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-gray-600">
                  Step {currentStep} of 4
                </div>
              </div>

              {showSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    We've received your tender documentation request. Our team will contact you within 24 hours to discuss your requirements.
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      <strong>Next Steps:</strong>
                    </p>
                    <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                        Initial consultation call scheduled
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                        Requirements analysis
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                        Documentation preparation begins
                      </li>
                    </ul>
                  </div>
                  <Link 
                    to="/dashboard" 
                    className="inline-block mt-8 bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition-colors"
                  >
                    Return to Dashboard
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service Selection */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Select Your Service</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {serviceOptions.map((service) => (
                          <div 
                            key={service.id}
                            onClick={() => setServiceType(service.id)}
                            className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
                              serviceType === service.id 
                                ? 'border-emerald-500 bg-emerald-50 shadow-lg' 
                                : 'border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-center mb-4">
                              <service.icon className={`w-8 h-8 mr-3 ${
                                serviceType === service.id ? 'text-emerald-600' : 'text-gray-600'
                              }`} />
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                serviceType === service.id 
                                  ? 'border-emerald-500 bg-emerald-500' 
                                  : 'border-gray-300'
                              }`}>
                                {serviceType === service.id && (
                                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                                )}
                              </div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <div className="text-emerald-600 font-semibold">{service.price}</div>
                          </div>
                        ))}
                      </div>

                      {serviceType && (
                        <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
                          <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {servicesRequired.slice(0, serviceType === 'pwd-support' ? 8 : 6).map((service, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                                {service}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Client Information */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Client Information</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Client Type *</label>
                        <div className="grid grid-cols-2 gap-4">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="clientType"
                              value="individual"
                              checked={formData.clientType === 'individual'}
                              onChange={handleInputChange}
                              className="mr-2"
                              required
                            />
                            <User className="w-4 h-4 mr-2" />
                            Individual
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="clientType"
                              value="business"
                              checked={formData.clientType === 'business'}
                              onChange={handleInputChange}
                              className="mr-2"
                              required
                            />
                            <Building className="w-4 h-4 mr-2" />
                            Business/Organization
                          </label>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          />
                        </div>
                      </div>

                      {formData.clientType === 'business' && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                            <input
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                              required={formData.clientType === 'business'}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
                            <input
                              type="text"
                              name="companyRegistration"
                              value={formData.companyRegistration}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                            />
                          </div>
                        </div>
                      )}

                      {/* Accessibility Support Section */}
                      {serviceType === 'pwd-support' && (
                        <div className="bg-purple-50 p-6 rounded-xl">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Support</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  name="requiresAccessibilitySupport"
                                  checked={formData.requiresAccessibilitySupport}
                                  onChange={handleInputChange}
                                  className="mr-2"
                                />
                                I require specialized accessibility support
                              </label>
                            </div>

                            {formData.requiresAccessibilitySupport && (
                              <>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Please describe your accessibility needs
                                  </label>
                                  <textarea
                                    name="accessibilityNeeds"
                                    value={formData.accessibilityNeeds}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                                    placeholder="e.g., screen reader compatibility, large print documents, audio formats..."
                                  />
                                </div>

                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred Communication Method
                                  </label>
                                  <select
                                    name="preferredCommunication"
                                    value={formData.preferredCommunication}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                                  >
                                    <option value="">Select preferred method</option>
                                    <option value="email">Email</option>
                                    <option value="phone">Phone Call</option>
                                    <option value="video">Video Call</option>
                                    <option value="text">Text Message</option>
                                    <option value="in-person">In-Person Meeting</option>
                                  </select>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 3: Tender Information */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tender Information</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tender Title *</label>
                        <input
                          type="text"
                          name="tenderTitle"
                          value={formData.tenderTitle}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Enter the full tender title"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Tender Reference Number</label>
                          <input
                            type="text"
                            name="tenderReference"
                            value={formData.tenderReference}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="e.g., RFP-2024-001"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Tendering Organization *</label>
                          <input
                            type="text"
                            name="tenderingOrganization"
                            value={formData.tenderingOrganization}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="e.g., Ministry of Health, County Government..."
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Submission Deadline *</label>
                          <input
                            type="datetime-local"
                            name="submissionDeadline"
                            value={formData.submissionDeadline}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Tender Value</label>
                          <input
                            type="text"
                            name="estimatedValue"
                            value={formData.estimatedValue}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="e.g., KSh 6,500,000 - KSh 13,000,000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tender Category *</label>
                        <select
                          name="tenderCategory"
                          value={formData.tenderCategory}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                          required
                        >
                          <option value="">Select category</option>
                          <option value="goods">Goods/Products</option>
                          <option value="services">Services</option>
                          <option value="works">Works/Construction</option>
                          <option value="consultancy">Consultancy</option>
                          <option value="ict">ICT/Technology</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="education">Education</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="urgentDeadline"
                            checked={formData.urgentDeadline}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <Clock className="w-4 h-4 mr-2 text-amber-500" />
                          This is an urgent deadline (less than 5 days)
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Requirements & Documents */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Requirements & Additional Information</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Requirements or Special Instructions
                        </label>
                        <textarea
                          name="additionalRequirements"
                          value={formData.additionalRequirements}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Please provide any specific requirements, formatting needs, or additional services you may need..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Upload Supporting Documents (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">
                            Drop files here or click to browse
                          </p>
                          <p className="text-xs text-gray-500">
                            Tender documents, requirements, company profiles, etc. (PDF, DOC, DOCX)
                          </p>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(_e) => {
                              // Handle file upload logic here
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-emerald-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-3">Service Summary</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Service Type:</span>
                            <span className="font-medium">
                              {serviceType === 'pwd-support' ? 'PWD Specialized Support' : 'General Tender Documentation'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Estimated Timeline:</span>
                            <span className="font-medium">
                              {serviceType === 'pwd-support' ? '5-7 business days' : '3-5 business days'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Rush Service:</span>
                            <span className="font-medium">
                              {formData.urgentDeadline ? 'Yes (+50% fee)' : 'No'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-8 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className={`px-6 py-3 rounded-lg font-semibold ${
                        currentStep === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Previous
                    </button>

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={
                          (currentStep === 1 && !serviceType) ||
                          (currentStep === 2 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.clientType))
                        }
                        className={`px-6 py-3 rounded-lg font-semibold ${
                          (currentStep === 1 && !serviceType) ||
                          (currentStep === 2 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.clientType))
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-emerald-600 text-white hover:bg-emerald-500'
                        }`}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.tenderTitle || !formData.tenderingOrganization || !formData.submissionDeadline || !formData.tenderCategory}
                        className={`px-8 py-3 rounded-lg font-semibold flex items-center ${
                          isSubmitting || !formData.tenderTitle || !formData.tenderingOrganization || !formData.submissionDeadline || !formData.tenderCategory
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-emerald-600 text-white hover:bg-emerald-500'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4 mr-2" />
                            Submit Application
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TenderApplication
