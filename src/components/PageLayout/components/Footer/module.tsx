'use client'

import { Container } from './style'

export const Footer = () => {
  return (
    <Container>
      <ul>
        <li>
          &copy; {new Date().getFullYear()} 818 Studios. All rights reserved.
        </li>
      </ul>
    </Container>
  )
}
