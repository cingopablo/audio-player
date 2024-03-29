import { cx } from '@emotion/css'
import { usePalette } from 'color-thief-react'
import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ThemeMode, useDetectTheme } from '../Theme/useDetectTheme'
import { useBreakpoint } from './AudioPlayer.hooks'
import { useStyles } from './AudioPlayer.styles'
import { theme as appTheme } from './AudioPlayer.theme'
import { AudioPlayerContext, useAudioPlayer } from './AudioPlayer.utils'
import { PlaybackControls } from './components/PlaybackControls/PlaybackControls'
import { ProgressBar } from './components/ProgressBar/ProgressBar'
import { Tracklist } from './components/Tracklist/Tracklist'
import { VolumeBar } from './components/VolumeBar/VolumeBar'

export type Track = {
  id?: string
  src: string
  img?: string
  title: string
  artist?: string
}

export type Mode = 'mini' | 'compact' | 'big'

interface AudioPlayerProps {
  loop?: boolean
  mode?: Mode
  shuffle?: boolean
  src: Track[]
  showTracklist?: boolean
  showBackground?: boolean
  theme?: ThemeMode
}

/* TODO:
 *       - Check scrollbar
 *       - Cleanup
 * */

export const AudioPlayer: React.FunctionComponent<AudioPlayerProps> = ({
  loop = false,
  mode = 'big',
  shuffle = false,
  src,
  showTracklist = true,
  showBackground = false,
  theme,
}) => {
  const _src = React.useMemo(() => src.map(el => ({ ...el, id: el.id ? el.id : uuidv4() })), [src])
  const value = useAudioPlayer(_src, loop, shuffle, showBackground)

  const { isLoop, isPlaying, handleEnded, audioRef, track, onLoadedMetadata } = value
  const breakpoint = useBreakpoint()
  const [background, setBackground] = React.useState([])

  const { data, loading } = usePalette(
    track.img ?? 'https://live.staticflickr.com/65535/50237066832_72c7290c5c_c.jpg',
    2,
    'hex',
    { crossOrigin: 'anonymous' }
  )

  React.useEffect(() => {
    if (data !== undefined && !loading) {
      setBackground(data)
    }
  }, [data])

  const systemTheme = useDetectTheme()
  const _theme = React.useMemo(
    () => appTheme.palette[showBackground ? 'dark' : theme ?? systemTheme],
    [systemTheme, theme, showBackground]
  )

  const _mode = React.useMemo(() => (mode === 'big' && breakpoint.max('sm') ? 'compact' : mode), [mode, breakpoint])
  const styles = useStyles(_theme, _mode, breakpoint.value)
  const _loop = isLoop ?? loop

  return (
    <AudioPlayerContext.Provider value={{ ...value, theme: _theme, mode: _mode }}>
      <div className={cx(styles.grid(_mode === 'big'), { [styles.background(background)]: showBackground })}>
        {showBackground && <div className={styles.backdropFilter} />}
        <div
          className={cx(styles.container(showBackground), {
            [styles.mini]: _mode === 'mini',
            [styles.compact]: _mode === 'compact',
          })}>
          <audio
            loop={_loop}
            onEnded={handleEnded}
            onLoadedMetadata={onLoadedMetadata}
            preload={'metadata'}
            ref={audioRef}
            src={track.src}
          />
          <img
            alt={track.title}
            className={cx(styles.image, { [styles.imageGrow]: isPlaying && _mode === 'big' })}
            src={track.img}
          />

          <div>
            <div className={styles.text}>
              <div className={cx(styles.title, styles.ellipsis(1))}>{track.title}</div>
              <div
                className={cx(styles.artist(showBackground), styles.ellipsis(1), { [styles.hide]: _mode === 'mini' })}>
                {!!track?.artist ? track.artist : 'Unknown'}
              </div>
            </div>

            <ProgressBar />
          </div>

          <div className={styles.bottomContainer}>
            <PlaybackControls />
            <VolumeBar />
          </div>
        </div>

        {_mode !== 'mini' && showTracklist && <Tracklist src={_src} />}
      </div>
    </AudioPlayerContext.Provider>
  )
}
