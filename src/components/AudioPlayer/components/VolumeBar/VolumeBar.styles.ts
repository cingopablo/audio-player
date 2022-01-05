import { css } from '@emotion/css'

import { ThemeMode } from '../../../Theme/useDetectTheme'
import { Mode } from '../../AudioPlayer'
import { theme } from '../../AudioPlayer.styles'

export const useVolumeBarStyles = (_theme: ThemeMode, _mode: Mode) => {
  const selectedTheme = theme.palette[_theme]
  return {
    container: css`
      align-items: center;
      display: flex;
      gap: 4px;
      justify-content: center;
    `,
    volumeBar: css`
      appearance: none;
      background: ${selectedTheme.progressBar.background};
      border-radius: 10px;
      height: 4px;
      margin: 0;
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
        width: var(--volume-width);
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
        border-radius: 50%;
        border: none;
        box-sizing: border-box;
        cursor: pointer;
        height: 8px;
        margin: -2px 0 0 0;
        position: relative;
        transition: 350ms ease 0ms;
        width: 8px;
        z-index: 3;
      }

      &::-moz-range-thumb {
        background-color: ${selectedTheme.progressBar.played};
        border-radius: 50%;
        border: transparent;
        box-sizing: border-box;
        cursor: pointer;
        height: 8px;
        position: relative;
        transition: 350ms ease 0ms;
        width: 8px;
        z-index: 3;
      }

      &::-webkit-slider-thumb:hover,
      &::-webkit-slider-thumb:focus,
      &::-webkit-slider-thumb:active {
        background: ${selectedTheme.progressBar.played};
        transform: ${_mode !== 'compact' ? 'scale(3)' : 'scale(2)'};
      }
    `,
  }
}
