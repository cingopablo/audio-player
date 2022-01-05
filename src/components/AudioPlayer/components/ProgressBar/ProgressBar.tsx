import * as React from 'react'

import { useDetectTheme } from '../../../Theme/useDetectTheme'
import { AudioPlayerContext, calculateTime } from '../../AudioPlayer.utils'
import { useProgressBarStyles } from './ProgressBar.styles'

export const ProgressBar: React.FunctionComponent = () => {
  const { mode, theme, changeRange, progressBarRef, currentTime, duration } = React.useContext<any>(AudioPlayerContext)
  const systemTheme = useDetectTheme()
  const _theme = React.useMemo(() => theme ?? systemTheme, [systemTheme])
  const styles = useProgressBarStyles(_theme, mode)
  return (
    <div className={styles.progressBarContainer}>
      <input
        className={styles.progressBar}
        onChange={changeRange}
        ref={progressBarRef}
        type={'range'}
        value={currentTime}
      />
      <div className={styles.timestampsContainer}>
        <div>{calculateTime(currentTime)}</div>
        <div>{duration && !isNaN(duration) ? calculateTime(duration) : '00:00'}</div>
      </div>
    </div>
  )
}
