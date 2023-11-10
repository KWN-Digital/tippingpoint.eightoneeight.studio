'use client'

import { Container } from './style'

export const Footer = () => {
  return (
    <Container>
      <ul>
        <li>
          Privacy Policy | Terms of Services <br />
          Copyright &copy; {new Date().getFullYear()} AEG Media LLC. All rights
          reserved.
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
