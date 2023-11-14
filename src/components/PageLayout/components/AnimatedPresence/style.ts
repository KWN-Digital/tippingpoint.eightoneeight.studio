'use client'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-height: 1024px;
  z-index: 99999999;
  pointer-events: none;
`

export const Top = styled(motion.div).attrs({
  initial: { height: '50vh' },
  animate: { height: '0vh' },
  exit: { height: '50vh' },
  transition: { duration: 3, ease: 'easeInOut', type: 'spring' },
})`
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.palette?.backgroundColor};
  width: 100vw;
`

export const Bottom = styled(Top)`
  top: auto;
  bottom: 0;
`
