import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Award, Building, User, DollarSign, FileText, Calendar, CreditCard, CheckCircle, AlertCircle } from 'lucide-react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'

const TenderApplication = () => {
  const [selectedFinancing, setSelectedFinancing] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    registrationNumber: '',
    taxId: '',
    businessType: '',
    yearsInBusiness: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    
    // Tender Information
    tenderTitle: '',
    tenderReference: '',
    awardingAuthority: '',
    contractValue: '',
    awardDate: '',
    implementationPeriod: '',
    
    // Financing Details
    financingType: '',
    requestedAmount: '',
    purposeOfFunding: '',
    repaymentPeriod: '',
    
    // Additional Information
    previousExperience: '',
    collateralOffered: '',
    additionalInfo: ''
  })

  const financingOptions = [
    {
      id: 'independent-sme',
      title: 'Independent SME Financing',
      description: 'Direct financing for small and medium enterprises with proven track records.',
      features: [
        'Quick approval process',
        'Competitive interest rates',
        'Flexible repayment terms',
        'Minimal collateral requirements'
      ],
      color: 'indigo'
    },
    {
      id: 'secondary-sme',
      title: 'Secondary SME Support',
      description: 'Partnership-based financing with additional mentorship and business development support.',
      features: [
        'Business development support',
        'Mentorship programs',
        'Network access',
        'Capacity building assistance'
      ],
      color: 'purple'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-sm breadcrumbs mb-4">
              <Link to="/dashboard" className="text-indigo-600 hover:text-indigo-500">
                Dashboard
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900">Tender Financing Application</span>
            </nav>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Tender Financing Application</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Get financing to support your tender bid and execution. 
                  We provide funding at every stage of your tendering process.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        currentStep >= step 
                          ? 'bg-indigo-500 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {step}
                      </div>
                      {step < 4 && (
                        <div className={`w-16 h-1 mx-2 ${
                          currentStep > step ? 'bg-indigo-500' : 'bg-gray-200'
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
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    We've received your tender financing application. Our team will review it and contact you within 24-48 hours.
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      <strong>Next Steps:</strong>
                    </p>
                    <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Document verification
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Credit assessment
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Approval and funding
                      </li>
                    </ul>
                  </div>
                  <Link 
                    to="/dashboard" 
                    className="inline-block mt-8 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition-colors"
                  >
                    Return to Dashboard
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Financing Type Selection */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Select Your Financing Option</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {financingOptions.map((option) => (
                          <div 
                            key={option.id}
                            onClick={() => setSelectedFinancing(option.id)}
                            className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
                              selectedFinancing === option.id 
                                ? `border-${option.color}-500 bg-${option.color}-50 shadow-lg` 
                                : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-center mb-4">
                              <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                                selectedFinancing === option.id 
                                  ? `border-${option.color}-500 bg-${option.color}-500` 
                                  : 'border-gray-300'
                              }`}>
                                {selectedFinancing === option.id && (
                                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                                )}
                              </div>
                              <h4 className="text-lg font-semibold text-gray-900">{option.title}</h4>
                            </div>
                            <p className="text-gray-600 mb-4">{option.description}</p>
                            <div className="space-y-2">
                              {option.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-sm text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {!selectedFinancing && (
                        <div className="flex items-center text-amber-600 bg-amber-50 p-4 rounded-lg">
                          <AlertCircle className="w-5 h-5 mr-2" />
                          <span>Please select a financing option to continue</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Company Information */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Company Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number *</label>
                          <input
                            type="text"
                            name="registrationNumber"
                            value={formData.registrationNumber}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID/PIN</label>
                          <input
                            type="text"
                            name="taxId"
                            value={formData.taxId}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                          <select
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          >
                            <option value="">Select business type</option>
                            <option value="sole-proprietorship">Sole Proprietorship</option>
                            <option value="partnership">Partnership</option>
                            <option value="limited-company">Limited Company</option>
                            <option value="ngo">NGO/Non-Profit</option>
                            <option value="cooperative">Cooperative</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Years in Business *</label>
                          <input
                            type="number"
                            name="yearsInBusiness"
                            value={formData.yearsInBusiness}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            min="0"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                          <input
                            type="text"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
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
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
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
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Business Address *</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          required
                        />
                      </div>
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
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
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
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="e.g., GOK/MOH/2024/001"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Awarding Authority *</label>
                          <input
                            type="text"
                            name="awardingAuthority"
                            value={formData.awardingAuthority}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="e.g., Ministry of Health, County Government..."
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Contract Value (USD) *</label>
                          <input
                            type="number"
                            name="contractValue"
                            value={formData.contractValue}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            min="0"
                            step="0.01"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Award Date</label>
                          <input
                            type="date"
                            name="awardDate"
                            value={formData.awardDate}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Implementation Period</label>
                        <input
                          type="text"
                          name="implementationPeriod"
                          value={formData.implementationPeriod}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g., 12 months, 6 months..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Financing Details */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Financing Details</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Type of Financing Needed *</label>
                          <select
                            name="financingType"
                            value={formData.financingType}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          >
                            <option value="">Select financing type</option>
                            <option value="bid-bond">Bid Bond/Guarantee</option>
                            <option value="performance-bond">Performance Bond</option>
                            <option value="working-capital">Working Capital</option>
                            <option value="equipment-financing">Equipment Financing</option>
                            <option value="comprehensive">Comprehensive Package</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Requested Amount (USD) *</label>
                          <input
                            type="number"
                            name="requestedAmount"
                            value={formData.requestedAmount}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            min="0"
                            step="0.01"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of Funding *</label>
                        <textarea
                          name="purposeOfFunding"
                          value={formData.purposeOfFunding}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Describe how you will use the funds..."
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Repayment Period</label>
                        <select
                          name="repaymentPeriod"
                          value={formData.repaymentPeriod}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="">Select repayment period</option>
                          <option value="3-months">3 Months</option>
                          <option value="6-months">6 Months</option>
                          <option value="12-months">12 Months</option>
                          <option value="18-months">18 Months</option>
                          <option value="24-months">24 Months</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Previous Experience</label>
                        <textarea
                          name="previousExperience"
                          value={formData.previousExperience}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Describe your previous experience with similar projects..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Collateral Offered</label>
                        <textarea
                          name="collateralOffered"
                          value={formData.collateralOffered}
                          onChange={handleInputChange}
                          rows={2}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Describe any collateral you can offer..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                        <textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Any additional information that would help us evaluate your application..."
                        />
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
                          (currentStep === 1 && !selectedFinancing) ||
                          (currentStep === 2 && (!formData.companyName || !formData.registrationNumber || !formData.businessType || !formData.contactPerson || !formData.email || !formData.phone)) ||
                          (currentStep === 3 && (!formData.tenderTitle || !formData.awardingAuthority || !formData.contractValue))
                        }
                        className={`px-6 py-3 rounded-lg font-semibold ${
                          (currentStep === 1 && !selectedFinancing) ||
                          (currentStep === 2 && (!formData.companyName || !formData.registrationNumber || !formData.businessType || !formData.contactPerson || !formData.email || !formData.phone)) ||
                          (currentStep === 3 && (!formData.tenderTitle || !formData.awardingAuthority || !formData.contractValue))
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-indigo-600 text-white hover:bg-indigo-500'
                        }`}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.financingType || !formData.requestedAmount || !formData.purposeOfFunding}
                        className={`px-8 py-3 rounded-lg font-semibold flex items-center ${
                          isSubmitting || !formData.financingType || !formData.requestedAmount || !formData.purposeOfFunding
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-indigo-600 text-white hover:bg-indigo-500'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <FileText className="w-4 h-4 mr-2" />
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
