'use client'
import { IPitch } from './types'
import { Container, Rail, Slide } from './style'
import { Intro } from './components/Intro'
import { Summary } from './components/Summary'
import { ScriptSynopsis } from './components/ScriptSynopsis'
import { VisualReference } from './components/VisualReference'
// import { DirectorsNotes } from './components/DirectorsNotes'
import { useCallback, useState } from 'react'
export const Pitch = ({}: IPitch) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = useCallback(() => {
    setCurrentSlide(currentSlide + 1)
  }, [currentSlide])

  const pitchSlides = [
    Intro,
    Summary,
    ScriptSynopsis,
    VisualReference,
    // DirectorsNotes,
  ]

  return (
    <Container>
      <Rail $totalSlides={pitchSlides.length} $currentSlide={currentSlide}>
        {pitchSlides.map((PitchSlide, index) => {
          return (
            <Slide key={index}>
              <div>
                <PitchSlide handleSlideChange={handleSlideChange} />
              </div>
            </Slide>
          )
        })}
      </Rail>
    </Container>
  )
}
