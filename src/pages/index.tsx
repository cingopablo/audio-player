import { css } from '@emotion/css'
import * as React from 'react'

import { AudioPlayer, Track } from '../components/AudioPlayer/AudioPlayer'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/SEO'

const src: Track[] = [
  {
    src: 'https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3',
    title: 'Podcast',
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
]

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO
      title={'Nightlife events & specialists'}
      description={
        'Discover the best events and parties at the top venues of New York. Get your tickets, join our guest lists and book tables, bottle service, brunchs, dinners and more.'
      }
    />
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-content: center;
      `}>
      {/*<AudioPlayer src={src} theme={'light'} />*/}
      <AudioPlayer src={src} />
      <AudioPlayer src={src} mode={'compact'} theme={'light'} />
    </div>
  </Layout>
)

export { IndexPage as default }
