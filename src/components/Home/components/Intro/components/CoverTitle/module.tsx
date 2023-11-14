import { ICoverTitle } from './types'
import { Container, Letter, Story } from './style'
export const CoverTitle = ({}: ICoverTitle) => {
  return (
    <Container>
      <div>
        <h4>818 Studios Presents</h4>
        <h1>
          {`Tipping Point`.split('').map((letter, index) => (
            <Letter
              initial={{ opacity: 0.5, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.75, delay: index * 0.1 }}
              key={index}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </Letter>
          ))}
        </h1>
        <h5>
          A short by <strong>Aaron Glaize</strong>
        </h5>
        <Story
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.75 }}
          transition={{ duration: 3 }}
        >
          Imagine celebrating your 30th birthday and receiving news that
          reshapes everything. That&apos;s the heart of our story. A young
          man&apos;s journey takes an unforeseen twist, setting him on a new
          path. It&apos;s a tale of courage, change, and the pivotal moments
          that define us.
        </Story>
      </div>
    </Container>
  )
}
