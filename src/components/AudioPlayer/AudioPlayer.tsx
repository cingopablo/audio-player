import * as React from 'react'

import { ThemeMode, useDetectTheme } from '../Theme/useDetectTheme'
import { useStyles } from './AudioPlayer.styles'
import { AudioPlayerContext, useAudioPlayer } from './AudioPlayer.utils'
import { PlaybackControls } from './components/PlaybackControls/PlaybackControls'
import { ProgressBar } from './components/ProgressBar/ProgressBar'
import { VolumeBar } from './components/VolumeBar/VolumeBar'

export type Track = {
  src: string
  img?: string
  title: string
  artist?: string
}

export type Mode = 'compact' | 'default' | 'big'

interface AudioPlayerProps {
  src: Track[]
  mode?: Mode
  theme?: ThemeMode
}

/* TODO:
 *       - Add disabled buttons & style
 *       - Add multitracks design
 *       - Compact, Default & BIG mode
 * */

export const AudioPlayer: React.FunctionComponent<AudioPlayerProps> = ({ src, theme, mode = 'default' }) => {
  const value = useAudioPlayer(src)

  const { isLoop, handleEnded, audioRef, track, onLoadedMetadata } = value

  const systemTheme = useDetectTheme()
  const _theme = React.useMemo(() => theme ?? systemTheme, [systemTheme])
  const styles = useStyles(_theme, mode)

  return (
    <AudioPlayerContext.Provider value={{ ...value, theme: _theme, mode }}>
      <div className={styles.container}>
        <audio
          loop={isLoop}
          onEnded={handleEnded}
          onLoadedMetadata={onLoadedMetadata}
          preload={'metadata'}
          ref={audioRef}
          src={track.src}
        />
        <img alt={track.title} className={styles.image} src={track.img} />
        <ProgressBar />
        <div className={styles.title}>{track.title}</div>
        <div className={styles.bottomContainer}>
          <PlaybackControls />
          <VolumeBar />
        </div>
      </div>
    </AudioPlayerContext.Provider>
  )
}
