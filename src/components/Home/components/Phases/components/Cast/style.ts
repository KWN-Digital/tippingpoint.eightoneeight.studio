'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  @media ${({ theme }) => theme.media?.lg} {
    flex-direction: row;
  }
`
