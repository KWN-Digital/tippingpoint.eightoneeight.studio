'use client'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  img {
    position: absolute;
    top: 30%;
    height: 55vh;
    left: 0%;
    width: 100vw;
    object-fit: cover;
  }
`
export const Content = styled.div`
  padding: 5rem 1rem 3rem 1rem;
  max-width: 500px;
  /* text-align: center; */
  background-color: rgba(0, 0, 0, 0.85);
  position: relative;
  z-index: 1;

  @media ${({ theme }) => theme.media?.lg} {
    padding: 3rem;
    margin-left: 4rem;
  }
`
