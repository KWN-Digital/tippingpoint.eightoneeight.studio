'use client'
import { createContext } from 'react'
import { IThemeContext } from './types'

export const SwitchThemeContext = createContext<IThemeContext>({
  setCurrentTheme: () => {},
})
