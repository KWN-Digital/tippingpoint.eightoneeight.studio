import { ISummary } from './types'
import { Container, Content } from './style'
import Image from 'next/image'
export const Summary = ({ handleSlideChange }: ISummary) => {
  return (
    <Container>
      <Image
        src="https://ucarecdn.com/293ee5f2-dec8-4293-937e-41e2701b2295/5809077c1a000067145bac67.webp"
        width={590}
        height={590}
        alt="Film Sypnosis"
      />
      <Content>
        <h1>Summary</h1>
        <p>
          At its core, &quot;Tipping Point&quot; is a coming-of-age story that
          echoes the challenges, fears, and aspirations we all face on our
          journey to adulthood. It&apos;s a story that transcends age,
          background, and experience - because we&apos;ve all encountered
          moments that tested our courage, pushed us beyond our limits, and
          demanded that we stand up to our fears.
        </p>
        <p>
          Through the eyes of our protagonist, you&apos;ll witness a narrative
          that&apos;s relatable, heartwarming, and inspiring. &quot;Tipping
          Point&quot; follows Alex, a young man at a crucial crossroads in his
          life. As he grapples with adversity and uncertainty, he&apos;s forced
          to confront his deepest fears and insecurities. But this is not just
          Alex&apos;s story; it&apos;s a universal story of growth, resilience,
          and ultimately, triumph.
        </p>
        <button onClick={handleSlideChange}>Continue</button>
      </Content>
    </Container>
  )
}
