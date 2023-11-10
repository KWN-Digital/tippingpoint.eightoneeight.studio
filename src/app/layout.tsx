import { PropsWithChildren } from 'react'
import { StyledComponentsRegistry } from '#services/theme'
import { metadata } from './meta'
import { PageLayout } from '../components'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <html lang="en">
        <body style={{ background: '#000' }}>
          <PageLayout>{children}</PageLayout>
        </body>
      </html>
    </StyledComponentsRegistry>
  )
}

export { metadata }
