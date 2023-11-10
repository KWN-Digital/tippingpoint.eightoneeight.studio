import { ReactNode } from 'react'

export interface ITimelineItem {
  disabled?: boolean
  cover: {
    src: string
  }
  type: string
  title?: string
  subtitle?: string
  phase?: string
  description?: string
  image?: string
  video?: string
  button: {
    label: string
    link: string
  }
  Component: ReactNode
  link?: {
    url: string
    alt: string
  }
}
