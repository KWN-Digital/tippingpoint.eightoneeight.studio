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

  h6 {
    /* font-family: ${({ theme }) => theme.typography?.headers.fontFamily}; */
    color: ${({ theme }) => theme.palette?.textColor};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    @media ${({ theme }) => theme.media?.lg} {
      font-size: 23px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.65;
    @media ${({ theme }) => theme.media?.lg} {
      font-size: 19px;
    }
  }

  .button {
    display: block;
    margin: 5rem auto;
    width: fit-content;
    background-color: rgba(248, 186, 20, 1);
    padding: 0.5rem 2rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.palette?.backgroundColor};
    border-radius: 5px;
    letter-spacing: 2px;
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
