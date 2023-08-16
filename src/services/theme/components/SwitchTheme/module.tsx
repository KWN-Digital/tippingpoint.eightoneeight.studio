'use client'
import * as THEMES from '#theme'
import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { SwitchThemeContext } from './utils'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { THEME_STORAGE_KEY } from './constants'
import { GlobalStyle } from '../GlobalStyle'

export const SwitchTheme = ({ children }: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    if (typeof window === 'undefined') return THEMES.Main.id
    const theme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (theme) {
      return theme
    }
    return THEMES.Main.id
  })

  const [theme, setTheme] = useState<DefaultTheme>()

  const themeExists = useCallback((themeID: string) => {
    return Object.values(THEMES).some(({ id }) => id === themeID)
  }, [])

  const setCurrentThemeWithStorage = useCallback(
    (themeID: string) => {
      if (!themeExists(themeID)) return
      setCurrentTheme(themeID)
      window.localStorage.setItem(THEME_STORAGE_KEY, themeID)
    },
    [themeExists]
  )

  useEffect(() => {
    const theme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (theme) {
      setCurrentThemeWithStorage(theme)
    }
  }, [setCurrentThemeWithStorage])

  useEffect(() => {
    const theme = Object.values(THEMES).find(
      // TODO: fix type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ({ id }: any) => id === currentTheme
    ) as DefaultTheme
    setTheme(theme)
  }, [currentTheme])

  if (!theme || !currentTheme) return null

  return (
    <SwitchThemeContext.Provider
      value={{ currentTheme, setCurrentTheme: setCurrentThemeWithStorage }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle styles={theme?.global} />
        {children}
      </ThemeProvider>
    </SwitchThemeContext.Provider>
  )
}
export default SwitchTheme
