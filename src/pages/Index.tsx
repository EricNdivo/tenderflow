import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/ui/Header'
import Hero from '../components/ui/Hero'
import Features from '../components/ui/Features'
import Services from '../components/ui/Services'
import Footer from '../components/ui/Footer'
import AuthModal from '../components/ui/AuthModal'

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup')
  const navigate = useNavigate()

  const openSignupModal = () => {
    setAuthMode('signup')
    setIsAuthModalOpen(true)
  }

  // Service handlers - go directly to pages without authentication
  const handleTenderDocumentation = () => {
    navigate('/tender-application')
  }

  const handleLPOFinancing = () => {
    navigate('/po-application')
  }

  const handleSourceSupply = () => {
    navigate('/source-supply')
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onGetStartedClick={openSignupModal} />
      <div id="services">
        <Services 
          onTenderDocumentationClick={handleTenderDocumentation}
          onLPOFinancingClick={handleLPOFinancing}
          onSourceSupplyClick={handleSourceSupply}
        />
      </div>
      <Features />
      <Footer />
      
      {/* Auth Modal - only for header buttons */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  )
}

export default Index
