'use client'

import Link from 'next/link'
import { Container } from './style'

export const Footer = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/privacy">Privacy Policy</Link>&nbsp;|&nbsp; Copyright
          &copy; {new Date().getFullYear()} AEG Media LLC. All rights reserved.
        </li>
        <li>
          <a
            href="https://www.kwn.digital/"
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <u>Site</u> by&nbsp;
            <em>KWN Digital</em>
          </a>
        </li>
      </ul>
    </Container>
  )
}
