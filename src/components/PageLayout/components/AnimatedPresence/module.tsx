'use client'
import { IAnimatedPresence } from './types'
import { Container, Top, Bottom } from './style'
import { AnimatePresence } from 'framer-motion'
import { PropsWithChildren, useEffect, useState } from 'react'
export const AnimatedPresence = ({}: PropsWithChildren<IAnimatedPresence>) => {
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setAnimate(true)
  }, [])
  return (
    <AnimatePresence mode="wait" initial={false}>
      {animate && (
        <Container>
          <Top />
          <Bottom />
        </Container>
      )}
    </AnimatePresence>
  )
}
