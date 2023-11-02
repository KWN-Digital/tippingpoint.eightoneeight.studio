'use client'
import { ITimelineItem } from './types'
import { Container, Modal, Feature } from './style'
import { useInView } from 'react-intersection-observer'
import { VideoIntro } from './components/Video'
import { SlideshowIntro } from './components/Slideshow'

export const TimelineItem = ({ title, type, ...props }: ITimelineItem) => {
  const { ref, inView } = useInView({
    threshold: 1,
  })

  let Intro

  if (type === 'video') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Intro = <VideoIntro {...props.video} />
  }

  if (type === 'slideshow') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Intro = <SlideshowIntro {...props.slideshow} />
  }

  if (!type) {
    Intro = <div></div>
  }
  // {cover && (
  //   <Image
  //     src={cover.src}
  //     width={1200}
  //     height={400}
  //     alt="placeholder"
  //   />
  // )}

  return (
    <Container>
      <Feature
        initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="container__inner" ref={ref}>
          {Intro}
        </div>
      </Feature>
      <Modal animate={inView ? { opacity: 1 } : { opacity: 0 }}>
        <div>
          <h3>{title}</h3>
        </div>
      </Modal>
    </Container>
  )
}
