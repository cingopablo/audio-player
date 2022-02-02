import { AnimatePresence } from 'framer-motion'
import * as React from 'react'

import { ThemeProviderAudio } from '../Theme'

const Layout: React.FunctionComponent = ({ children }) => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => setIsMounted(true), [])

  return (
    <ThemeProviderAudio>
      <AnimatePresence>
        {isMounted && (
          <React.Fragment>
            <main>{children}</main>
          </React.Fragment>
        )}
      </AnimatePresence>
    </ThemeProviderAudio>
  )
}

export { Layout as default }
