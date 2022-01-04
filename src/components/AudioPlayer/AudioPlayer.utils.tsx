import * as React from 'react'

export const calculateTime = (secs: number) => {
  const minutes = Math.floor(secs / 60)
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  const seconds = Math.floor(secs % 60)
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${returnedMinutes}:${returnedSeconds}`
}

export const setProgressBar = (ref: React.RefObject<HTMLInputElement>, value: number) => {
  if (ref.current) {
    ref.current.value = value.toString()
  }
}
