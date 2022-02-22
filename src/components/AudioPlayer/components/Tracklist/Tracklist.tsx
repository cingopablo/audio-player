import { cx } from '@emotion/css'
import * as React from 'react'

import { Track } from '../../AudioPlayer'
import { useBreakpoint } from '../../AudioPlayer.hooks'
import { AudioPlayerContext, AudioPlayerContextProps } from '../../AudioPlayer.utils'
import { TrackItem } from '../TrackItem/TrackItem'
import { useTracklistStyles } from './Tracklist.styles'

interface TracklistProps {
  src: Track[]
}

export const Tracklist: React.FunctionComponent<TracklistProps> = ({ src }) => {
  const { mode, isShowBackground, track, setCurrentTrack, changeTrack } =
    React.useContext<AudioPlayerContextProps>(AudioPlayerContext)
  const breakpoint = useBreakpoint()
  const styles = useTracklistStyles(breakpoint.value)

  return (
    <div className={cx(styles.container(isShowBackground), { [styles.compact]: mode === 'compact' })}>
      {mode === 'big' && <p className={cx(styles.title)}>Tracklist</p>}
      <div className={styles.listContainer}>
        {src.map((_track, index) => (
          <TrackItem
            key={_track.title}
            track={_track}
            onClick={() => {
              setCurrentTrack(index - 1)
              changeTrack('next')
            }}
            className={cx({ [styles.selectedTrack]: track.id === _track.id })}
          />
        ))}
      </div>
    </div>
  )
}
