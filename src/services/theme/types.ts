import { RuleSet } from 'styled-components'

export type Color = string

export type Palette = {
  backgroundColor: Color
  textColor: Color
  [key: string]: Color
}

export type Typography = {
  color?: Color
  textDecoration?:
    | 'none'
    | 'underline'
    | 'overline'
    | 'line-through'
    | 'blink'
    | 'inherit'
    | 'initial'
    | 'unset'
    | 'revert'
  fontFamily?: string
  fontSize?: number | string
  fontWeight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | number
    | 'inherit'
    | 'initial'
    | 'unset'
    | 'revert'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  lineHeight?: number
  letterSpacing?: number
  fontStyle?: string
  hover?: Typography
}

export type Breakpoints = {
  sm: number | string
  lg: number | string
  [key: string]: number | string
}

export interface Theme {
  id: string
  global: RuleSet
  palette?: Palette
  gutters: {
    [key in keyof Breakpoints]: number | string
  }
  typography?: {
    body: Typography
    link: Typography
    [key: string]: Typography
  }
  breakpoints: Breakpoints
  media?: {
    [key in keyof Breakpoints]: string | number
  }
}
