import { TIMELINE } from './constants'
import { TimelineItem } from '../TimelineItem'
import { Phase, PhaseTitle } from './style'

// TODO - fix any types
export const Phases = () =>
  Object.keys(TIMELINE).map((phase, index) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const t = TIMELINE as any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sections = t[phase].sections.map((section: any) => ({
      phase,
      ...section,
    }))

    return (
      <Phase key={index}>
        <PhaseTitle>{phase}</PhaseTitle>
        {sections.map(
          (
            props: any, // eslint-disable-line @typescript-eslint/no-explicit-any
            index: number
          ) => (
            <TimelineItem key={index} {...props} />
          )
        )}
      </Phase>
    )
  })
