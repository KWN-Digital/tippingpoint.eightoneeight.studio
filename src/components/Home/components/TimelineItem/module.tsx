'use client'
import { ITimelineItem } from './types'
import { Container, Modal, Feature } from './style'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export const TimelineItem = ({ title, cover }: ITimelineItem) => {
  const { ref, inView } = useInView({
    threshold: 1,
  })
  return (
    <Container>
      <Feature
        initial={{ opacity: 0, y: '20%' }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="container__inner" ref={ref}>
          {cover && (
            <Image
              src={cover.src}
              width={1200}
              height={400}
              alt="placeholder"
            />
          )}
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
