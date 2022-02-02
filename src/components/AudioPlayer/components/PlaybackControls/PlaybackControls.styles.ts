import { css } from '@emotion/css'

import { ThemeMode } from '../../../Theme/useDetectTheme'
import { Mode } from '../../AudioPlayer'
import { modeStyles } from '../../AudioPlayer.utils'

export const usePlaybackControlsStyles = (_theme: ThemeMode, _mode: Mode) => {
  const mode = (_mini: string, _compact: string, _big: string) => modeStyles(_mode, _mini, _compact, _big)
  return {
    row: css`
      align-items: center;
      display: flex;
      gap: ${mode('4px', '8px', '12px')};
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
