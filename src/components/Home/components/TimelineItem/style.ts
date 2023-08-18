'use client'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`

export const Feature = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    &__inner {
      padding: 1rem;
      img {
        object-fit: cover;
        opacity: 0.5;
      }
    }
  }
`

export const Modal = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 1000; */
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: #fff;
    font-family: ${({ theme }) => theme.typography?.headers.fontFamily};
    text-transform: uppercase;
    font-size: 140px;
    letter-spacing: 14px;
    font-weight: 400;
  }
`
