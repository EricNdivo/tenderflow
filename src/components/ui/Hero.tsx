import { ArrowRight, TrendingUp, Shield, Clock, Award } from "lucide-react";

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
              <TrendingUp className="w-4 h-4 mr-2" />
              #1 Financing Platform for SMEs
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">TenderFlow</span>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Financing Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Revolutionary financing platform designed specifically for tender winners and purchase order holders. 
                <span className="text-emerald-400 font-semibold"> Transform your business opportunities into immediate capital.</span>
              </p>
            </div>

            {/* Enhanced Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-2 rounded-full bg-emerald-500/20">
                  <Clock className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">48-Hour Approval</div>
                  <div className="text-sm text-white/70">Lightning-fast processing</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-2 rounded-full bg-emerald-500/20">
                  <Shield className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">Secure & Trusted</div>
                  <div className="text-sm text-white/70">Bank-grade security</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Primary CTA - Completely New Design */}
                <button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  onClick={onGetStartedClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <span className="mr-3">Start Your Journey</span>
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
                    <span>Explore Features</span>
                  </div>
                </button>
              </div>
              
              {/* Trust Badge */}
              <div className="flex items-center justify-center sm:justify-start space-x-4 text-white/70 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span>Bank-level Security</span>
                </div>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>48hr Processing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Stats Dashboard */}
          <div className="space-y-6">
            {/* Main Stats Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Live Platform Stats</h3>
                <div className="flex items-center space-x-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Real-time</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-1">$50M+</div>
                  <div className="text-sm text-white/80 font-medium">Funding Facilitated</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-1">500+</div>
                  <div className="text-sm text-white/80 font-medium">SMEs Empowered</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-1">48hrs</div>
                  <div className="text-sm text-white/80 font-medium">Avg. Approval Time</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-1">95%</div>
                  <div className="text-sm text-white/80 font-medium">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-center">Trusted By Leading Businesses</h4>
              <div className="flex items-center justify-center space-x-6 text-white/60">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">A+</div>
                  <div className="text-xs">Credit Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">ISO</div>
                  <div className="text-xs">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">24/7</div>
                  <div className="text-xs">Support</div>
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