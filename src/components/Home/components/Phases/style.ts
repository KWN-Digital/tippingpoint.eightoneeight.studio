'use client'
import styled from 'styled-components'
export const Phase = styled.div``
export const PhaseTitle = styled.div`
  position: sticky;
  top: 1rem;
  z-index: 1000;
  text-align: center;
  text-transform: uppercase;
  padding: 4rem;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 1;
  pointer-events: none;
  @media ${({ theme }) => theme.media?.lg} {
    padding: 1.45rem;
  }
`

export const ComingSoonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.typography?.headers.fontFamily};
  text-transform: uppercase;
  font-weight: 400 !important;
  letter-spacing: 8px;
  font-size: 1.75rem !important;

  @media ${({ theme }) => theme.media?.lg} {
    font-size: 2.5rem !important;
    flex-direction: row;
  }
`
