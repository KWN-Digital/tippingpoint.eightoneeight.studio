'use client'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 100dvh;
  width: 100vw;
  padding: 5rem 1rem 3rem 1rem;
  overflow: scroll;
  @media ${({ theme }) => theme.media?.lg} {
    padding: 5rem;
  }
  img {
    width: 100%;
    height: auto;
    @media ${({ theme }) => theme.media?.lg} {
      position: absolute;
      bottom: 0;
      right: 5rem;
      width: 70%;
    }
  }
`

export const Content = styled.div`
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
  padding: 0rem;
  @media ${({ theme }) => theme.media?.lg} {
    padding: 2rem;
  }
`
