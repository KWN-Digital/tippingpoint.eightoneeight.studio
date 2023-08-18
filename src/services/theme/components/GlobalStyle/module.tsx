'use client'

import { RuleSet, createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle<{ styles: RuleSet }>`
	${normalize}

    ${({ theme }) =>
      theme.palette &&
      css`
        body {
          background-color: ${theme.palette?.backgroundColor};
          color: ${theme.palette?.textColor};
        }
      `}

    ${({ theme }) =>
      theme.typography?.body &&
      css`
        body {
          font-family: ${theme.typography.body.fontFamily};
          font-size: ${theme.typography.body.fontSize};
          font-weight: ${theme.typography.body.fontWeight};
          line-height: ${theme.typography.body.lineHeight};
        }
      `}

    ${({ theme }) =>
      theme.typography?.link &&
      css`
        a:link {
          color: ${theme.typography.link.color};
          text-decoration: ${theme.typography.link.textDecoration};
        }
      `}

    ${({ theme }) =>
      theme.typography?.linkHover &&
      css`
        a:link:hover {
          color: ${theme.typography.link.hover?.color};
          text-decoration: ${theme.typography.linkHover.textDecoration};
        }
      `}

	img {
		max-width: 100%;
		display: block;
	}

  buttton {
    background-color: transparent;
    border: none;
  }

  ${({ styles }) => styles}
`
