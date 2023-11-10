export interface IActor {
  name: string
  image: {
    src: string
    width: number
    height: number
  }
  role: string
  bio?: string
}
