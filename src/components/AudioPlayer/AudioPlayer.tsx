import { cx } from '@emotion/css'
import * as React from 'react'

import { LoopIcon, PauseIcon, PlayIcon, ShuffleIcon, StepBackwardIcon, StepForwardIcon } from './AudioPlayer.icons'
import { styles } from './AudioPlayer.styles'

interface MusicPlayerProps {
  src: string | string[]
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

export const AudioPlayer: React.FunctionComponent<MusicPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [duration, setDuration] = React.useState(0)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [isShuffle, setIsShuffle] = React.useState(false)
  const [isLoop, setIsLoop] = React.useState(false)
  const [currentTrack, setCurrentTrack] = React.useState(0)

  const audioRef = React.useRef<HTMLAudioElement>(null)
  const progressBarRef = React.useRef<HTMLInputElement>(null)
  const animationRef = React.useRef(0)

  const audio = React.useMemo(() => {
    console.log('src: ', src)
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
    if (currentTime !== 0 && progressBarRef.current) {
      progressBarRef.current.value = '0'
      changeRange()
      setIsPlaying(false)
    }
  }

  const handlePlay = async () => {
    await setIsPlaying(last => !last)
    if (!isPlaying) {
      await audioRef.current?.play()
      animationRef.current = window.requestAnimationFrame(whilePlaying)
    } else {
      audioRef.current?.pause()
      cancelAnimationFrame(animationRef!.current!)
    }
  }

  const whilePlaying = () => {
    if (progressBarRef.current) {
      progressBarRef.current.value = `${audioRef!.current!.currentTime}`
    }
    changePlayerCurrentTime()
    animationRef.current = window.requestAnimationFrame(whilePlaying)
  }

  const changeRange = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = parseInt(progressBarRef.current.value)
    }
    changePlayerCurrentTime()
  }

  const changePlayerCurrentTime = () => {
    const currentTime = parseInt(progressBarRef.current!.value)
    progressBarRef.current!.style.setProperty('--seek-before-width', `${(currentTime / duration) * 100}%`)
    setCurrentTime(currentTime)
  }

  const handleGoBack = () => {
    if (currentTime !== 0 && progressBarRef.current) {
      progressBarRef.current.value = '0'
      changeRange()
    }
  }

  return (
    <div>
      <audio
        ref={audioRef}
        src={audio}
        preload={'metadata'}
        onLoadedMetadata={onLoadedMetadata}
        loop={isLoop}
        onEnded={handleEnded}
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

      <div className={styles.container}>
        {/* Shuffle */}
        <button
          onClick={() => setIsShuffle(last => !last)}
          className={cx(styles.button, styles.selectedButton(isShuffle))}>
          <ShuffleIcon />
        </button>
        {/* Back */}
        <button className={cx(styles.button)} onClick={handleGoBack}>
          <StepBackwardIcon />
        </button>
        {/* Play */}
        <button onClick={handlePlay} className={cx(styles.button)}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        {/* Next */}
        <button className={cx(styles.button)}>
          <StepForwardIcon />
        </button>
        {/* Loop */}
        <button onClick={() => setIsLoop(last => !last)} className={cx(styles.button, styles.selectedButton(isLoop))}>
          <LoopIcon />
        </button>
      </div>
    </div>
  )
}
