import { Button } from "@/components/ui/button";
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
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              #1 Financing Platform for SMEs
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">TenderFlow</span>
                <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
                  Financing Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Revolutionary financing platform designed specifically for tender winners and purchase order holders. 
                <span className="text-accent font-semibold"> Transform your business opportunities into immediate capital.</span>
              </p>
            </div>

            {/* Enhanced Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-2 rounded-full bg-accent/20">
                  <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">48-Hour Approval</div>
                  <div className="text-sm text-white/70">Lightning-fast processing</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-2 rounded-full bg-accent/20">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0" />
                </div>
                <div>
                  <div className="font-semibold">Secure & Trusted</div>
                  <div className="text-sm text-white/70">Bank-grade security</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-white font-semibold shadow-lg shadow-accent/25 transform hover:scale-105 transition-all duration-200 group" 
                  onClick={onGetStartedClick}
                >
                  <span className="mr-2">Get Started Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm font-semibold" 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Award className="mr-2 h-5 w-5" />
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Stats Dashboard */}
          <div className="space-y-6">
            {/* Main Stats Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Live Platform Stats</h3>
                <div className="flex items-center space-x-2 text-accent">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Real-time</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/20 to-success/20 border border-accent/30">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">$50M+</div>
                  <div className="text-sm text-white/80 font-medium">Funding Facilitated</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/20 to-success/20 border border-accent/30">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">500+</div>
                  <div className="text-sm text-white/80 font-medium">SMEs Empowered</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/20 to-success/20 border border-accent/30">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">48hrs</div>
                  <div className="text-sm text-white/80 font-medium">Avg. Approval Time</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/20 to-success/20 border border-accent/30">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">95%</div>
                  <div className="text-sm text-white/80 font-medium">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-center">Trusted By Leading Businesses</h4>
              <div className="flex items-center justify-center space-x-6 text-white/60">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">A+</div>
                  <div className="text-xs">Credit Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">ISO</div>
                  <div className="text-xs">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24/7</div>
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