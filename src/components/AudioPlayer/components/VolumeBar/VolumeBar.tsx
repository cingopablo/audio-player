import * as React from 'react'

import { VolumeDownIcon, VolumeUpIcon } from '../../AudioPlayer.icons'
import { AudioPlayerContext, AudioPlayerContextProps } from '../../AudioPlayer.utils'
import { useVolumeBarStyles } from './VolumeBar.styles'

export const VolumeBar: React.FunctionComponent = () => {
  const { changeVolume, volumeBarRef, volume } = React.useContext<AudioPlayerContextProps>(AudioPlayerContext)
  const styles = useVolumeBarStyles()
  return (
    <div className={styles.container}>
      <VolumeDownIcon />
      <input
        className={styles.volumeBar}
        max={1}
        min={0}
        onChange={changeVolume}
        ref={volumeBarRef}
        step={0.1}
        type={'range'}
        value={volume}
      />
      <VolumeUpIcon />
    </div>
  )
}
