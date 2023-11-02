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
  link?: {
    url: string
    alt: string
  }
}
