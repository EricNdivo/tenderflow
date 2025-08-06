import React from 'react';
import { FileText, TrendingUp, Shield, Clock, Award, Edit, CheckCircle, Users, Package, Truck, Target } from 'lucide-react';

interface ServicesProps {
  onTenderDocumentationClick?: () => void;
  onLPOFinancingClick?: () => void;
  onSourceSupplyClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({
  onTenderDocumentationClick = () => {},
  onLPOFinancingClick = () => {},
  onSourceSupplyClick = () => {}
}) => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-6">
            <Award className="mr-2 h-4 w-4" />
            Complete Business Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to <br />
            <span className="bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Win & Scale
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From expert tender writing to financing and supply chain management - everything you need to 
            <span className="font-semibold text-emerald-700"> win tenders</span> and 
            <span className="font-semibold text-indigo-700"> scale your business</span> with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Tender Documentation */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Edit className="h-8 w-8 text-white" />
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Tender Documentation</h3>
              <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                Expert Writing
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Professional tender document preparation and writing services. We craft compelling, compliant proposals that win contracts.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                <span className="font-medium">Expert proposal writing</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="h-5 w-5 text-emerald-600 mr-3" />
                <span className="font-medium">PWD tender specialization</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Award className="h-5 w-5 text-emerald-600 mr-3" />
                <span className="font-medium">95% success rate</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Target className="h-5 w-5 text-emerald-600 mr-3" />
                <span className="font-medium">Compliance guaranteed</span>
              </div>
            </div>
            
            <button
              onClick={onTenderDocumentationClick}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Expert Writing Help
            </button>
          </div>

          {/* LPO Financing */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileText className="h-8 w-8 text-white" />
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">LPO Financing</h3>
              <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                Fast Funding
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Convert your Local Purchase Orders into immediate cash flow. Get funded within 48 hours with competitive rates.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-700">
                <TrendingUp className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="font-medium">Up to $1M financing</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="font-medium">48-hour approval</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Shield className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="font-medium">2.5% starting rate</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Award className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="font-medium">90% advance rate</span>
              </div>
            </div>
            
            <button
              onClick={onLPOFinancingClick}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply for LPO Financing
            </button>
          </div>

          {/* Source to Supply */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Package className="h-8 w-8 text-white" />
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Source to Supply</h3>
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                Full Service
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Complete procurement and supply chain management. We source, procure, and deliver goods directly to your clients.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-700">
                <Package className="h-5 w-5 text-orange-600 mr-3" />
                <span className="font-medium">Global sourcing network</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 text-orange-600 mr-3" />
                <span className="font-medium">Timely delivery guaranteed</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Shield className="h-5 w-5 text-orange-600 mr-3" />
                <span className="font-medium">Quality assurance</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Truck className="h-5 w-5 text-orange-600 mr-3" />
                <span className="font-medium">End-to-end logistics</span>
              </div>
            </div>
            
            <button
              onClick={onSourceSupplyClick}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply for Source to Supply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
