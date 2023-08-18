'use client'

import Link from 'next/link'
import { Container } from './style'
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
            <Link className="cta" target="_blank" href="https://indiegogo.com">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
