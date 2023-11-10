'use client'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 90vw;

  @media ${({ theme }) => theme.media?.lg} {
    width: 60vw;
  }
`

export const Video = styled.iframe`
  border: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`
