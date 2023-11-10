import { IScriptSynopsis } from './types'
import { Container, Content } from './style'
import Image from 'next/image'
export const ScriptSynopsis = ({ handleSlideChange }: IScriptSynopsis) => {
  return (
    <Container>
      <Content>
        <h1>Script Synopsis</h1>
        <p>
          Against the backdrop of his 30th birthday, Alex must confront his
          fears, embrace his passions, and learn that sometimes, the greatest
          leaps of faith are the ones that lead to a brighter, more authentic
          future. Does he go after his dream or does he let the woes of life
          take him over?
        </p>
        <button onClick={handleSlideChange}>Continue</button>
      </Content>
      <Image
        src="https://ucarecdn.com/fdb32408-0b08-4e7f-b704-ac0b71bf76cd/NOTK_Kone__Bakary_CourtesyofNEON0.webp"
        width={590}
        height={590}
        alt="Film Sypnosis"
      />
    </Container>
  )
}
