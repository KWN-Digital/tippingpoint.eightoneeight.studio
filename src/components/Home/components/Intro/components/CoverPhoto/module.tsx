'use client'
import { ICoverPhoto } from './types'
import { Container } from './style'
import { useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'

export const CoverPhoto = ({}: ICoverPhoto) => {
  const parallax = useRef(null!)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    window.requestAnimationFrame(() => {
      if (latest >= 500) {
        return
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      parallax.current.style.transform = `translate3d(0px, ${latest}px, 0px)`
    })
  })

  const covers = [
    '/images/cover-1.jpg',
    '/images/cover-2.jpg',
    '/images/cover-3.jpg',
    '/images/cover-4.jpg',
  ]
  const cover = covers[Math.floor(Math.random() * covers.length)]

  return (
    <Container>
      <div ref={parallax}>
        <Image src={cover} width={1920} height={1080} alt="" />
      </div>
    </Container>
  )
}
