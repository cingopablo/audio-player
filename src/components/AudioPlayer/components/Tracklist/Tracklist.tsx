import { cx } from '@emotion/css'
import * as React from 'react'

import { Track } from '../../AudioPlayer'
import { AudioPlayerContext } from '../../AudioPlayer.utils'
import { TrackItem } from '../TrackItem/TrackItem'
import { useTracklistStyles } from './Tracklist.styles'

interface TracklistProps {
  src: Track[]
}

export const Tracklist: React.FunctionComponent<TracklistProps> = ({ src }) => {
  const { mode, theme, isShowBackground, currentTrack, setCurrentTrack, changeTrack } =
    React.useContext<any>(AudioPlayerContext)
  const styles = useTracklistStyles(theme, mode)
  return (
    <div className={cx(styles.container(isShowBackground), { [styles.compact]: mode === 'compact' })}>
      {mode === 'big' && <p className={cx(styles.title)}>Tracklist</p>}
      <div className={styles.listContainer}>
        {src.map((track, index) => (
          <TrackItem
            key={track.title}
            track={track}
            onClick={() => {
              setCurrentTrack(index - 1)
              changeTrack('next')
            }}
            className={cx({ [styles.selectedTrack]: currentTrack === index })}
          />
        ))}
      </div>
    </div>
  )
}
