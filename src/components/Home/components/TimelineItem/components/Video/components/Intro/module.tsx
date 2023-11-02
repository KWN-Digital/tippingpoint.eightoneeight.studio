import { IIntro } from './types'
import { Container, Video } from './style'
export const Intro = ({ src }: IIntro) => {
  return (
    <Container>
      <Video src={`${src}&autoplay=1&muted=1&loop=1`}>Intro</Video>
    </Container>
  )
}
