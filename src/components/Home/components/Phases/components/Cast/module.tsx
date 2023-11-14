'use client'
import { Actor } from './components/Actor'
import { ICast } from './types'
import { Container } from './style'
import { MouseEvent } from 'react'
import { useIsMobile } from './utilts'
export const Cast = ({ actors }: ICast) => {
  const isMobile = useIsMobile()

  const handleActive = (e: MouseEvent<HTMLDivElement>) => {
    const parent = e.currentTarget.parentElement as HTMLDivElement
    parent.childNodes.forEach((child) => {
      if (child instanceof HTMLDivElement) {
        child.classList.remove('active')
      }
    })
    e.currentTarget.classList.add('active')
  }
  return (
    <Container>
      {isMobile && (
        <div className="mobile">
          {actors.map((actor, index) => (
            <Actor
              {...actor}
              dataIndex={index}
              onActive={handleActive}
              key={index}
            />
          ))}
        </div>
      )}

      {!isMobile &&
        actors.map((actor, index) => (
          <Actor
            {...actor}
            dataIndex={index}
            onActive={handleActive}
            key={index}
          />
        ))}
    </Container>
  )
}
