import { cx } from '@emotion/css'
import * as React from 'react'

import { Track } from '../../AudioPlayer'
import { useBreakpoint } from '../../AudioPlayer.hooks'
import { AudioPlayerContext, AudioPlayerContextProps } from '../../AudioPlayer.utils'
import { useTrackItemStyles } from './TrackItem.styles'

interface TrackProps {
  track: Track
  onClick?: () => void
  className?: string
}

export const TrackItem: React.FunctionComponent<TrackProps> = ({ track, onClick, className }) => {
  const { mode } = React.useContext<AudioPlayerContextProps>(AudioPlayerContext)
  const breakpoint = useBreakpoint()
  const styles = useTrackItemStyles(breakpoint.value)
  return (
    <div onClick={onClick} className={cx(styles.container, { [styles.compact]: mode === 'compact' }, className)}>
      <img alt={track.title} src={track.img} className={styles.image} />
      <div className={styles.text}>
        <div className={cx(styles.title, styles.ellipsis(1))}>{track.title}</div>
        <div className={cx(styles.artist, styles.ellipsis(1))}>{!!track?.artist ? track.artist : 'Unknown'}</div>
      </div>
    </div>
  )
}
