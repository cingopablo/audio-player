import * as React from 'react'

import { VolumeDownIcon, VolumeUpIcon } from '../../AudioPlayer.icons'
import { AudioPlayerContext } from '../../AudioPlayer.utils'
import { useVolumeBarStyles } from './VolumeBar.styles'

export const VolumeBar: React.FunctionComponent = () => {
  const { mode, theme, changeVolume, volumeBarRef, volume } = React.useContext<any>(AudioPlayerContext)
  const styles = useVolumeBarStyles(theme, mode)
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
