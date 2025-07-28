import { useState, useEffect } from 'react'

/**
 * Hook to detect if the device is mobile
 * @param breakpoint - The breakpoint in pixels (default: 768)
 * @returns boolean - true if device is mobile
 */
export const useMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Check on mount
    checkIsMobile()

    // Add event listener
    window.addEventListener('resize', checkIsMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [breakpoint])

  return isMobile
}
