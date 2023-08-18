'use client'
import { SwitchTheme } from '#services/theme'
import { PropsWithChildren } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SwitchTheme>
      <ParallaxProvider>{children}</ParallaxProvider>
    </SwitchTheme>
  )
}
