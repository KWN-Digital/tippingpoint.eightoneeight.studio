'use client'
import Image from 'next/image'
// import { useParallax } from 'react-scroll-parallax'

export const ParallaxImage = () => {
  //   const parallax = useParallax({
  //     speed: -10,
  //     scaleY: [1.5, 1, 'ease'],
  //   })

  const covers = [
    '/images/cover-1.jpg',
    '/images/cover-2.jpg',
    '/images/cover-3.jpg',
    '/images/cover-4.jpg',
  ]
  const cover = covers[Math.floor(Math.random() * covers.length)]

  return (
    <div>
      <div className="container__image">
        <Image
          src={cover}
          fill={true}
          sizes="
            (max-width: 600px) 600px,
            (max-width: 960px) 960px,
            (max-width: 1280px) 1280px,
            (max-width: 1920px) 1920px,
            2560px
        "
          alt="placeholder"
        />
      </div>
    </div>
  )
}
