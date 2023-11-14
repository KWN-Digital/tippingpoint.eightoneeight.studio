'use client'
import { Container } from './style'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

export const ParallaxImage = () => {
  const covers = [
    '/images/cover-1.jpg',
    '/images/cover-2.jpg',
    '/images/cover-3.jpg',
    '/images/cover-4.jpg',
  ]
  const cover = covers[Math.floor(Math.random() * covers.length)]

  return (
    <Container>
      <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
        <ParallaxBannerLayer image={cover} speed={-20} />
      </ParallaxBanner>
    </Container>
  )
}
