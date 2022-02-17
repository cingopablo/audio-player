import { cx } from '@emotion/css'
import * as React from 'react'

import { LoopIcon, PauseIcon, PlayIcon, ShuffleIcon, StepBackwardIcon, StepForwardIcon } from '../../AudioPlayer.icons'
import { AudioPlayerContext, modeStyles } from '../../AudioPlayer.utils'
import { usePlaybackControlsStyles } from './PlaybackControls.styles'

export const PlaybackControls: React.FunctionComponent = () => {
  const { mode, theme, toggleShuffle, changeTrack, isShuffle, isPlaying, isLoop, handlePlay, toggleLoop } =
    React.useContext<any>(AudioPlayerContext)
  const styles = usePlaybackControlsStyles(theme, mode)
  const sizeMain = React.useMemo(() => modeStyles(mode, '32px', '48px', '64px'), [mode])
  const sizeSecondary = React.useMemo(() => modeStyles(mode, '24px', '32px', '48px'), [mode])

  return (
    <div className={styles.row}>
      {/* Shuffle */}
      <button
        className={cx(styles.button, styles.selectedButton(isShuffle), {
          [styles.hide]: mode === 'compact' || mode === 'mini',
        })}
        onClick={toggleShuffle}>
        <ShuffleIcon />
      </button>
      {/* Back */}
      <button className={styles.button} onClick={() => changeTrack('back')}>
        <StepBackwardIcon width={sizeSecondary} height={sizeSecondary} />
      </button>
      {/* Play */}
      <button className={styles.button} onClick={handlePlay}>
        {isPlaying ? <PauseIcon width={sizeMain} height={sizeMain} /> : <PlayIcon width={sizeMain} height={sizeMain} />}
      </button>
      {/* Next */}
      <button className={styles.button} onClick={() => changeTrack('next')}>
        <StepForwardIcon width={sizeSecondary} height={sizeSecondary} />
      </button>
      {/* Loop */}
      <button
        className={cx(styles.button, styles.selectedButton(isLoop), {
          [styles.hide]: mode === 'compact' || mode === 'mini',
        })}
        onClick={toggleLoop}>
        <LoopIcon />
      </button>
    </div>
  )
}
