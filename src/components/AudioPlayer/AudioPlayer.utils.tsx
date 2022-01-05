import * as React from 'react'

import { Track } from './AudioPlayer'

export const AudioPlayerContext = React.createContext<any>(undefined)

export const calculateTime = (secs: number) => {
  const minutes = Math.floor(secs / 60)
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  const seconds = Math.floor(secs % 60)
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${returnedMinutes}:${returnedSeconds}`
}

export const useAudioPlayer = (src: Track[]) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [duration, setDuration] = React.useState(0)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [isShuffle, setIsShuffle] = React.useState(false)
  const [isLoop, setIsLoop] = React.useState(false)
  const [currentTrack, setCurrentTrack] = React.useState(0)
  const [volume, setVolume] = React.useState(0.4)

  const audioRef = React.useRef<HTMLAudioElement>(null)
  const progressBarRef = React.useRef<HTMLInputElement>(null)
  const volumeBarRef = React.useRef<HTMLInputElement>(null)
  const animationRef = React.useRef(0)

  React.useEffect(() => {
    if (!audioRef.current) return
    changePlayerVolume(volume)
    audioRef.current.volume = volume
  }, [volume])

  const shuffleTracks = React.useCallback(
    (tracks: Track[]) => {
      if (!isShuffle) return tracks
      return tracks
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    },
    [isShuffle]
  )

  const track = React.useMemo(() => shuffleTracks(src)[currentTrack], [currentTrack])

  const onLoadedMetadata = (ev: any) => {
    if (!progressBarRef.current) return
    const seconds = Math.floor(ev.target.duration)
    setDuration(seconds)
    progressBarRef.current.max = `${seconds}`
  }

  const handleEnded = async () => {
    if (currentTime === 0 || !progressBarRef.current) return
    changeTime(0)
    if (src.length === 1) {
      setIsPlaying(false)
    } else {
      await changeTrack('next')
    }
  }

  const play = async () => {
    if (!audioRef.current) return
    await audioRef.current.load()
    if (audioRef.current.paused) {
      changeTime(currentTime)
      await audioRef.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioRef.current.pause()
    }
  }

  const handlePlay = React.useCallback(async () => {
    if (!audioRef.current) return
    setIsPlaying(last => !last)
    if (!isPlaying && audioRef.current.paused) {
      await play()
    } else {
      audioRef.current?.pause()
      cancelAnimationFrame(animationRef!.current!)
    }
  }, [currentTrack, currentTime])

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

  const changePlayerVolume = (vol: number) => {
    volumeBarRef.current!.style.setProperty('--volume-width', `${vol * 100}%`)
    setVolume(vol)
  }

  const changeTrack = async (where: 'back' | 'next') => {
    if (!progressBarRef.current || !audioRef.current) return
    if (where === 'back') {
      if (currentTime > 0) {
        changeTime(0)
      } else {
        setCurrentTrack(last => (currentTrack > 1 ? last - 1 : 0))
      }
    } else {
      setCurrentTrack(last => (currentTrack < src.length - 1 ? last + 1 : 0))
    }
    if (isPlaying) {
      await play()
    }
    changeTime(0)
  }

  const changeTime = (time: number) => {
    if (!progressBarRef.current) return
    progressBarRef.current.value = time.toString()
    changeRange()
  }

  const toggleShuffle = () => setIsShuffle(last => !last)
  const toggleLoop = () => setIsLoop(last => !last)

  const changeVolume = (event: any) => {
    if (!volumeBarRef.current || !audioRef.current) return
    audioRef.current.volume = parseInt(volumeBarRef.current.value)
    changePlayerVolume(event.target.value)
  }

  return {
    audioRef,
    changeRange,
    changeTrack,
    changeVolume,
    currentTime,
    duration,
    handleEnded,
    handlePlay,
    isLoop,
    isPlaying,
    isShuffle,
    onLoadedMetadata,
    progressBarRef,
    toggleLoop,
    toggleShuffle,
    track,
    volume,
    volumeBarRef,
  }
}