'use client'
import { DefaultTheme, css } from 'styled-components'

export const Dark: DefaultTheme = {
  id: 'dark',
  global: css`
    * {
      box-sizing: border-box;
    }
  `,
  palette: {
    backgroundColor: '#000',
    textColor: '#FFF',
  },
  breakpoints: {
    sm: '576px',
    lg: '768px',
  },
  gutters: {
    sm: '1rem',
    lg: '3rem',
  },
}
