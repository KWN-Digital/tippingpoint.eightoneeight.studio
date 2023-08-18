'use client'
import Image from 'next/image'
// import { useParallax } from 'react-scroll-parallax'

export const ParallaxImage = () => {
  //   const parallax = useParallax({
  //     speed: -10,
  //     scaleY: [1.5, 1, 'ease'],
  //   })
  return (
    <div>
      <div className="container__image">
        <Image
          src="/images/writing.jpg"
          width={2400}
          height={800}
          alt="placeholder"
        />
      </div>
    </div>
  )
}
