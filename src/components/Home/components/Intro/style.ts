'use client'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media ${({ theme }) => theme.media?.lg} {
    height: 100vh;
  }

  h1 {
    font-family: ${({ theme }) => theme.typography?.headers.fontFamily};
    color: ${({ theme }) => theme.palette?.textColor};
    font-weight: 400;
    text-align: center;
    font-size: 50px;
    text-transform: uppercase;
    white-space: nowrap;
    margin: 0;
    @media ${({ theme }) => theme.media?.lg} {
      font-size: 120px;
    }

    span {
      display: inline-block;
      padding: 0 0.5rem;
      @media ${({ theme }) => theme.media?.lg} {
        padding: 0 1rem;
      }
    }
  }

  h4,
  h5 {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 8px;
  }

  h4 {
    font-size: 16px;
  }

  .container {
    &__inner {
      width: 100%;
      height: 100%;
    }
    &__image {
      width: 100%;
      height: 50vh;
      background-color: ${({ theme }) => theme.palette?.backgroundColor};
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
      }

      @media ${({ theme }) => theme.media?.lg} {
        height: 100vh;
      }
    }

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background-color: rgba(0, 0, 0, 0.5); */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 1rem;
      z-index: 1;
    }
  }
`

export const Letter = styled(motion.span)`
  display: inline-block;
`
