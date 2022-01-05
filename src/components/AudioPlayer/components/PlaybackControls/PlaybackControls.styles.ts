import { css } from '@emotion/css'

import { ThemeMode } from '../../../Theme/useDetectTheme'
import { Mode } from '../../AudioPlayer'

export const usePlaybackControlsStyles = (_theme: ThemeMode, _mode: Mode) => {
  return {
    row: css`
      align-items: center;
      display: flex;
      gap: 4px;
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

      ${_mode === 'compact' &&
      css`
        padding: 0;
      `}

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
