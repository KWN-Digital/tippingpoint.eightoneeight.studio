'use client'

import { SyntheticEvent, useCallback } from 'react'
import { useSwitchTheme } from '#services/theme'
import { Container } from './style'

export const Home = () => {
  const { setCurrentTheme } = useSwitchTheme()
  const handleClick = useCallback(
    (e: SyntheticEvent) => {
      const target = e.target as Element
      const theme = target.getAttribute('data-theme') as string
      setCurrentTheme(theme)
    },
    [setCurrentTheme]
  )

  return (
    <Container>
      <h1>Home</h1>
      <button data-theme="main" onClick={handleClick}>
        Main
      </button>
      <button data-theme="dark" onClick={handleClick}>
        Dark
      </button>
    </Container>
  )
}
