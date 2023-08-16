import { styled } from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette?.backgroundColor};
  color: ${({ theme }) => theme.palette?.textColor};

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0 1rem;
      list-style: none;
    }
  }
`