'use client'

import Link from 'next/link'
import { Container } from './style'

export const Footer = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
      </ul>
    </Container>
  )
}
