import { css } from '@emotion/css'
import * as React from 'react'

import { AudioPlayer } from '../components/AudioPlayer/AudioPlayer'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/SEO'

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
        height: 100vh;
        display: grid;
        justify-content: center;
        align-content: center;
      `}>
      <AudioPlayer
        src={[
          'https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3',
          'https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3',
          'https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3',
        ]}
      />
    </div>
  </Layout>
)

export { IndexPage as default }
