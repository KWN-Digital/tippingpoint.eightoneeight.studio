'use client'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  h1 {
    margin: 0;
  }
  h4,
  h5 {
    font-size: 0.65rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 8px;
    color: ${({ theme }) => theme.palette?.textColor};
    margin-bottom: 1rem;
  }
`

export const Letter = styled(motion.span)`
  display: inline-block;
  font-family: ${({ theme }) => theme.typography?.headers};
  text-transform: uppercase;
  font-size: 6rem;
  letter-spacing: 3px;
  line-height: 1;
  @media ${({ theme }) => theme.media?.lg} {
    font-size: 8rem;
    letter-spacing: 8px;
  }
`

export const Story = styled(motion.div)`
  width: 70vw;
  font-size: 1rem;
  position: relative;
  bottom: -6rem;
  text-align: center;
  line-height: 1.7rem;
`
