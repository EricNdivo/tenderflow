import { ArrowRight, FileText, Users, CheckCircle, Award, AccessibilityIcon } from "lucide-react";

interface HeroProps {
  onGetStartedClick?: () => void;
}

const Hero = ({ onGetStartedClick }: HeroProps) => {
  return (
    <section className="bg-gradient-hero text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-8">
            {/* Hero Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-sm font-medium">
              <FileText className="w-4 h-4 mr-2" />
              Professional Tender Documentation Services
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">TenderFlow</span>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Tender Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Expert tender document preparation and consultation services. We help businesses and individuals win tenders with professionally crafted proposals.
                <span className="text-emerald-400 font-semibold"> Specialized support for all clients, including accessibility-focused services.</span>
              </p>
            </div>

            {/* Enhanced Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-2 rounded-full bg-emerald-500/20">
                  <FileText className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">Expert Documentation</div>
                  <div className="text-sm text-white/70">Professional tender writing</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-2 rounded-full bg-emerald-500/20">
                  <AccessibilityIcon className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">Inclusive Services</div>
                  <div className="text-sm text-white/70">Accessibility-focused support</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-2 rounded-full bg-emerald-500/20">
                  <Award className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">Higher Win Rate</div>
                  <div className="text-sm text-white/70">Professional proposals</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-2 rounded-full bg-emerald-500/20">
                  <Users className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">Expert Team</div>
                  <div className="text-sm text-white/70">Experienced consultants</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStartedClick}
                className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Tender Application
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn About Our Services
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/70">Successful Tenders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-white/70">Client Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/70">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Professional Tender Documents</h3>
                  <p className="text-white/80 text-sm">We craft winning proposals that stand out from the competition</p>
                  
                  {/* Feature List */}
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      <span className="text-white/90 text-sm">Custom proposal writing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      <span className="text-white/90 text-sm">Document review & editing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      <span className="text-white/90 text-sm">Compliance verification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <AccessibilityIcon className="h-4 w-4 text-emerald-400" />
                      <span className="text-white/90 text-sm">Accessibility support services</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
