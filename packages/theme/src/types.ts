export type RecursiveProperty<Nested = string | number> =
  | RecursiveObject<Nested>
  | Nested

export interface RecursiveObject<Nested = string | number> {
  [property: string | number]: RecursiveProperty<Nested>
}

export interface ColorHues {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type Colors = RecursiveObject<
  Record<string | number, Partial<ColorHues>> | string
>

export interface Breakpoints {
  xsm: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  wd: string
}
