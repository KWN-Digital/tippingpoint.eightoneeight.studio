import { Intro } from './components/Intro'
import { Container } from './style'
import { PropsWithChildren } from 'react'
import { Phases } from './components/Phases'

export const Home = ({}: PropsWithChildren) => {
  return (
    <Container>
      <Intro />
      <Phases />
    </Container>
  )
}
