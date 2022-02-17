import { css } from '@emotion/css'
import * as React from 'react'

import { AudioPlayerContext, AudioPlayerContextProps, modeStyles } from '../../AudioPlayer.utils'

export const useVolumeBarStyles = () => {
  const { mode, theme } = React.useContext<AudioPlayerContextProps>(AudioPlayerContext)
  const _mode = (_mini: string, _compact: string, _big: string) => modeStyles(mode, _mini, _compact, _big)
  return {
    container: css`
      align-items: center;
      display: ${_mode('none', 'none', 'flex')};
      gap: 4px;
      justify-content: center;
    `,
    volumeBar: css`
      appearance: none;
      background: ${theme.progressBar.background};
      border-radius: 16px;
      height: 3px;
      margin: 0;
      outline: none;
      position: relative;
      width: 100%;

      &::-webkit-slider-runnable-track {
        background: ${theme.progressBar.background};
        border-radius: 16px;
        height: 3px;
        outline: none;
        position: relative;
        width: 100%;
      }

      &::-moz-range-track {
        background: ${theme.progressBar.background};
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
        background-color: ${theme.text.primary};
        border-bottom-left-radius: 16px;
        border-top-left-radius: 16px;
        content: '';
        cursor: pointer;
        height: 3px;
        left: 0;
        position: absolute;
        top: 0;
        width: var(--volume-width);
        z-index: 2;
      }

      &:hover::before {
        background-color: ${theme.text.primary};
      }

      &::-moz-range-progress {
        background-color: ${theme.text.primary};
        border-bottom-left-radius: 16px;
        border-top-left-radius: 16px;
        height: 3px;
      }

      &:hover::-moz-range-progress {
        background-color: ${theme.text.primary};
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: ${theme.text.primary};
        border-radius: 50%;
        border: none;
        box-sizing: border-box;
        cursor: pointer;
        height: 16px;
        margin: -7px 0 0 0;
        position: relative;
        transition: 350ms ease 0ms;
        width: 16px;
        z-index: 3;
      }

      &::-moz-range-thumb {
        background-color: ${theme.text.primary};
        border-radius: 50%;
        border: transparent;
        box-sizing: border-box;
        cursor: pointer;
        height: 16px;
        position: relative;
        transition: 350ms ease 0ms;
        width: 16px;
        z-index: 3;
      }

      &::-webkit-slider-thumb:hover,
      &::-webkit-slider-thumb:focus,
      &::-webkit-slider-thumb:active {
        background: ${theme.text.primary};
        transform: ${_mode('scale(1)', 'scale(1)', 'scale(1.25)')};
      }
    `,
    hide: css`
      display: none;
    `,
  }
}
