import { cx } from '@emotion/css'
import * as React from 'react'

import { useDetectTheme } from '../../../Theme/useDetectTheme'
import { Track } from '../../AudioPlayer'
import { AudioPlayerContext } from '../../AudioPlayer.utils'
import { TrackItem } from '../TrackItem/TrackItem'
import { useTracklistStyles } from './Tracklist.styles'

interface TracklistProps {
  src: Track[]
}

export const Tracklist: React.FunctionComponent<TracklistProps> = ({ src }) => {
  const { mode, theme } = React.useContext<any>(AudioPlayerContext)
  const systemTheme = useDetectTheme()
  const _theme = React.useMemo(() => theme ?? systemTheme, [systemTheme])
  const styles = useTracklistStyles(_theme, mode)
  return (
    <div className={cx(styles.container, { [styles.compact]: mode === 'compact' })}>
      {src.map(track => (
        <TrackItem key={track.title} track={track} />
      ))}
    </div>
  )
}
