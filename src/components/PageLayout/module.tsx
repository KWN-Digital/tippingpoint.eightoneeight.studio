import { PropsWithChildren } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Providers } from './components/Providers'

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Providers>
      <Header />
      <main>{children}</main>
      <Footer />
    </Providers>
  )
}
