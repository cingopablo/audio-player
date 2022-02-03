import { css } from '@emotion/css'

import { ThemeMode } from '../../../Theme/useDetectTheme'
import { Mode } from '../../AudioPlayer'
import { theme } from '../../AudioPlayer.styles'

export const useTracklistStyles = (_theme: ThemeMode, _mode: Mode) => {
  const selectedTheme = theme.palette[_theme]
  return {
    container: css`
      height: 100%;
      width: 350px;
      padding: 32px;
      align-items: center;
      position: relative;
      color: ${selectedTheme.text.primary};
      //background-color: ${selectedTheme.background};

      max-height: 585px;
    `,

    listContainer: css`
      max-height: 499px;
      overflow-y: auto;
      > div:not(:last-of-type) {
        border-bottom: 1px solid ${selectedTheme.border};
      }
    `,
    compact: css`
      border-radius: 0;
      height: 150px;
      width: 400px;
      padding: 0;
    `,
    title: css`
      font-weight: 600;
      align-self: flex-start;
      font-size: 14px;
      margin-bottom: 12px;
    `,
  }
}
