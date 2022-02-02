import { css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'
import * as React from 'react'

import { ThemeProvider } from '../../theming/ThemeProvider'
import { paletteDark, paletteLight, theme } from './theme'
import { useTheme } from './theme'
import { useDetectTheme } from './useDetectTheme'

const GlobalCSS: React.FunctionComponent = () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        ${emotionReset};
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
        html,
        body {
          height: 100%;
        }
        input,
        button,
        textarea,
        select {
          font: inherit;
        }
        body {
          line-height: 1;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
          font-size: 16px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: ${theme.palette.background};
        }
        a {
          color: #3913b8;
          font-weight: 600;
          text-decoration: none;
        }
      `}
    />
  )
}

type Theme = typeof theme

export const ThemeProviderAudio: React.FunctionComponent = ({ children }) => {
  const currentTheme = useDetectTheme()
  const currentPalette = currentTheme === 'light' ? paletteLight : paletteDark

  return (
    <ThemeProvider<Theme> theme={{ ...theme, palette: currentPalette }}>
      <GlobalCSS />
      {children}
    </ThemeProvider>
  )
}
