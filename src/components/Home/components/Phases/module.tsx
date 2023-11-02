import { TIMELINE } from './constants'
import { TimelineItem } from '../TimelineItem'
import { Phase, PhaseTitle, ComingSoonContainer } from './style'

// TODO - fix any types
export const Phases = () => {
  return (
    <>
      {Object.keys(TIMELINE).map((phase, index) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const t = TIMELINE as any
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sections = t[phase].sections.map((section: any) => ({
          phase,
          ...section,
        }))

        const show = t[phase].show

        if (!show) {
          return (
            <div key={index}>
              <PhaseTitle>Coming Soon</PhaseTitle>
              <ComingSoonContainer>
                {sections.map(
                  (
                    { title }: any, // eslint-disable-line @typescript-eslint/no-explicit-any
                    index: number
                  ) => (
                    <div key={index}>
                      <h3>{title}</h3>
                    </div>
                  )
                )}
              </ComingSoonContainer>
            </div>
          )
        }

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
      })}
    </>
  )
}
