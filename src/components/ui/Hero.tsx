import { ArrowRight, FileText, Clock, Award, TrendingUp, AccessibilityIcon } from "lucide-react";

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
              Professional Tender Writing • LPO Financing • Source to Supply
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">TenderFlow</span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Complete Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                We help you win tenders with expert writing services, convert your LPOs into immediate working capital, and manage your complete supply chain. 
                <span className="text-emerald-400 font-semibold"> End-to-end business solutions with accessibility-focused services.</span>
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
                <div className="p-2 rounded-full bg-indigo-500/20">
                  <Clock className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">Fast Funding</div>
                  <div className="text-sm text-white/70">24-48 hour approval</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-2 rounded-full bg-emerald-500/20">
                  <AccessibilityIcon className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">PWD Support</div>
                  <div className="text-sm text-white/70">Specialized accessibility services</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-2 rounded-full bg-green-500/20">
                  <TrendingUp className="h-5 w-5 text-green-400 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">Complete Solutions</div>
                  <div className="text-sm text-white/70">Writing + Financing + Supply Chain</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Primary CTA - Completely New Design */}
                <button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-2xl text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  onClick={onGetStartedClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <span className="mr-3">Get Started Now</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                </button>
                
                {/* Secondary CTA - Modern Glass Effect */}
                <button 
                  className="group px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl text-white font-semibold text-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="flex items-center justify-center">
                    <Award className="mr-3 h-5 w-5 text-emerald-400" />
                    <span>Our Services</span>
                  </div>
                </button>
              </div>
              
              {/* Trust Badge */}
              <div className="flex items-center justify-center sm:justify-start space-x-4 text-white/70 text-sm">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  <span>Professional Documentation</span>
                </div>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-indigo-400" />
                  <span>Fast Funding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Stats Dashboard */}
          <div className="space-y-6">
            {/* Main Stats Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Our Impact</h3>
                <div className="flex items-center space-x-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Proven Results</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-1">500+</div>
                  <div className="text-sm text-white/80 font-medium">Tenders Won</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-1">$2.5M+</div>
                  <div className="text-sm text-white/80 font-medium">Funded</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-1">95%</div>
                  <div className="text-sm text-white/80 font-medium">Win Rate</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-1">48hrs</div>
                  <div className="text-sm text-white/80 font-medium">Avg Approval</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-center">Why Choose TenderFlow?</h4>
              <div className="flex items-center justify-center space-x-6 text-white/60">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">A+</div>
                  <div className="text-xs">Documentation Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">PWD</div>
                  <div className="text-xs">Specialized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;