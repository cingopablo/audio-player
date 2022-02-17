import { css } from '@emotion/css'

import { ThemeMode } from '../../../Theme/useDetectTheme'
import { Mode } from '../../AudioPlayer'
import { theme } from '../../AudioPlayer.styles'
import { modeStyles } from '../../AudioPlayer.utils'

export const useTracklistStyles = (_theme: ThemeMode, _mode: Mode) => {
  const selectedTheme = theme.palette[_theme]
  const mode = (_mini: string, _compact: string, _big: string) => modeStyles(_mode, _mini, _compact, _big)
  return {
    container: (showBackground?: boolean) => css`
      height: ${mode('0px', '256px', '100%')};
      width: 350px;
      padding: ${mode('0', '8px 16px', '32px')};
      align-items: center;
      position: relative;
      color: ${selectedTheme.text.primary};
      max-height: 585px;
      ${
        _mode === 'compact' &&
        css`
          overflow-y: auto;
        `
      }

      ${
        !showBackground &&
        css`
          background-color: ${selectedTheme.background};
        `
      }

      &:hover {
        > ::-webkit-scrollbar {
          display: block;
          width: 6px;
          background-color: ${selectedTheme.text.primary};
        }
      }

      & > {
        ::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: ${selectedTheme.progressBar.background};
        }
        ::-webkit-scrollbar {
          display: none;
          width: 6px;
          background-color: ${selectedTheme.progressBar.background};
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${selectedTheme.text.primary}};
        }
      }
    `,

    listContainer: css`
      max-height: ${mode('unset', 'unset', '499px')};
      overflow-y: auto;
      > div:not(:last-of-type) {
        border-bottom: 1px solid ${selectedTheme.border};
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
      background-color: ${selectedTheme.progressBar.hover};
    `,
  }
}
