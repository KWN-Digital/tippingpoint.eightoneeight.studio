'use client'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.typography?.headers?.fontFamily};
  color: ${({ theme }) => theme.palette?.accentColor};
`
