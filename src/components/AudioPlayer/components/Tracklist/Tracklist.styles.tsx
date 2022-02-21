import { css } from '@emotion/css'
import * as React from 'react'

import { Breakpoints } from '../../AudioPlayer.hooks'
import { AudioPlayerContext, AudioPlayerContextProps, modeStyles } from '../../AudioPlayer.utils'

export const useTracklistStyles = (breakpoint: Breakpoints) => {
  const { mode, theme } = React.useContext<AudioPlayerContextProps>(AudioPlayerContext)
  const _mode = (_mini: string, _compact: string, _big: string) => modeStyles(mode, _mini, _compact, _big)
  return {
    container: (showBackground?: boolean) => css`
      height: ${_mode('0px', '256px', '100%')};
      width: ${breakpoint === 'xs' ? '100%' : '350px'};
      padding: ${_mode('0', '0', '32px')};
      align-items: center;
      position: relative;
      color: ${theme.text.primary};
      max-height: 585px;
      ${
        mode === 'compact' &&
        css`
          overflow-y: auto;
        `
      }

      ${
        !showBackground &&
        css`
          background-color: ${theme.background};
        `
      }

      &:hover {
        > ::-webkit-scrollbar {
          display: block;
          width: 6px;
          background-color: ${theme.text.primary};
        }
      }

      & > {
        ::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: ${theme.progressBar.background};
        }
        ::-webkit-scrollbar {
          display: none;
          width: 6px;
          background-color: ${theme.progressBar.background};
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${theme.text.primary}};
        }
      }
    `,

    listContainer: css`
      max-height: ${_mode('unset', 'unset', '499px')};
      overflow-y: auto;
      > div:not(:last-of-type) {
        border-bottom: 1px solid ${theme.border};
      }
    `,
    compact: css`
      border-radius: 0;
      height: 150px;
      width: 400px;
      background-color: red;
      padding: 0 !important;
    `,
    title: css`
      font-weight: 600;
      align-self: flex-start;
      font-size: 14px;
      margin-bottom: 12px;
    `,
    selectedTrack: css`
      background-color: ${theme.progressBar.hover};
    `,
  }
}
