import { css } from '@emotion/css'

import { ThemeMode } from '../../../Theme/useDetectTheme'
import { Mode } from '../../AudioPlayer'
import { theme } from '../../AudioPlayer.styles'
import { modeStyles } from '../../AudioPlayer.utils'

export const useTracklistStyles = (_theme: ThemeMode, _mode: Mode) => {
  const selectedTheme = theme.palette[_theme]
  const mode = (_mini: string, _compact: string, _big: string) => modeStyles(_mode, _mini, _compact, _big)

  return {
    container: css`
      background-color: red;
      border-radius: 0 24px 24px 0;
      height: 100%;
      width: 300px;
    `,
    compact: css`
      border-radius: 0;
      height: 300px;
      width: 400px;
    `,
  }
}
