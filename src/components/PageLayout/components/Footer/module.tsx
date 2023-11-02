'use client'

import { Container } from './style'

export const Footer = () => {
  return (
    <Container>
      <ul>
        <li>
          &copy; {new Date().getFullYear()} AG Media LLC. All rights reserved.
        </li>
        <li>
          <a
            href="https://www.kwn.digital"
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
