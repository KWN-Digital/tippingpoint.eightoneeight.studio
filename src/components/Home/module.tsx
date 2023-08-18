import { Intro } from './components/Intro'
import { Fundraising } from './components/Fundrasing'

import { Container } from './style'
import { PropsWithChildren } from 'react'

export const Home = ({}: PropsWithChildren) => {
  return (
    <Container>
      <Intro />
      <Fundraising />
    </Container>
  )
}
