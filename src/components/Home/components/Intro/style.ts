'use client'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  max-height: 1024px;
  position: relative;
  overflow: hidden;
`

export const Letter = styled(motion.span)`
  display: inline-block;
`
