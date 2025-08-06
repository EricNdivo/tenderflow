import React from 'react';
import { FileText, DollarSign, TrendingUp, Shield, Clock, Award, Edit, CheckCircle, Users } from 'lucide-react';

interface ServicesProps {
  onTenderDocumentationClick?: () => void;
  onTenderFinancingClick?: () => void;
  onPOFinancingClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({
  onTenderDocumentationClick = () => {},
  onTenderFinancingClick = () => {},
  onPOFinancingClick = () => {}
}) => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Tender Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From professional tender documentation to fast financing - everything you need to win tenders and grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Tender Documentation */}
          <div className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
            <div className="absolute -top-6 left-8">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-2xl shadow-lg">
                <Edit className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Tender Documentation</h3>
                <div className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Professional
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert preparation of winning tender documents with proven track record of success.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>95% success rate</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>PWD specialization</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>500+ tenders won</span>
                </div>
              </div>
              
              <button
                onClick={onTenderDocumentationClick}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Documentation Help
              </button>
            </div>
          </div>

          {/* Tender Financing */}
          <div className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
            <div className="absolute -top-6 left-8">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-2xl shadow-lg">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Tender Financing</h3>
                <div className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get the capital you need to secure government and private sector tenders. Fast approval, competitive rates.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <TrendingUp className="h-5 w-5 text-indigo-500 mr-3" />
                  <span>Up to $500K funding</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 text-indigo-500 mr-3" />
                  <span>48-hour approval</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Shield className="h-5 w-5 text-indigo-500 mr-3" />
                  <span>2.5% starting rate</span>
                </div>
              </div>
              
              <button
                onClick={onTenderFinancingClick}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Apply for Tender Financing
              </button>
            </div>
          </div>

          {/* PO Financing */}
          <div className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
            <div className="absolute -top-6 left-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl shadow-lg">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">PO Financing</h3>
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Instant
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Convert your purchase orders into immediate cash flow. Perfect for fulfilling large orders without delays.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <TrendingUp className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Up to $1M financing</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Same-day funding</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-orange-500 mr-3" />
                  <span>85% advance rate</span>
                </div>
              </div>
              
              <button
                onClick={onPOFinancingClick}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Apply for PO Financing
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Win More Tenders?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that trust TenderFlow for complete tender solutions - from documentation to financing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors">
                Get Started Now
              </button>
              <button className="border border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
