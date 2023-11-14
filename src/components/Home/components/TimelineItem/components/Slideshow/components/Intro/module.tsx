'use client'
import { IIntro } from './types'
import { Container, ImageContainer } from './style'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

export const Intro = ({ slides, orientation = 'landscape' }: IIntro) => {
  const images = slides
    .filter((slide) => slide.image)
    .map((slide) => slide.image)

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (counter === images.length - 1) {
        setCounter(0)
        return
      }
      setCounter(counter + 1)
    }, 3000)
  }, [counter, images.length])

  return (
    <Container $orientation={orientation}>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        images.map((image: any, index: number) => (
          <AnimatePresence key={index}>
            {index === counter && (
              <ImageContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <Image
                  src={image.src}
                  alt="image"
                  width={image.width}
                  height={image.height}
                />
              </ImageContainer>
            )}
          </AnimatePresence>
        ))
      }
    </Container>
  )
}
