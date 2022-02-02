import { css } from '@emotion/css'
import * as React from 'react'

import { AudioPlayer, Mode, Track } from '../components/AudioPlayer/AudioPlayer'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/SEO'
import { ThemeMode } from '../components/Theme/useDetectTheme'

const src: Track[] = [
  {
    src: 'https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3',
    title: 'Podcast with a really long name, Idk why it is like that. Damn, can you be longer?',
    artist: 'Ron Swanson',
    img: 'https://i.imgur.com/n3qMpyc.jpeg',
  },
  {
    src: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-903414-kuDvkQ84EK.mp3',
    title: 'Song #1',
    img: 'https://i.imgur.com/SclUuS1.jpeg',
  },
  {
    src: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-896837-Ph03ujvClT.mp3',
    title: 'Song #2',
    img: 'https://i.imgur.com/l3ogBgn.jpeg',
  },
  {
    src: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-896837-Ph03ujvClT.mp3',
    title: 'Song #3',
    img: 'https://i.imgur.com/l3ogBgn.jpeg',
  },
  {
    src: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-896837-Ph03ujvClT.mp3',
    title: 'Song #4',
    img: 'https://i.imgur.com/l3ogBgn.jpeg',
  },
  {
    src: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-896837-Ph03ujvClT.mp3',
    title: 'Song #5',
    img: 'https://i.imgur.com/l3ogBgn.jpeg',
  },
  {
    src: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-896837-Ph03ujvClT.mp3',
    title: 'Song #6',
    img: 'https://i.imgur.com/l3ogBgn.jpeg',
  },
  {
    src: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-896837-Ph03ujvClT.mp3',
    title: 'Song #7',
    img: 'https://i.imgur.com/l3ogBgn.jpeg',
  },
  {
    src: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-896837-Ph03ujvClT.mp3',
    title: 'Song #8',
    img: 'https://i.imgur.com/l3ogBgn.jpeg',
  },
  {
    src: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-896837-Ph03ujvClT.mp3',
    title: 'Song #9',
    img: 'https://i.imgur.com/l3ogBgn.jpeg',
  },
  {
    src: 'https://dsqqu7oxq6o1v.cloudfront.net/preview-896837-Ph03ujvClT.mp3',
    title: 'Song #10',
    img: 'https://i.imgur.com/l3ogBgn.jpeg',
  },
]

const IndexPage: React.FunctionComponent = () => {
  const [theme, setTheme] = React.useState<ThemeMode>('light')
  const [mode, setMode] = React.useState<Mode>('big')
  const [isLoop, setIsLoop] = React.useState(false)
  const [isShuffle, setIsShuffle] = React.useState(false)
  const [isShowTracklist, setIsShowTracklist] = React.useState(true)
  const [isVolume, setIsVolume] = React.useState(false)

  return (
    <Layout>
      <SEO
        title={'Nightlife events & specialists'}
        description={
          'Discover the best events and parties at the top venues of New York. Get your tickets, join our guest lists and book tables, bottle service, brunchs, dinners and more.'
        }
      />
      <div>
        <p
          className={css`
            font-weight: 600;
          `}>
          Theme selector
        </p>
        <select name={'select'} onChange={event => setTheme(event.target.value as ThemeMode)} value={theme}>
          <option value={'light'}>Light</option>
          <option value={'dark'}>Dark</option>
        </select>
      </div>

      <div>
        <p
          className={css`
            font-weight: 600;
          `}>
          Mode selector
        </p>
        <select name={'select'} onChange={event => setMode(event.target.value as Mode)} value={mode}>
          <option value={'mini'}>Mini</option>
          <option value={'compact'}>Compact</option>
          <option value={'big'}>Big</option>
        </select>
      </div>
      <div>
        <p
          className={css`
            font-weight: 600;
          `}>
          Loop
        </p>
        <input type={'checkbox'} checked={isLoop} onChange={() => setIsLoop(last => !last)} />
      </div>
      <div>
        <p
          className={css`
            font-weight: 600;
          `}>
          Shuffle
        </p>
        <input type={'checkbox'} checked={isShuffle} onChange={() => setIsShuffle(last => !last)} />
      </div>
      <div>
        <p
          className={css`
            font-weight: 600;
          `}>
          Show volume
        </p>
        <input type={'checkbox'} checked={isVolume} onChange={() => setIsVolume(last => !last)} />
      </div>
      <div>
        <p
          className={css`
            font-weight: 600;
          `}>
          Show tracklist
        </p>
        <input type={'checkbox'} checked={isShowTracklist} onChange={() => setIsShowTracklist(last => !last)} />
      </div>

      <div
        className={css`
          display: flex;
          justify-content: center;
          align-content: center;
        `}>
        <AudioPlayer
          loop={isLoop}
          mode={mode}
          shuffle={isShuffle}
          src={src}
          theme={theme}
          showVolume={isVolume}
          showTracklist={isShowTracklist}
        />
      </div>
    </Layout>
  )
}

export { IndexPage as default }
