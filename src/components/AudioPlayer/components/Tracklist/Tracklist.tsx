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
  const { mode, theme } = React.useContext<any>(AudioPlayerContext)
  const styles = useTracklistStyles(theme, mode)
  return (
    <div className={cx(styles.container, { [styles.compact]: mode === 'compact' })}>
      {src.map(track => (
        <TrackItem key={track.title} track={track} />
      ))}
    </div>
  )
}
