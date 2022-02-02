import * as React from 'react'

import { useDetectTheme } from '../../../Theme/useDetectTheme'
import { Track } from '../../AudioPlayer'
import { AudioPlayerContext } from '../../AudioPlayer.utils'
import { useTrackItemStyles } from './TrackItem.styles'

interface TrackProps {
  track: Track
}

export const TrackItem: React.FunctionComponent<TrackProps> = ({ track }) => {
  const { mode, theme } = React.useContext<any>(AudioPlayerContext)
  const systemTheme = useDetectTheme()
  const _theme = React.useMemo(() => theme ?? systemTheme, [systemTheme])
  const styles = useTrackItemStyles(_theme, mode)
  return <div className={styles.container}>{track.title}</div>
}
