import { css } from '@emotion/css'

import { ThemeMode } from '../Theme/useDetectTheme'
import { Mode } from './AudioPlayer'
import { modeStyles } from './AudioPlayer.utils'

export const theme = {
  palette: {
    light: {
      primary: '#9C5AF2',
      background: '#FFFFFF',
      icon: '#9C5AF2',
      border: 'rgba(231,231,231,0.8)',
      text: {
        primary: '#000000',
        secondary: '#4e4e4e',
      },
      progressBar: {
        background: '#b3b3b3',
        played: '#9C5AF2',
      },
    },
    dark: {
      primary: '#9C5AF2',
      background: '#414040',
      icon: '#FFFFFF',
      border: 'rgba(231,231,231,0.8)',
      text: {
        primary: '#FFFFFF',
        secondary: '#a4a4a4',
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
  const mode = (_mini: string, _compact: string, _default: string) => modeStyles(_mode, _mini, _compact, _default)
  return {
    grid: (isBig: boolean) => css`
      display: flex;
      ${!isBig &&
      css`
        flex-direction: column;
      `};
    `,
    container: (showTracklist: boolean) => css`
      align-items: center;
      position: relative;
      background-color: ${selectedTheme.background};
      color: ${selectedTheme.text.primary};
      width: 100%;
      border-radius: ${showTracklist ? '24px 0 0 24px' : '24px'};
      display: grid;
      grid-gap: 24px;
      justify-content: center;
      max-width: 298px;
      max-height: 515px;
      padding: 24px;
    `,
    mini: css`
      border-radius: 0;
      display: flex;
      grid-gap: 16px;
      justify-content: flex-start;
      max-width: 300px;
      max-height: 50px;
      padding: 8px 16px;
    `,
    compact: css`
      border-radius: 0;
      display: flex;
      grid-gap: 16px;
      justify-content: flex-start;
      max-width: 400px;
      max-height: 100px;
      padding: 8px 16px;
    `,
    bottomContainer: css`
      display: grid;
      gap: ${mode('0', '0', '24px')};
      ${(_mode === 'compact' || _mode === 'mini') &&
      css`
        display: flex;
        flex-direction: column;
        margin-left: auto;
      `}
    `,
    image: css`
      aspect-ratio: 1 / 1;
      border-radius: ${mode('4px', '8px', '24px')};
      justify-self: center;
      margin-top: ${mode('0', '0', '5px')};
      max-width: ${mode('34px', '68px', '100%')};
    `,

    text: css`
      text-align: ${mode('left', 'left', 'center')};
      display: grid;
      gap: ${mode('4px', '4px', '8px')};
    `,

    title: css`
      font-weight: 700;
      align-self: flex-start;
      font-size: ${mode('12px', '14px', '16px')};
    `,

    artist: css`
      color: ${selectedTheme.text.secondary};
      font-weight: 500;
      font-size: 12px;
    `,

    hide: css`
      display: none;
    `,
    ellipsis: (maxLines: number) => css`
      display: ${maxLines > 1 ? '-webkit-box' : 'block'};
      white-space: ${maxLines === 1 && 'nowrap'};
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      -webkit-line-clamp: ${maxLines};
      -webkit-box-orient: vertical;
      word-break: break-word;
      line-height: 1.1em;
      max-height: ${1.1 * maxLines}em;
    `,
  }
}
