import { css } from '@emotion/css'
import * as React from 'react'

import { AudioPlayerContext, AudioPlayerContextProps } from '../../AudioPlayer.utils'

export const useTrackItemStyles = () => {
  const { theme } = React.useContext<AudioPlayerContextProps>(AudioPlayerContext)
  return {
    container: css`
      display: flex;
      grid-gap: 12px;
      justify-content: flex-start;
      max-width: 300px;
      height: 50px;
      padding: 4px 0 4px 4px;
      cursor: pointer;

      &:hover {
        background-color: ${theme.progressBar.hover};
      }
    `,

    compact: css`
      max-width: 400px;
    `,
    image: css`
      aspect-ratio: 1 / 1;
      border-radius: 4px;
      justify-self: center;
      margin-top: 0;
      max-width: 100%;
    `,
    text: css`
      text-align: left;
      display: grid;
      padding: 4px 10px 4px 0;
    `,

    title: css`
      font-weight: 700;
      align-self: flex-start;
      font-size: 12px;
    `,

    artist: css`
      color: ${theme.text.secondary};
      font-weight: 500;
      font-size: 12px;
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
