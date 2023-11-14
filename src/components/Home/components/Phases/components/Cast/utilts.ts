import { useEffect, useState } from 'react'
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    function setMobile() {
      const isMobile = window.innerWidth <= 768
      setIsMobile(isMobile)
    }
    window.addEventListener('resize', setMobile)
    setIsMobile(isMobile)
    return () => window.removeEventListener('resize', setMobile)
  }, [])
  return isMobile
}
