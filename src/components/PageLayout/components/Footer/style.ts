import { styled } from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette?.backgroundColor};
  color: ${({ theme }) => theme.palette?.textColor};
  font-size: 0.85rem;
  margin: 6rem auto 0;
  border-top: 1px solid ${({ theme }) => theme.palette?.textColor};
  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0;
    padding: 0;
    width: 100%;
    li {
      margin: 0;
      padding: 0 1rem;
      list-style: none;
    }
  }
`
