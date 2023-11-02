'use client'
import { DefaultTheme, css } from 'styled-components'
import { Six_Caps, Open_Sans } from '@next/font/google'

const sixCaps = Six_Caps({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})

const openSans = Open_Sans({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
})

export const Main: DefaultTheme = {
  id: 'main',
  global: css`
    * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    button {
      border: none;
      background: rgba(248, 186, 20, 1);
      color: #000;
      padding: 5px;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 5px;
    }
    a:link,
    a:visited {
      color: rgba(248, 186, 20, 1);
    }
  `,
  typography: {
    body: {
      color: '#000',
      fontFamily: openSans.style.fontFamily,
      fontSize: '16px',
      lineHeight: 1.5,
    },
    link: {
      color: 'rgba(248, 186, 20, 1)',
      hover: {
        color: 'rgba(248, 186, 20, .5)',
      },
    },
    headers: {
      color: '#000',
      fontFamily: sixCaps.style.fontFamily,
      fontSize: 24,
      fontWeight: 400,
    },
  },
  palette: {
    backgroundColor: '#000',
    textColor: '#FFF',
    accentColor: 'rgba(248, 186, 20, 1)',
  },
  breakpoints: {
    sm: '576px',
    lg: '768px',
  },
  gutters: {
    sm: '1rem',
    lg: '3rem',
  },
  media: {
    sm: `(min-width: 576px)`,
    lg: `(min-width: 768px)`,
  },
}
