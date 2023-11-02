'use client'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Container = styled.div<{ $orientation: string }>`
  position: relative;
  ${({ $orientation }) =>
    $orientation === 'portrait' &&
    css`
      padding-top: 125%;
      width: 70vw;
      @media ${({ theme }) => theme.media?.lg} {
        width: 40vw;
      }
    `}
  ${({ $orientation }) =>
    $orientation === 'landscape' &&
    css`
      padding-top: 56.25%;
      width: 90vw;
      @media ${({ theme }) => theme.media?.lg} {
        width: 70vw;
      }
    `}
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
  }
`
export const ImageContainer = styled(motion.div)``
