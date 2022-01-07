import { cx } from '@emotion/css'
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

export type Mode = 'mini' | 'compact' | 'default' | 'big'

interface AudioPlayerProps {
  loop?: boolean
  mode?: Mode
  shuffle?: boolean
  src: Track[]
  showVolume?: boolean
  theme?: ThemeMode
}

/* TODO:
 *       - Add disabled buttons & style
 *       - Add multitracks design
 *       - Mini, Compact, Default & BIG mode
 *       - Responsive
 * */

export const AudioPlayer: React.FunctionComponent<AudioPlayerProps> = ({
  loop = false,
  mode = 'default',
  shuffle = false,
  src,
  showVolume = true,
  theme,
}) => {
  const value = useAudioPlayer(src, loop, shuffle)

  const { isLoop, handleEnded, audioRef, track, onLoadedMetadata } = value

  const systemTheme = useDetectTheme()
  const _theme = React.useMemo(() => theme ?? systemTheme, [systemTheme, theme])
  const styles = useStyles(_theme, mode)
  const _loop = isLoop ?? loop

  return (
    <AudioPlayerContext.Provider value={{ ...value, theme: _theme, mode, showVolume }}>
      <div className={styles.container}>
        <audio
          loop={_loop}
          onEnded={handleEnded}
          onLoadedMetadata={onLoadedMetadata}
          preload={'metadata'}
          ref={audioRef}
          src={track.src}
        />
        <img alt={track.title} className={styles.image} src={track.img} />

        <div className={styles.text}>
          <div className={cx(styles.title, styles.ellipsis(2))}>{track.title}</div>
          {!!track.artist && (
            <div className={cx(styles.artist, styles.ellipsis(1), { [styles.hide]: mode === 'mini' })}>
              {track.artist}
            </div>
          )}
        </div>

        <ProgressBar />

        <div className={styles.bottomContainer}>
          <PlaybackControls />
          <VolumeBar />
        </div>
      </div>
    </AudioPlayerContext.Provider>
  )
}
