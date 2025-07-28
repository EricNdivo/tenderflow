import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/ui/Header'

const TenderApplication = () => {
  const [selectedFinancing, setSelectedFinancing] = useState('')
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
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
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0L4 20l5-5 5 5-4 4z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Tender Financing Application</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get financing to support your tender bid and execution. 
                We provide funding at every stage of your tendering process.
              </p>
            </div>

            {/* Financing Options Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Your Financing Option *</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div 
                  onClick={() => setSelectedFinancing('independent-sme')}
                  className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
                    selectedFinancing === 'independent-sme' 
                      ? 'border-indigo-500 bg-indigo-50 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      selectedFinancing === 'independent-sme' 
                        ? 'border-indigo-500 bg-indigo-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedFinancing === 'independent-sme' && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Independent SME Support</h4>
                  <p className="text-sm text-gray-600 mb-3">Comprehensive financing for independent small and medium enterprises</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Bid bond financing</li>
                    <li>• Performance guarantee</li>
                    <li>• Working capital support</li>
                  </ul>
                </div>
                
                <div 
                  onClick={() => setSelectedFinancing('secondary-sme')}
                  className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
                    selectedFinancing === 'secondary-sme' 
                      ? 'border-blue-500 bg-blue-50 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <input
                    type="radio"
                    id="secondary-sme"
                    name="financingOption"
                    value="secondary-sme"
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="secondary-sme"
                    className="block cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 peer-checked:border-blue-600 peer-checked:bg-gradient-to-br peer-checked:from-blue-100 peer-checked:to-blue-200 transition-all duration-200 transform hover:scale-[1.02] peer-checked:scale-[1.02]"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-gray-900">Secondary SME Support</h3>
                          <div className="w-5 h-5 border-2 border-blue-300 rounded-full peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center">
                            <div className="hidden peer-checked:block w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Secondary contractors and subcontractor financing solutions
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1">
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            <span>Subcontractor financing</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            <span>Supply chain support</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            <span>Equipment financing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white shadow-2xl rounded-2xl border border-gray-100">
          <form className="space-y-8 p-8">
            {/* Hidden field for selected financing option */}
            <input type="hidden" name="financingType" value={selectedFinancing} />
            
            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                Company Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="registrationNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Registration Number *
                  </label>
                  <input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Company registration number"
                  />
                </div>
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Primary contact person"
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
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="company@email.com"
                  />
                </div>
              </div>
            </div>

            {/* Tender Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold">2</span>
                </div>
                Tender Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tenderReference" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tender Reference Number *
                  </label>
                  <input
                    type="text"
                    id="tenderReference"
                    name="tenderReference"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Tender reference/ID number"
                  />
                </div>
                <div>
                  <label htmlFor="tenderValue" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tender Value (USD) *
                  </label>
                  <input
                    type="number"
                    id="tenderValue"
                    name="tenderValue"
                    required
                    min="0"
                    step="0.01"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label htmlFor="tenderingAuthority" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tendering Authority *
                  </label>
                  <input
                    type="text"
                    id="tenderingAuthority"
                    name="tenderingAuthority"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Name of the tendering organization"
                  />
                </div>
                <div>
                  <label htmlFor="submissionDeadline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Submission Deadline *
                  </label>
                  <input
                    type="datetime-local"
                    id="submissionDeadline"
                    name="submissionDeadline"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="projectDescription" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    rows={4}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Describe the project and scope of work"
                  />
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold">3</span>
                </div>
                Required Documents
              </h2>
              
              <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-indigo-900 mb-2">Document Requirements</h3>
                    <p className="text-indigo-800 text-sm">
                      Please upload clear, legible copies of all required documents. 
                      Accepted formats: PDF, JPG, PNG (Max 10MB per file)
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-indigo-400 transition-colors">
                  <label htmlFor="tenderDocument" className="block text-sm font-semibold text-gray-700 mb-3">
                    Tender Document/Notice *
                  </label>
                  <input
                    type="file"
                    id="tenderDocument"
                    name="tenderDocument"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">Upload the official tender notice or invitation document</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-indigo-400 transition-colors">
                  <label htmlFor="bidBondRequirement" className="block text-sm font-semibold text-gray-700 mb-3">
                    Bid Bond Requirement Document *
                  </label>
                  <input
                    type="file"
                    id="bidBondRequirement"
                    name="bidBondRequirement"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">Upload bid bond or guarantee requirements</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-indigo-400 transition-colors">
                  <label htmlFor="companyDocs" className="block text-sm font-semibold text-gray-700 mb-3">
                    Company Registration Documents *
                  </label>
                  <input
                    type="file"
                    id="companyDocs"
                    name="companyDocs"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">Certificate of incorporation, business license, etc.</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-indigo-400 transition-colors">
                  <label htmlFor="financialStatements" className="block text-sm font-semibold text-gray-700 mb-3">
                    Financial Statements *
                  </label>
                  <input
                    type="file"
                    id="financialStatements"
                    name="financialStatements"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">Recent financial statements or audited accounts</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-indigo-400 transition-colors">
                  <label htmlFor="technicalCapability" className="block text-sm font-semibold text-gray-700 mb-3">
                    Technical Capability Documents
                  </label>
                  <input
                    type="file"
                    id="technicalCapability"
                    name="technicalCapability"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">Previous project portfolio, certifications, equipment list (optional)</p>
                </div>
              </div>
            </div>

            {/* Financing Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-bold">4</span>
                </div>
                Financing Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="financingType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Type of Financing Needed *
                  </label>
                  <select
                    id="financingType"
                    name="financingType"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
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
                  <label htmlFor="financingAmount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Financing Amount Required (USD) *
                  </label>
                  <input
                    type="number"
                    id="financingAmount"
                    name="financingAmount"
                    required
                    min="0"
                    step="0.01"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label htmlFor="projectDuration" className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Project Duration (months) *
                  </label>
                  <input
                    type="number"
                    id="projectDuration"
                    name="projectDuration"
                    required
                    min="1"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="12"
                  />
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  >
                    <option value="">Select urgency level</option>
                    <option value="standard">Standard (2-4 weeks)</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="critical">Critical (48-72 hours)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-3 block text-sm text-gray-900">
                  I certify that all information provided is accurate and complete. I understand that 
                  providing false information may result in rejection of this application. I agree to the 
                  <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium"> Terms and Conditions </a>
                  and 
                  <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium"> Privacy Policy</a>.
                </label>
              </div>
            </div>

            {/* Submit Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="flex-1 group bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center">
                  Submit Tender Financing Application
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                className="flex-1 bg-gray-100 text-gray-700 py-4 px-8 rounded-xl font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default TenderApplication
