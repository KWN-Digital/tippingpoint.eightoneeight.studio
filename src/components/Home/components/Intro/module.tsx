import { Container, Letter } from './style'
import { ParallaxImage } from '../ParallaxImage'

export const Intro = () => {
  return (
    <Container>
      <div className="container__inner">
        <ParallaxImage />
        <div className="container__overlay">
          <div>
            <h4>818 Studios Presents</h4>
            <h1>
              {`Tipping Point`.split('').map((letter, index) => (
                <Letter
                  initial={{ opacity: 0.5, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.75, delay: index * 0.05 }}
                  key={index}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </Letter>
              ))}
            </h1>
            <h5>A film by Aaron Glaize</h5>
          </div>
        </div>
      </div>
    </Container>
  )
}
