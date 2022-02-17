import { css } from '@emotion/css'
import * as React from 'react'

import { AudioPlayerContext, AudioPlayerContextProps, modeStyles } from '../../AudioPlayer.utils'

export const usePlaybackControlsStyles = () => {
  const { mode } = React.useContext<AudioPlayerContextProps>(AudioPlayerContext)
  const _mode = (_mini: string, _compact: string, _big: string) => modeStyles(mode, _mini, _compact, _big)
  return {
    row: css`
      align-items: center;
      display: flex;
      gap: ${_mode('4px', '8px', '12px')};
      justify-content: center;
    `,
    button: css`
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      font-family: monospace;
      transition: 350ms ease 0ms;
      padding: 0;

      &:hover {
        transform: scale(1.05);
        transition: 150ms ease 0ms;
      }
    `,
    selectedButton: (isSelected: boolean) => css`
      opacity: ${isSelected ? '1' : '0.3'};

      ${!isSelected &&
      css`
        &:hover {
          opacity: 0.5;
        }
      `}
    `,
    disabledButton: css`
      cursor: not-allowed;
      opacity: 0.3;

      &:hover {
        transform: none;
      }
    `,

    hide: css`
      display: none;
    `,
  }
}
