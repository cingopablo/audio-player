export interface DefaultTheme {
  [key: string]: any
}

export type UnpackedTheme<T extends ResponsiveTheme<DefaultTheme> | DefaultTheme> = T extends ResponsiveTheme<infer U>
  ? U
  : T
export type ResponsiveTheme<T extends DefaultTheme> = (width?: number) => T

export function createTheme<T extends DefaultTheme>(theme: T): T {
  return theme
}

export function extendTheme<T extends DefaultTheme, E extends T>(theme: T, extend: (theme: T) => E): E {
  return extend(theme)
}
