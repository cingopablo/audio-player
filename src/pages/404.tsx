import * as React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/SEO'

const NotFoundPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title={'404: Not found'} />
  </Layout>
)

export { NotFoundPage as default }
