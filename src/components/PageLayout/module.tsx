import { PropsWithChildren } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { SwitchTheme } from '#services/theme'

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <SwitchTheme>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </SwitchTheme>
  )
}
