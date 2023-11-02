import { Container } from './style'
import { CoverPhoto } from './components/CoverPhoto'
import { CoverTitle } from './components/CoverTitle'

export const Intro = () => {
  return (
    <Container>
      <CoverPhoto />
      <CoverTitle />
    </Container>
  )
}
