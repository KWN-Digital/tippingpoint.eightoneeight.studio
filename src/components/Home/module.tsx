import { Intro } from './components/Intro'
import { Fundraising } from './components/Fundrasing'

import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Intro />
      <Fundraising />
    </Container>
  )
}
