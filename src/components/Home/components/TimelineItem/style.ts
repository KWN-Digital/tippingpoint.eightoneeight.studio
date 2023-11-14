'use client'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`

export const Feature = styled(motion.div)`
  height: 100vh;
  max-height: 1024px;
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
  max-height: 1024px;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: #fff;
    font-family: ${({ theme }) => theme.typography?.headers.fontFamily};
    text-transform: uppercase;
    font-size: 60px;
    letter-spacing: 8px;
    line-height: 1;
    font-weight: 400;
    text-align: center;
    margin: 3rem;
    @media ${({ theme }) => theme.media?.lg} {
      font-size: 140px;
      letter-spacing: 14px;
    }
  }
  button {
    margin: 0 auto;
    display: block;
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.palette?.backgroundColor};
      color: ${({ theme }) => theme.palette?.accentColor};
    }
  }
`

export const Frame = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.palette?.backgroundColor};
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const PageContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.palette?.backgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100vw;
  height: 100dvh;
  /* max-height: 1024px; */
`
export const AnimateLayer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 100vw;
  height: 100dvh;
  /* max-height: 1024px; */
  overflow: hidden;
  pointer-events: none;
`

export const Page = styled(motion.div)`
  overflow: scroll;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export const Top = styled(motion.div).attrs(() => ({
  initial: { height: '50vh' },
  animate: { height: '0vh' },
  exit: { height: '50vh' },
  transition: { duration: 2, ease: 'easeInOut', type: 'spring' },
}))`
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

export const Close = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  button {
    background-color: transparent;
    color: ${({ theme }) => theme.palette?.textColor};
    padding: 1.35rem;
    cursor: pointer;
    display: block;
    font-size: 0.75rem;
  }
`
