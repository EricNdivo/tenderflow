import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (location !== displayLocation) {
      // Fade out
      setIsVisible(false)
      
      const timer = setTimeout(() => {
        // Update location and fade in
        setDisplayLocation(location)
        setIsVisible(true)
      }, 150) // Quick fade out

      return () => clearTimeout(timer)
    }
  }, [location, displayLocation])

  return (
    <div 
      className={`w-full min-h-screen transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      key={displayLocation.pathname}
    >
      {children}
    </div>
  )
}

export default PageTransition
