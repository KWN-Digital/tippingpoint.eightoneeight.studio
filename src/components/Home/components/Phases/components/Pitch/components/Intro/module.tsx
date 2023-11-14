import { IIntro } from './types'
import { Container } from './style'
import Image from 'next/image'
export const Intro = ({ handleSlideChange }: IIntro) => {
  return (
    <Container>
      <h1>Tipping Point</h1>
      <h2>A Film By Aaron Glaize</h2>
      <Image
        src="https://ucarecdn.com/0ed7f45f-d4e8-4ba3-8335-00e65c5d45d3/Sequence_no_k_590x.webp"
        width={590}
        height={590}
        alt="Pitch"
      />
      <p>
        On his 30th birthday unexpected events set Alex&apos;s life on a new
        path.
      </p>
      <button onClick={handleSlideChange}>Continue</button>
    </Container>
  )
}
