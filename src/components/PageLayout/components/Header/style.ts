import { css, styled } from 'styled-components'

export const Container = styled.header<{ $height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  ${({ $height }) => css`
    margin-bottom: ${-Math.abs($height)}px;
  `};

  a.cta {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 3px;
    text-decoration: none;
    @media ${({ theme }) => theme.media?.lg} {
      font-size: 1rem;
    }
  }

  .container {
    &__inner {
      display: flex;
      /* align-items: center; */
      justify-content: space-between;
      width: 100%;
    }

    &__logo {
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 8px;
      line-height: 1.75;
      [href] {
        color: ${({ theme }) => theme.palette?.textColor};
        text-decoration: none;
      }

      @media ${({ theme }) => theme.media?.lg} {
        font-size: 1rem;
      }
    }

    &__nav {
      display: flex;
      > div {
        padding-left: 1rem;
      }
    }
  }
`
