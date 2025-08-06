import React, { useState } from 'react';
import { 
  Package, 
  Globe, 
  Truck, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  FileText, 
  Users, 
  Award,
  MapPin,
  Calendar,
  DollarSign,
  Phone,
  Mail,
  Building,
  Factory,
  Target,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

interface FormData {
  // Company Information
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  businessType: string;
  
  // Sourcing Requirements
  productCategory: string;
  productDescription: string;
  specifications: string;
  quantity: string;
  budget: string;
  qualityStandards: string;
  certifications: string;
  
  // Delivery Requirements
  deliveryLocation: string;
  deliveryDate: string;
  urgency: string;
  paymentTerms: string;
  
  // Additional Information
  additionalRequirements: string;
  previousExperience: string;
}

const SourceSupplyApplication: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    businessType: '',
    productCategory: '',
    productDescription: '',
    specifications: '',
    quantity: '',
    budget: '',
    qualityStandards: '',
    certifications: '',
    deliveryLocation: '',
    deliveryDate: '',
    urgency: 'standard',
    paymentTerms: '',
    additionalRequirements: '',
    previousExperience: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4 pt-20">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 shadow-2xl border border-orange-100">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Application Submitted Successfully!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Thank you for choosing Tender Plus for your sourcing and supply needs. Our procurement specialists will review your requirements and contact you within 24 hours.
            </p>
            <div className="bg-orange-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</div>
                  <span className="text-gray-700">Requirements analysis within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                  <span className="text-gray-700">Sourcing proposal and quotation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</div>
                  <span className="text-gray-700">Contract agreement and procurement start</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg"
            >
              Return to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const steps = [
    { number: 1, title: 'Business Profile', icon: Building },
    { number: 2, title: 'Sourcing Needs', icon: Package },
    { number: 3, title: 'Logistics & Timeline', icon: Truck },
    { number: 4, title: 'Finalize Application', icon: CheckCircle }
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 pt-16">
        {/* Modern Linear Progress Steps */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-2xl sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;
                
                return (
                  <div key={step.number} className="flex items-center">
                    {/* Step Circle and Content */}
                    <div className="flex flex-col items-center">
                      {/* Icon Circle */}
                      <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                        isCompleted 
                          ? 'bg-white text-green-600 shadow-lg scale-110' 
                          : isActive 
                            ? 'bg-white text-orange-600 shadow-xl scale-125 ring-4 ring-white/30' 
                            : 'bg-white/20 text-white/60 shadow-md'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="h-8 w-8" />
                        ) : (
                          <Icon className="h-8 w-8" />
                        )}
                        
                        {/* Step Number Badge */}
                        <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isCompleted 
                            ? 'bg-green-500 text-white' 
                            : isActive 
                              ? 'bg-orange-600 text-white' 
                              : 'bg-white/30 text-white/80'
                        }`}>
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Step Info */}
                      <div className="mt-4 text-center">
                        <p className={`text-sm font-bold transition-all duration-300 ${
                          isActive ? 'text-white' : 'text-white/80'
                        }`}>
                          {step.title}
                        </p>
                        <p className={`text-xs mt-1 transition-all duration-300 ${
                          isActive ? 'text-white/90' : 'text-white/60'
                        }`}>
                          Step {step.number} of 4
                        </p>
                      </div>
                    </div>
                    
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="flex items-center mx-6 mb-12">
                        <div className={`h-1 w-16 rounded-full transition-all duration-500 ${
                          isCompleted ? 'bg-white shadow-lg' : 'bg-white/30'
                        }`}>
                          {/* Animated progress line */}
                          <div className={`h-full rounded-full transition-all duration-1000 ${
                            isCompleted ? 'bg-green-400 w-full' : isActive ? 'bg-white w-1/2' : 'bg-transparent w-0'
                          }`}></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Progress Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-white/20 rounded-full h-2 shadow-inner">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-1000 ease-out shadow-lg"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                >
                  <div className="h-full bg-gradient-to-r from-yellow-300 to-white rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-white/80 text-xs">
                <span>Start</span>
                <span className={`font-semibold ${currentStep >= 2 ? 'text-white' : ''}`}>25%</span>
                <span className={`font-semibold ${currentStep >= 3 ? 'text-white' : ''}`}>50%</span>
                <span className={`font-semibold ${currentStep >= 4 ? 'text-white' : ''}`}>75%</span>
                <span className={`font-semibold ${currentStep === 4 ? 'text-white' : ''}`}>Complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
              
              {/* Step 1: Company Information */}
              {currentStep === 1 && (
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-6">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Company Information</h2>
                      <p className="text-gray-600 mt-2">Tell us about your business to get started</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Building className="inline h-4 w-4 mr-2" />
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => updateFormData('companyName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Users className="inline h-4 w-4 mr-2" />
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => updateFormData('contactPerson', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="Full name of contact person"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Mail className="inline h-4 w-4 mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="your@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Phone className="inline h-4 w-4 mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <MapPin className="inline h-4 w-4 mr-2" />
                        Business Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => updateFormData('address', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="Complete business address"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Factory className="inline h-4 w-4 mr-2" />
                        Business Type *
                      </label>
                      <select
                        required
                        value={formData.businessType}
                        onChange={(e) => updateFormData('businessType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      >
                        <option value="">Select business type</option>
                        <option value="manufacturer">Manufacturer</option>
                        <option value="retailer">Retailer/Distributor</option>
                        <option value="wholesaler">Wholesaler</option>
                        <option value="contractor">Contractor</option>
                        <option value="government">Government Agency</option>
                        <option value="ngo">NGO/Non-Profit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Product Requirements */}
              {currentStep === 2 && (
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-6">
                      <Package className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Product Requirements</h2>
                      <p className="text-gray-600 mt-2">Specify what you need us to source</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Target className="inline h-4 w-4 mr-2" />
                        Product Category *
                      </label>
                      <select
                        required
                        value={formData.productCategory}
                        onChange={(e) => updateFormData('productCategory', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      >
                        <option value="">Select category</option>
                        <option value="electronics">Electronics & Technology</option>
                        <option value="machinery">Machinery & Equipment</option>
                        <option value="textiles">Textiles & Clothing</option>
                        <option value="automotive">Automotive Parts</option>
                        <option value="medical">Medical Equipment</option>
                        <option value="construction">Construction Materials</option>
                        <option value="food">Food & Beverages</option>
                        <option value="chemicals">Chemicals & Raw Materials</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Package className="inline h-4 w-4 mr-2" />
                        Quantity Required *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.quantity}
                        onChange={(e) => updateFormData('quantity', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="e.g., 1000 units, 500 kg"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <FileText className="inline h-4 w-4 mr-2" />
                        Product Description *
                      </label>
                      <textarea
                        required
                        value={formData.productDescription}
                        onChange={(e) => updateFormData('productDescription', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="Detailed description of the products you need"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Award className="inline h-4 w-4 mr-2" />
                        Technical Specifications
                      </label>
                      <textarea
                        value={formData.specifications}
                        onChange={(e) => updateFormData('specifications', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="Technical specs, dimensions, materials, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <DollarSign className="inline h-4 w-4 mr-2" />
                        Budget Range *
                      </label>
                      <select
                        required
                        value={formData.budget}
                        onChange={(e) => updateFormData('budget', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1.3m">Under KSh 1,300,000</option>
                        <option value="1.3m-6.5m">KSh 1,300,000 - KSh 6,500,000</option>
                        <option value="6.5m-13m">KSh 6,500,000 - KSh 13,000,000</option>
                        <option value="13m-65m">KSh 13,000,000 - KSh 65,000,000</option>
                        <option value="65m-130m">KSh 65,000,000 - KSh 130,000,000</option>
                        <option value="over-130m">Over KSh 130,000,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Shield className="inline h-4 w-4 mr-2" />
                        Quality Standards
                      </label>
                      <input
                        type="text"
                        value={formData.qualityStandards}
                        onChange={(e) => updateFormData('qualityStandards', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="ISO, CE, FDA, etc."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Award className="inline h-4 w-4 mr-2" />
                        Required Certifications
                      </label>
                      <input
                        type="text"
                        value={formData.certifications}
                        onChange={(e) => updateFormData('certifications', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="List any required certifications"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Delivery Details */}
              {currentStep === 3 && (
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-6">
                      <Truck className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Delivery Details</h2>
                      <p className="text-gray-600 mt-2">Where and when do you need delivery?</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <MapPin className="inline h-4 w-4 mr-2" />
                        Delivery Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.deliveryLocation}
                        onChange={(e) => updateFormData('deliveryLocation', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="Complete delivery address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Required Delivery Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.deliveryDate}
                        onChange={(e) => updateFormData('deliveryDate', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Clock className="inline h-4 w-4 mr-2" />
                        Urgency Level *
                      </label>
                      <select
                        required
                        value={formData.urgency}
                        onChange={(e) => updateFormData('urgency', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      >
                        <option value="standard">Standard (4-6 weeks)</option>
                        <option value="expedited">Expedited (2-3 weeks)</option>
                        <option value="urgent">Urgent (1-2 weeks)</option>
                        <option value="emergency">Emergency (Less than 1 week)</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <DollarSign className="inline h-4 w-4 mr-2" />
                        Payment Terms *
                      </label>
                      <select
                        required
                        value={formData.paymentTerms}
                        onChange={(e) => updateFormData('paymentTerms', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      >
                        <option value="">Select payment terms</option>
                        <option value="net-30">Net 30 days</option>
                        <option value="net-60">Net 60 days</option>
                        <option value="50-50">50% advance, 50% on delivery</option>
                        <option value="30-70">30% advance, 70% on delivery</option>
                        <option value="letter-of-credit">Letter of Credit</option>
                        <option value="cash-on-delivery">Cash on Delivery</option>
                        <option value="other">Other (specify in additional requirements)</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <FileText className="inline h-4 w-4 mr-2" />
                        Additional Requirements
                      </label>
                      <textarea
                        value={formData.additionalRequirements}
                        onChange={(e) => updateFormData('additionalRequirements', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="Any special requirements, custom packaging, insurance needs, etc."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <Users className="inline h-4 w-4 mr-2" />
                        Previous Sourcing Experience
                      </label>
                      <textarea
                        value={formData.previousExperience}
                        onChange={(e) => updateFormData('previousExperience', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                        placeholder="Tell us about your previous experience with international sourcing"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-6">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Review & Submit</h2>
                      <p className="text-gray-600 mt-2">Please review your information before submitting</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Company Information Review */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Building className="h-5 w-5 mr-2 text-orange-600" />
                        Company Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div><strong>Company:</strong> {formData.companyName}</div>
                        <div><strong>Contact:</strong> {formData.contactPerson}</div>
                        <div><strong>Email:</strong> {formData.email}</div>
                        <div><strong>Phone:</strong> {formData.phone}</div>
                        <div className="md:col-span-2"><strong>Address:</strong> {formData.address}</div>
                        <div><strong>Business Type:</strong> {formData.businessType}</div>
                      </div>
                    </div>

                    {/* Product Requirements Review */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Package className="h-5 w-5 mr-2 text-orange-600" />
                        Product Requirements
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div><strong>Category:</strong> {formData.productCategory}</div>
                        <div><strong>Quantity:</strong> {formData.quantity}</div>
                        <div className="md:col-span-2"><strong>Description:</strong> {formData.productDescription}</div>
                        <div><strong>Budget:</strong> {formData.budget}</div>
                        <div><strong>Quality Standards:</strong> {formData.qualityStandards}</div>
                        {formData.specifications && <div className="md:col-span-2"><strong>Specifications:</strong> {formData.specifications}</div>}
                      </div>
                    </div>

                    {/* Delivery Details Review */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Truck className="h-5 w-5 mr-2 text-orange-600" />
                        Delivery Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="md:col-span-2"><strong>Delivery Location:</strong> {formData.deliveryLocation}</div>
                        <div><strong>Required Date:</strong> {formData.deliveryDate}</div>
                        <div><strong>Urgency:</strong> {formData.urgency}</div>
                        <div className="md:col-span-2"><strong>Payment Terms:</strong> {formData.paymentTerms}</div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                      <h3 className="text-lg font-bold text-orange-800 mb-4">Terms & Conditions</h3>
                      <div className="space-y-3 text-sm text-orange-700">
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-orange-600" />
                          <span>I understand that this is a preliminary inquiry and not a binding contract</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-orange-600" />
                          <span>I agree to provide additional documentation as required for sourcing</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-1 text-orange-600" />
                          <span>I consent to being contacted by Tender Plus representatives regarding this inquiry</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="bg-gray-50 px-8 lg:px-12 py-6 flex justify-between items-center">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                  >
                    Continue
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                  >
                    Submit Application
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Enhanced Trust Section with Visual Elements */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Source to Supply Service?</h2>
              <p className="text-lg text-gray-600">Trusted by businesses worldwide for reliable sourcing solutions</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200">
                  <Globe className="h-10 w-10 text-orange-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Network</h3>
                <p className="text-gray-600 mb-4">Access to over 10,000 verified suppliers across 50+ countries</p>
                <div className="text-orange-600 font-semibold">🌍 Worldwide Coverage</div>
              </div>
              
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200">
                  <Shield className="h-10 w-10 text-orange-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">Rigorous quality control and inspection processes for all products</p>
                <div className="text-orange-600 font-semibold">🛡️ ISO Certified</div>
              </div>
              
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200">
                  <Clock className="h-10 w-10 text-orange-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Truck className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
                <p className="text-gray-600 mb-4">Optimized logistics for timely delivery to your specified location</p>
                <div className="text-orange-600 font-semibold">⚡ Express Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SourceSupplyApplication;
