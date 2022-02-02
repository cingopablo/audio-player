import { cx } from '@emotion/css'
import * as React from 'react'

import { AudioPlayerContext, calculateTime } from '../../AudioPlayer.utils'
import { useProgressBarStyles } from './ProgressBar.styles'

export const ProgressBar: React.FunctionComponent = () => {
  const { mode, theme, changeRange, progressBarRef, currentTime, duration } = React.useContext<any>(AudioPlayerContext)
  const styles = useProgressBarStyles(theme, mode)
  return (
    <div
      className={cx({
        [styles.progressBarContainer]: mode === 'compact' || mode === 'mini',
        [styles.hide]: mode === 'mini',
      })}>
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
