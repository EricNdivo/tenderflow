import { useState } from 'react'
import Header from '../components/ui/Header'
import Hero from '../components/ui/Hero'
import Features from '../components/ui/Features'
import Services from '../components/ui/Services'
import Footer from '../components/ui/Footer'
import AuthModal from '../components/ui/AuthModal'

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup')

  const openSignupModal = () => {
    setAuthMode('signup')
    setIsAuthModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onGetStartedClick={openSignupModal} />
      <div id="services">
        <Services />
      </div>
      <Features />
      <Footer />
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  )
}

export default Index
