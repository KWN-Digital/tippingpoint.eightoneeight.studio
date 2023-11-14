'use client'
import { SwitchTheme } from '#services/theme'
import { PropsWithChildren } from 'react'

export const Providers = ({ children }: PropsWithChildren) => {
  return <SwitchTheme>{children}</SwitchTheme>
}
