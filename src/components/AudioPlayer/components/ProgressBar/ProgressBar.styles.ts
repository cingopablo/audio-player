import { css } from '@emotion/css'

import { ThemeMode } from '../../../Theme/useDetectTheme'
import { Mode } from '../../AudioPlayer'
import { theme } from '../../AudioPlayer.styles'
import { modeStyles } from '../../AudioPlayer.utils'

export const useProgressBarStyles = (_theme: ThemeMode, _mode: Mode) => {
  const selectedTheme = theme.palette[_theme]
  const mode = (_mini: string, _compact: string, _big: string) => modeStyles(_mode, _mini, _compact, _big)
  return {
    progressBarContainer: css`
      position: absolute;
      left: 0;
      bottom: -4px;
      right: 0;
    `,
    progressBar: css`
      appearance: none;
      background: ${selectedTheme.progressBar.background};
      border-radius: 16px;
      height: 3px;
      margin: ${mode('0', '0 0 4px 0', '0 0 12px 0')};
      outline: none;
      position: relative;
      width: 100%;

      &::-webkit-slider-runnable-track {
        background: ${selectedTheme.progressBar.background};
        border-radius: 16px;
        height: 3px;
        outline: none;
        position: relative;
        width: 100%;
      }

      &::-moz-range-track {
        background: ${selectedTheme.progressBar.background};
        border-radius: 16px;
        height: 3px;
        outline: none;
        position: relative;
        width: 100%;
      }

      &::-moz-focus-outer {
        border: 0;
      }

      &::before {
        background-color: ${selectedTheme.text.primary};
        border-bottom-left-radius: 16px;
        border-top-left-radius: 16px;
        content: '';
        cursor: pointer;
        height: 3px;
        left: 0;
        position: absolute;
        top: 0;
        width: var(--seek-before-width);
        z-index: 2;
      }

      &:hover::before {
        background-color: ${selectedTheme.text.primary};
      }

      &::-moz-range-progress {
        background-color: ${selectedTheme.text.primary};
        border-bottom-left-radius: 16px;
        border-top-left-radius: 16px;
        height: 3px;
      }

      &:hover::-moz-range-progress {
        background-color: ${selectedTheme.text.primary};
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: ${selectedTheme.text.primary};
        border-radius: ${mode('none', 'none', '50%')};
        border: none;
        box-sizing: border-box;
        cursor: pointer;
        height: ${mode('3px', '3px', '6px')};
        margin: ${mode('0', '0', '-1px')};
        position: relative;
        transition: 350ms ease 0ms;
        width: ${mode('6px', '6px', '6px')};
        z-index: 3;
      }

      &::-moz-range-thumb {
        background-color: ${selectedTheme.text.primary};
        border-radius: 50%;
        border: transparent;
        box-sizing: border-box;
        cursor: pointer;
        height: ${mode('4px', '4px', '6px')};
        position: relative;
        transition: 350ms ease 0ms;
        width: ${mode('4px', '4px', '6px')};
        z-index: 3;
      }

      &::-webkit-slider-thumb:hover,
      &::-webkit-slider-thumb:focus,
      &::-webkit-slider-thumb:active {
        background: ${selectedTheme.text.primary};
        transform: ${mode('scale(1)', 'scale(1)', 'scale(3)')};
      }
    `,

    timestampsContainer: css`
      align-items: center;
      display: ${mode('none', 'none', 'flex')};
      font-size: 10px;
      font-weight: 500;
      justify-content: space-between;
      opacity: 0.3;
    `,

    hide: css`
      visibility: hidden;
      pointer-events: none;
    `,
  }
}
