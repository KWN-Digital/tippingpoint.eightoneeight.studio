'use client'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.gutters.sm};
  max-width: 840px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h2 {
    font-family: ${({ theme }) => theme.typography?.headers.fontFamily};
    color: ${({ theme }) => theme.palette?.textColor};
    text-transform: uppercase;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 5px;

    @media ${({ theme }) => theme.media?.lg} {
      font-size: 100px;
      letter-spacing: 14px;
      white-space: nowrap;
    }
  }
`

export const Video = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
  margin-bottom: 1rem;
  max-width: 1440px;
  width: 100%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
