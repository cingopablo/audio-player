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
      position: relative;
      ${!isBig &&
      css`
        flex-direction: column;
      `};
    `,
    background: (color?: string) => css`
      background-color: ${color};
      transition: 300ms all ease-in;
    `,
    backdropFilter: css`
      position: absolute;
      inset: 0;
      box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.3);
      filter: blur(10px);
    `,
    container: css`
      align-items: center;
      position: relative;
      //background-color: ${selectedTheme.background};
      color: ${selectedTheme.text.primary};
      width: 100%;
      display: grid;
      grid-template-rows: 286px auto auto;
      grid-gap: 24px;
      justify-content: center;
      max-width: 350px;
      max-height: 585px;
      padding: 32px;
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
      border-radius: ${mode('4px', '8px', '12px')};
      justify-self: center;
      max-width: ${mode('34px', '68px', '75%')};
      transition: 300ms ease-in all;
    `,

    imageGrow: css`
      max-width: 100%;
    `,

    text: css`
      text-align: left;
      display: grid;
      gap: 4px;
    `,

    title: css`
      font-weight: 600;
      align-self: flex-start;
      font-size: ${mode('12px', '14px', '16px')};
    `,

    artist: css`
      color: ${selectedTheme.text.secondary};
      font-weight: 500;
      font-size: ${mode('12px', '14px', '16px')};
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
