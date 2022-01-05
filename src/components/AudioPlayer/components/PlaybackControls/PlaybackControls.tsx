import { cx } from '@emotion/css'
import * as React from 'react'

import { useDetectTheme } from '../../../Theme/useDetectTheme'
import { LoopIcon, PauseIcon, PlayIcon, ShuffleIcon, StepBackwardIcon, StepForwardIcon } from '../../AudioPlayer.icons'
import { AudioPlayerContext } from '../../AudioPlayer.utils'
import { usePlaybackControlsStyles } from './PlaybackControls.styles'

export const PlaybackControls: React.FunctionComponent = () => {
  const { mode, theme, toggleShuffle, changeTrack, isShuffle, isPlaying, isLoop, handlePlay, toggleLoop } =
    React.useContext<any>(AudioPlayerContext)
  const systemTheme = useDetectTheme()
  const _theme = React.useMemo(() => theme ?? systemTheme, [systemTheme])
  const styles = usePlaybackControlsStyles(_theme, mode)
  return (
    <div className={styles.row}>
      {/* Shuffle */}
      <button
        className={cx(styles.button, styles.selectedButton(isShuffle), { [styles.hide]: mode === 'compact' })}
        onClick={toggleShuffle}>
        <ShuffleIcon />
      </button>
      {/* Back */}
      <button className={styles.button} onClick={() => changeTrack('back')}>
        <StepBackwardIcon />
      </button>
      {/* Play */}
      <button className={styles.button} onClick={handlePlay}>
        {isPlaying ? (
          <PauseIcon width={mode === 'compact' ? '32px' : '48px'} height={mode === 'compact' ? '32px' : '48px'} />
        ) : (
          <PlayIcon width={mode === 'compact' ? '32px' : '48px'} height={mode === 'compact' ? '32px' : '48px'} />
        )}
      </button>
      {/* Next */}
      <button className={styles.button} onClick={() => changeTrack('next')}>
        <StepForwardIcon />
      </button>
      {/* Loop */}
      <button
        className={cx(styles.button, styles.selectedButton(isLoop), { [styles.hide]: mode === 'compact' })}
        onClick={toggleLoop}>
        <LoopIcon />
      </button>
    </div>
  )
}
