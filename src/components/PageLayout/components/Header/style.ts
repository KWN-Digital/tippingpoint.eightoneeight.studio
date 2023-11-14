import Link from 'next/link'
import { css, styled } from 'styled-components'

export const Container = styled.header<{ $height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  ${({ $height }) => css`
    margin-bottom: ${-Math.abs($height)}px;
  `};

  .container {
    &__inner {
      display: flex;
      /* align-items: center; */
      justify-content: space-between;
      width: 100%;
    }

    &__logo {
      font-size: 0.65rem;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 8px;
      line-height: 1.3;
      [href] {
        color: ${({ theme }) => theme.palette?.textColor};
        text-decoration: none;
      }

      @media ${({ theme }) => theme.media?.lg} {
        font-size: 0.75rem;
      }
    }

    &__nav {
      display: flex;
      > div {
        padding-left: 1rem;
        a.cta {
          font-size: 0.75rem;
        }
      }
    }
  }
`

export const DonateButton = styled(Link)`
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette?.accentColor};
  color: ${({ theme }) => theme.palette?.backgroundColor} !important;
  border-radius: 0.25rem;
  padding: 0.5rem 1.5rem;
  @media ${({ theme }) => theme.media?.lg} {
    font-size: 0.75rem;
  }
`
