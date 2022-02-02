import { css } from '@emotion/css'

import { ThemeMode } from '../../../Theme/useDetectTheme'
import { Mode } from '../../AudioPlayer'
import { theme } from '../../AudioPlayer.styles'

export const useTracklistStyles = (_theme: ThemeMode, _mode: Mode) => {
  const selectedTheme = theme.palette[_theme]
  return {
    container: css`
      border-radius: 0 24px 24px 0;
      height: 100%;
      width: 300px;
      align-items: center;
      position: relative;
      color: ${selectedTheme.text.primary};

      max-height: 515px;
      overflow-y: auto;

      > div:not(:last-of-type) {
        border-bottom: 1px solid ${selectedTheme.border};
      }
    `,
    compact: css`
      border-radius: 0;
      height: 150px;
      width: 400px;
    `,
  }
}
