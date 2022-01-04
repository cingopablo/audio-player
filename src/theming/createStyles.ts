import { CSSObject } from '@emotion/css'
import { css } from '@emotion/css'
import { Emotion } from '@emotion/css/create-instance'
import * as React from 'react'

import { DefaultTheme } from './theme/theme'
import { useTheme } from './ThemeProvider'

export type Style = ReturnType<Emotion['css']> | CSSObject
export type StyleFn = (...input: any[]) => Style
export type Styles<S> = { [K in keyof S]: StyleFn | Style }
export type StyleProps = Record<string | number, string | number | boolean | undefined> | undefined

export type NamedStyles<S> = {
  [K in keyof S]: S[K] extends (...args: infer I) => any ? (...args: I) => string : string
}

export function createStyles<
  T extends DefaultTheme = DefaultTheme,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  P extends undefined = undefined,
  S extends Styles<S> = Record<string, Style>
>(
  styles: S | ((theme: T, props: undefined) => S)
): {
  useStyles: () => {
    [K in keyof S]: S[K] extends (...args: infer I) => any ? (...args: I) => string : string
  }
}
export function createStyles<
  T extends DefaultTheme = DefaultTheme,
  P extends StyleProps = Record<string, never>,
  S extends Styles<S> = Record<string, Style>
>(
  styles: S | ((theme: T, props: P) => S)
): {
  useStyles: (props: P) => {
    [K in keyof S]: S[K] extends (...args: infer I) => any ? (...args: I) => string : string
  }
}
export function createStyles<
  T extends DefaultTheme = DefaultTheme,
  P extends StyleProps = undefined,
  S extends Styles<S> = Record<string, Style>
>(styles: S | ((theme: T, props: P) => S)) {
  return {
    useStyles: (props: P): NamedStyles<S> => {
      const theme = useTheme() as T
      return React.useMemo(
        () => {
          const result = typeof styles === 'function' ? styles(theme, props) : styles
          return (Object.keys(result) as Array<keyof S>).reduce<NamedStyles<S>>(
            (acc, key) => ({
              ...acc,
              [key]: evalStyle(result[key]),
            }),
            {} as any
          )
        },
        props ? [...Object.values(props!), theme] : [theme]
      )
    },
  }
}

const evalStyle = <P extends any[]>(style: ((...args: P) => Style) | Style) => {
  switch (typeof style) {
    case 'string':
      return style
    case 'object':
      return css(style)
    case 'function':
      return (...args: P) => evalStyle(style(...args))
  }
}
