import { css } from '@emotion/css'

import { Mode } from './AudioPlayer'
import { SelectedTheme } from './AudioPlayer.theme'
import { modeStyles } from './AudioPlayer.utils'

export const useStyles = (theme: SelectedTheme, mode: Mode) => {
  const _mode = (_mini: string, _compact: string, _default: string) => modeStyles(mode, _mini, _compact, _default)
  return {
    grid: (isBig: boolean) => css`
      display: flex;
      position: relative;
      ${!isBig &&
      css`
        flex-direction: column;
      `};
    `,
    background: (color: string[]) => css`
      background-color: ${color};
      background: ${color[0]};
      background: radial-gradient(circle, ${color[1]} 70%, ${color[0]} 100%);
      //transition: background-color 1500ms ease-in;
    `,
    backdropFilter: css`
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(100px);
    `,
    container: (showBackground?: boolean) => css`
      align-items: center;
      position: relative;
      color: ${theme.text.primary};
      width: 350px;
      display: grid;
      grid-template-rows: 286px auto auto;
      grid-gap: 24px;
      justify-content: center;
      max-width: 350px;
      max-height: 585px;
      padding: 32px;

      ${!showBackground &&
      css`
        background-color: ${theme.background};
      `};

      path {
        fill: ${theme.text.primary};
      }
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
      gap: ${_mode('0', '0', '24px')};
      ${(mode === 'compact' || mode === 'mini') &&
      css`
        display: flex;
        flex-direction: column;
        margin-left: auto;
      `}
    `,
    image: css`
      aspect-ratio: 1 / 1;
      border-radius: ${_mode('4px', '8px', '12px')};
      justify-self: center;
      max-width: ${_mode('34px', '68px', '81%')};
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
      font-size: ${_mode('12px', '14px', '16px')};
    `,

    artist: (showBackground?: boolean) => css`
      font-weight: 500;
      font-size: ${_mode('12px', '14px', '16px')};

      ${showBackground
        ? css`
            color: rgba(255, 255, 255, 0.5);
          `
        : css`
            color: ${theme.text.secondary};
          `};
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
