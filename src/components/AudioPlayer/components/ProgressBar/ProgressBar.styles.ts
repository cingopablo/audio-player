import { css } from '@emotion/css'

import { ThemeMode } from '../../../Theme/useDetectTheme'
import { Mode } from '../../AudioPlayer'
import { theme } from '../../AudioPlayer.styles'

export const useProgressBarStyles = (_theme: ThemeMode, _mode: Mode) => {
  const selectedTheme = theme.palette[_theme]
  const mode = (c: string, b: string, d: string) => (_mode === 'compact' ? c : _mode === 'big' ? b : d)
  return {
    progressBarContainer: css`
      ${_mode === 'compact' &&
      css`
        position: absolute;
        left: 0;
        bottom: -4px;
        right: 0;
      `}
    `,
    progressBar: css`
      appearance: none;
      background: ${selectedTheme.progressBar.background};
      border-radius: 10px;
      height: 4px;
      margin: ${mode('0', '0 0 8px 0', '0 0 8px 0')};
      outline: none;
      position: relative;
      width: 100%;

      &::-webkit-slider-runnable-track {
        background: ${selectedTheme.progressBar.background};
        border-radius: 10px;
        height: 4px;
        outline: none;
        position: relative;
        width: 100%;
      }

      &::-moz-range-track {
        background: ${selectedTheme.progressBar.background};
        border-radius: 10px;
        height: 4px;
        outline: none;
        position: relative;
        width: 100%;
      }

      &::-moz-focus-outer {
        border: 0;
      }

      &::before {
        background-color: ${selectedTheme.progressBar.played};
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        content: '';
        cursor: pointer;
        height: 4px;
        left: 0;
        position: absolute;
        top: 0;
        width: var(--seek-before-width);
        z-index: 2;
      }

      &:hover::before {
        background-color: ${selectedTheme.progressBar.played};
      }

      &::-moz-range-progress {
        background-color: ${selectedTheme.progressBar.played};
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        height: 4px;
      }

      &:hover::-moz-range-progress {
        background-color: ${selectedTheme.progressBar.played};
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: ${selectedTheme.progressBar.played};
        border-radius: ${_mode !== 'compact' ? '50%' : 'none'};
        border: none;
        box-sizing: border-box;
        cursor: pointer;
        height: ${_mode !== 'compact' ? '8px' : '4px'};
        margin: ${mode('0', '-2px 0 0 0', '-2px 0 0 0')};
        position: relative;
        transition: 350ms ease 0ms;
        width: ${_mode !== 'compact' ? '8px' : '4px'};
        z-index: 3;
      }

      &::-moz-range-thumb {
        background-color: ${selectedTheme.progressBar.played};
        border-radius: 50%;
        border: transparent;
        box-sizing: border-box;
        cursor: pointer;
        height: ${_mode !== 'compact' ? '8px' : '4px'};
        position: relative;
        transition: 350ms ease 0ms;
        width: ${_mode !== 'compact' ? '8px' : '4px'};
        z-index: 3;
      }

      &::-webkit-slider-thumb:hover,
      &::-webkit-slider-thumb:focus,
      &::-webkit-slider-thumb:active {
        background: ${selectedTheme.progressBar.played};
        ${_mode !== 'compact' &&
        css`
          transform: scale(3);
        `}
      }
    `,

    timestampsContainer: css`
      align-items: center;
      display: ${_mode !== 'compact' ? 'flex' : 'none'};
      font-size: 12px;
      justify-content: space-between;
    `,
  }
}
