import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'

const POApplication = () => {
  const [selectedFinancing, setSelectedFinancing] = useState('')

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm breadcrumbs mb-4">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-500">
              Dashboard
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">PO Financing Application</span>
          </nav>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">PO Financing Application</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Apply for financing based on your confirmed Purchase Order. 
                Upload your PO documents to get started with our flexible financing options.
              </p>
            </div>

            {/* Financing Options Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Your Financing Option *</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div 
                  onClick={() => setSelectedFinancing('partial')}
                  className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
                    selectedFinancing === 'partial' 
                      ? 'border-purple-500 bg-purple-50 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      selectedFinancing === 'partial' 
                        ? 'border-purple-500 bg-purple-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedFinancing === 'partial' && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Partial Funding</h4>
                  <p className="text-sm text-gray-600">Get partial advance funding based on your PO value</p>
                </div>
                
                <div 
                  onClick={() => setSelectedFinancing('debt')}
                  className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
                    selectedFinancing === 'debt' 
                      ? 'border-blue-500 bg-blue-50 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      selectedFinancing === 'debt' 
                        ? 'border-blue-500 bg-blue-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedFinancing === 'debt' && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Debt Financing</h4>
                  <p className="text-sm text-gray-600">Traditional debt financing with competitive rates</p>
                </div>
                
                <div 
                  onClick={() => setSelectedFinancing('equity')}
                  className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 ${
                    selectedFinancing === 'equity' 
                      ? 'border-green-500 bg-green-50 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      selectedFinancing === 'equity' 
                        ? 'border-green-500 bg-green-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedFinancing === 'equity' && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Equity Financing</h4>
                  <p className="text-sm text-gray-600">Equity-based funding for larger projects</p>
                </div>
              </div>
              {!selectedFinancing && (
                <p className="text-sm text-red-600 mt-2">
                  Please select a financing option to continue
                </p>
              )}
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
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">1</span>
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
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="company@email.com"
                  />
                </div>
              </div>
            </div>

            {/* PO Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                Purchase Order Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="poNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    PO Number *
                  </label>
                  <input
                    type="text"
                    id="poNumber"
                    name="poNumber"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Purchase Order number"
                  />
                </div>
                <div>
                  <label htmlFor="poValue" className="block text-sm font-semibold text-gray-700 mb-2">
                    PO Value (USD) *
                  </label>
                  <input
                    type="number"
                    id="poValue"
                    name="poValue"
                    required
                    min="0"
                    step="0.01"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label htmlFor="clientName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Client/Buyer Name *
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    name="clientName"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Name of the organization that issued the PO"
                  />
                </div>
                <div>
                  <label htmlFor="deliveryDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Delivery Date *
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                Required Documents
              </h2>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Document Requirements</h3>
                    <p className="text-blue-800 text-sm">
                      Please upload clear, legible copies of all required documents. 
                      Accepted formats: PDF, JPG, PNG (Max 10MB per file)
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-400 transition-colors">
                  <label htmlFor="purchaseOrder" className="block text-sm font-semibold text-gray-700 mb-3">
                    Purchase Order Document *
                  </label>
                  <input
                    type="file"
                    id="purchaseOrder"
                    name="purchaseOrder"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">Upload the official Purchase Order document</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-400 transition-colors">
                  <label htmlFor="signedAgreement" className="block text-sm font-semibold text-gray-700 mb-3">
                    Signed Agreement/Contract *
                  </label>
                  <input
                    type="file"
                    id="signedAgreement"
                    name="signedAgreement"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">Upload the signed contract or agreement</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-400 transition-colors">
                  <label htmlFor="companyDocs" className="block text-sm font-semibold text-gray-700 mb-3">
                    Company Registration Documents *
                  </label>
                  <input
                    type="file"
                    id="companyDocs"
                    name="companyDocs"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">Certificate of incorporation, business license, etc.</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-400 transition-colors">
                  <label htmlFor="financialStatements" className="block text-sm font-semibold text-gray-700 mb-3">
                    Financial Statements *
                  </label>
                  <input
                    type="file"
                    id="financialStatements"
                    name="financialStatements"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors"
                  />
                  <p className="text-xs text-gray-500 mt-2">Recent financial statements or bank statements</p>
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
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-3 block text-sm text-gray-900">
                  I certify that all information provided is accurate and complete. I understand that 
                  providing false information may result in rejection of this application. I agree to the 
                  <a href="#" className="text-blue-600 hover:text-blue-500 font-medium"> Terms and Conditions </a>
                  and 
                  <a href="#" className="text-blue-600 hover:text-blue-500 font-medium"> Privacy Policy</a>.
                </label>
              </div>
            </div>

            {/* Submit Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={!selectedFinancing}
                className={`flex-1 group py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                  selectedFinancing 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span className="flex items-center justify-center">
                  Submit PO Financing Application
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
    <Footer />
    </>
  )
}

export default POApplication
