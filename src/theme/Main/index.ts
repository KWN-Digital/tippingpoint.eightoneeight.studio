'use client'
import { DefaultTheme, css } from 'styled-components'

export const Main: DefaultTheme = {
  id: 'main',
  global: css`
    * {
      box-sizing: border-box;
    }
  `,
  palette: {
    backgroundColor: '#FFF',
    textColor: '#000',
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
