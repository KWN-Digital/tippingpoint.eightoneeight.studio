import { Actor } from './components/Actor'
import { ICast } from './types'
import { Container } from './style'
export const Cast = ({ actors }: ICast) => {
  return (
    <Container>
      {actors.map((actor, index) => {
        return <Actor {...actor} key={index} />
      })}
    </Container>
  )
}
