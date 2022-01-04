import { cx } from '@emotion/css'
import * as React from 'react'

import {
  LoopIcon,
  PauseIcon,
  PlayIcon,
  ShuffleIcon,
  StepBackwardIcon,
  StepForwardIcon,
  VolumeDownIcon,
  VolumeUpIcon,
} from './AudioPlayer.icons'
import { styles } from './AudioPlayer.styles'

interface MusicPlayerProps {
  src: string | string[]
  mode?: 'compact' | 'default' | 'big'
}

const calculateTime = (secs: number) => {
  const minutes = Math.floor(secs / 60)
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  const seconds = Math.floor(secs % 60)
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${returnedMinutes}:${returnedSeconds}`
}

/* TODO:
 *       - Add disabled buttons & style
 *       - Add multitracks
 *       - Add shuffle
 *       - Box style
 *       - IMG style
 *       - Compact, Default & BIG mode
 * */

export const AudioPlayer: React.FunctionComponent<MusicPlayerProps> = ({ src, mode = 'default' }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [duration, setDuration] = React.useState(0)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [isShuffle, setIsShuffle] = React.useState(false)
  const [isLoop, setIsLoop] = React.useState(false)
  const [currentTrack, setCurrentTrack] = React.useState(0)

  const audioRef = React.useRef<HTMLAudioElement>(null)
  const progressBarRef = React.useRef<HTMLInputElement>(null)
  const animationRef = React.useRef(0)

  // React.useEffect(() => {
  //   console.log(`Current track: ${currentTrack}`)
  // })

  const audio = React.useMemo(() => {
    if (typeof src === 'string') return src
    return src[currentTrack]
  }, [currentTrack])

  const onLoadedMetadata = (ev: any) => {
    const seconds = Math.floor(ev.target.duration)
    setDuration(seconds)
    if (progressBarRef.current) {
      progressBarRef.current.max = `${seconds}`
    }
  }

  const handleEnded = () => {
    if (currentTime === 0 || !progressBarRef.current) return
    progressBarRef.current.value = '0'
    changeRange()
    setIsPlaying(false)
  }

  const handlePlay = React.useCallback(async () => {
    if (!audioRef.current) return
    setIsPlaying(last => !last)
    if (!isPlaying && audioRef.current.paused) {
      await audioRef.current?.play()
      animationRef.current = window.requestAnimationFrame(whilePlaying)
    } else {
      audioRef.current?.pause()
      cancelAnimationFrame(animationRef!.current!)
    }
  }, [currentTrack])

  const whilePlaying = () => {
    if (!progressBarRef.current) return
    progressBarRef.current.value = `${audioRef!.current!.currentTime}`
    changePlayerCurrentTime()
    animationRef.current = window.requestAnimationFrame(whilePlaying)
  }

  const changeRange = () => {
    if (!audioRef.current || !progressBarRef.current) return
    audioRef.current.currentTime = parseInt(progressBarRef.current.value)
    changePlayerCurrentTime()
  }

  const changePlayerCurrentTime = () => {
    const currentTime = parseInt(progressBarRef.current!.value)
    progressBarRef.current!.style.setProperty('--seek-before-width', `${(currentTime / duration) * 100}%`)
    setCurrentTime(currentTime)
  }

  const changeAudio = async (where: 'back' | 'next') => {
    if (!progressBarRef.current || !audioRef.current) return
    setIsPlaying(false)
    if (where === 'back') {
      if (currentTime > 0) {
        progressBarRef.current.value = '0'
        changeRange()
      } else {
        setCurrentTrack(last => (currentTrack > 1 ? last - 1 : 0))
      }
    } else {
      setCurrentTrack(last => (currentTrack < src.length - 1 ? last + 1 : 0))
    }
    progressBarRef.current.value = '0'
    changeRange()
  }

  return (
    <div className={styles.audioContainer}>
      <audio
        ref={audioRef}
        src={audio}
        preload={'metadata'}
        onLoadedMetadata={onLoadedMetadata}
        loop={isLoop}
        onEnded={handleEnded}
        // controls
      />

      {/* Progress bar */}
      <input
        ref={progressBarRef}
        type={'range'}
        defaultValue={0}
        onChange={changeRange}
        className={styles.progressBar}
      />
      <div className={cx(styles.container, styles.timestampsContainer)}>
        {/* Current time */}
        <div>{calculateTime(currentTime)}</div>
        {/* Duration time */}
        <div>{duration && !isNaN(duration) ? calculateTime(duration) : '00:00'}</div>
      </div>

      <div className={styles.container}>hola</div>

      <div className={styles.container}>
        {/* Shuffle */}
        <button
          onClick={() => setIsShuffle(last => !last)}
          className={cx(styles.button, styles.selectedButton(isShuffle))}>
          <ShuffleIcon />
        </button>
        {/* Back */}
        <button className={cx(styles.button)} onClick={() => changeAudio('back')}>
          <StepBackwardIcon />
        </button>
        {/* Play */}
        <button onClick={handlePlay} className={cx(styles.button)}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        {/* Next */}
        <button className={cx(styles.button)} onClick={() => changeAudio('next')}>
          <StepForwardIcon />
        </button>
        {/* Loop */}
        <button onClick={() => setIsLoop(last => !last)} className={cx(styles.button, styles.selectedButton(isLoop))}>
          <LoopIcon />
        </button>
      </div>

      <div className={styles.container}>
        {/* Volume down */}
        <button className={cx(styles.button)}>
          <VolumeDownIcon />
        </button>

        <input type={'range'} defaultValue={20} className={styles.progressBar} />
        {/* Volume up */}
        <button className={cx(styles.button)}>
          <VolumeUpIcon />
        </button>
      </div>
    </div>
  )
}
