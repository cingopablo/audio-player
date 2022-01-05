import { css } from '@emotion/css'

import { ThemeMode } from '../Theme/useDetectTheme'
import { Mode } from './AudioPlayer'

export const theme = {
  palette: {
    light: {
      background: '#FFFFFF',
      icon: '#9C5AF2',
      border: '#e7e7e7',
      text: {
        color: 'black',
      },
      progressBar: {
        background: '#b3b3b3',
        played: '#9C5AF2',
      },
    },
    dark: {
      background: '#414040',
      icon: '#9C5AF2',
      border: '#e7e7e7',
      text: {
        color: 'white',
      },
      progressBar: {
        background: '#b3b3b3',
        played: '#9C5AF2',
      },
    },
  },
}

export const useStyles = (_theme: ThemeMode, _mode: Mode) => {
  const selectedTheme = theme.palette[_theme]
  const mode = (c: string, b: string, d: string) => (_mode === 'compact' ? c : _mode === 'big' ? b : d)
  return {
    container: css`
      align-items: center;
      position: relative;
      background-color: ${selectedTheme.background};
      border-radius: 4px;
      border: 1px solid ${selectedTheme.border};
      color: ${selectedTheme.text.color};
      display: ${_mode !== 'default' ? 'flex' : 'grid'};
      grid-gap: 24px;
      justify-content: ${mode('flex-start', 'center', 'center')};
      max-width: ${mode('400px', '400px', '298px')};
      width: 100%;
      max-height: ${mode('80px', 'fit-content', 'fit-content')};
      padding: ${mode('16px 16px 16px 0', '32px', '24px')};
    `,
    bottomContainer: css`
      display: grid;
      gap: ${mode('0', '24px', '24px')};
      ${_mode === 'compact' &&
      css`
        width: 100px;
        margin-left: auto;
      `}
    `,
    image: css`
      aspect-ratio: 1 / 1;
      border-radius: ${mode('0', '8px', '4px')};
      justify-self: center;
      margin-top: ${_mode === 'compact' ? '0' : '20px'};
      max-width: ${mode('80px', '180px', '180px')};
    `,

    title: css`
      font-weight: 600;
      text-align: center;
      align-self: flex-start;
    `,
  }
}
