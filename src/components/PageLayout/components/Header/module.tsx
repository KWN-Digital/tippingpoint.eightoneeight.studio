'use client'

import Link from 'next/link'
import { Container, DonateButton } from './style'
import { useEffect, useRef, useState } from 'react'

export const Header = () => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const [height, setHeight] = useState<number>(ref.current?.offsetHeight)
  useEffect(
    () => setHeight(ref.current?.offsetHeight),
    [ref.current?.offsetHeight]
  )
  useEffect(() => {
    const handleResize = () => setHeight(ref.current?.offsetHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <Container $height={height} ref={ref}>
      <div className="container__inner">
        <div className="container__logo">
          <Link href="/" aria-label="logo">
            Tipping
            <br />
            Point
          </Link>
        </div>
        <div className="container__nav">
          <div>
            <DonateButton
              className="cta"
              target="_blank"
              href="https://donate.stripe.com/00g9Ci9Rtgfs0i46oo"
            >
              Donate
            </DonateButton>
          </div>
        </div>
      </div>
    </Container>
  )
}
