'use client'
import { ITimelineItem } from './types'
import {
  Container,
  Modal,
  Feature,
  PageContainer,
  AnimateLayer,
  Page,
  Top,
  Bottom,
  Close,
} from './style'
import { useInView } from 'react-intersection-observer'
import { VideoIntro } from './components/Video'
import { SlideshowIntro } from './components/Slideshow'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

export const TimelineItem = ({
  title,
  type,
  button,
  Component,
  ...props
}: ITimelineItem) => {
  const { ref, inView } = useInView({
    threshold: 1,
  })

  const [showPage, setShowPage] = useState(false)

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
    Intro = <div />
  }

  useEffect(() => {
    if (showPage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showPage])

  const handleShowPage = useCallback(() => {
    setShowPage(!showPage)
  }, [showPage])

  return (
    <>
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
            {title && <h3>{title}</h3>}
            {button && <button onClick={handleShowPage}>{button.label}</button>}
          </div>
        </Modal>
      </Container>
      <AnimatePresence>
        {showPage && (
          <PageContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Page
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Close>
                <button onClick={handleShowPage}>Back to site</button>
              </Close>

              {Component}
            </Page>
            <AnimateLayer>
              <Top />
              <Bottom />
            </AnimateLayer>
          </PageContainer>
        )}
      </AnimatePresence>
    </>
  )
}
