import { css } from '@emotion/css'

import { ThemeMode } from '../Theme/useDetectTheme'
import { Mode } from './AudioPlayer'
import { modeStyles } from './AudioPlayer.utils'

export const theme = {
  palette: {
    light: {
      background: '#FFFFFF',
      icon: '#9C5AF2',
      border: '#e7e7e7',
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
      background: '#414040',
      icon: '#FFFFFF',
      border: '#e7e7e7',
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
  const mode = (_mini: string, _compact: string, _big: string, _default: string) =>
    modeStyles(_mode, _mini, _compact, _big, _default)
  return {
    container: css`
      align-items: center;
      position: relative;
      background-color: ${selectedTheme.background};
      border-radius: ${mode('0', '0', '24px', '24px')};
      color: ${selectedTheme.text.primary};
      display: ${mode('flex', 'flex', 'flex', 'grid')};
      grid-gap: ${mode('16px', '16px', '24px', '24px')};
      justify-content: ${mode('flex-start', 'flex-start', 'center', 'center')};
      max-width: ${mode('300px', '400px', '400px', '298px')};
      width: 100%;
      max-height: ${mode('50px', '100px', 'fit-content', 'fit-content')};
      padding: ${mode('8px 16px', '8px 16px', '32px', '24px')};
    `,
    bottomContainer: css`
      display: grid;
      gap: ${mode('0', '0', '24px', '24px')};
      ${(_mode === 'compact' || _mode === 'mini') &&
      css`
        display: flex;
        flex-direction: column;
        margin-left: auto;
      `}
    `,
    image: css`
      aspect-ratio: 1 / 1;
      border-radius: ${mode('4px', '8px', '24px', '24px')};
      justify-self: center;
      margin-top: ${mode('0', '0', '5px', '5px')};
      max-width: ${mode('34px', '68px', '100%', '100%')};
    `,

    text: css`
      text-align: ${mode('left', 'left', 'center', 'center')};
      display: grid;
      gap: ${mode('4px', '4px', '8px', '8px')}; ;
    `,

    title: css`
      font-weight: 700;
      align-self: flex-start;
      font-size: ${mode('12px', '14px', '16px', '16px')};
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
