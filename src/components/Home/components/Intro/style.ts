'use client'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  position: relative;
  overflow: hidden;
`

export const Letter = styled(motion.span)`
  display: inline-block;
`
