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
      theme.typography?.link &&
      css`
        a {
          color: ${theme.typography.link.color};
          text-decoration: ${theme.typography.link.textDecoration};
        }
      `}

    ${({ theme }) =>
      theme.typography?.linkHover &&
      css`
        a:hover {
          color: ${theme.typography.linkHover.color};
          text-decoration: ${theme.typography.linkHover.textDecoration};
        }
      `}

	img {
		max-width: 100%;
		display: block;
	}

    ${({ styles }) => styles}
`
