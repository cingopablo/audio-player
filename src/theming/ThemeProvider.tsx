import { ThemeProvider as EmotionThemeProvider, useTheme as useEmotionTheme } from '@emotion/react'
import React from 'react'

import { DefaultTheme } from './theme/theme'

export interface ThemeProviderProps<T extends DefaultTheme> {
  theme: T
  children?: React.ReactNode
}

export function ThemeProvider<T extends DefaultTheme>({ theme, children }: ThemeProviderProps<T>): React.ReactElement {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}

export const useTheme = useEmotionTheme
