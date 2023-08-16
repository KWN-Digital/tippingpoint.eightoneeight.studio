import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem ${({ theme }) => theme.gutters.sm};
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
