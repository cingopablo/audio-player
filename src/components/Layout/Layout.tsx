import { AnimatePresence } from 'framer-motion'
import * as React from 'react'

import { ThemeProvider1990 } from '../Theme'

const Layout: React.FunctionComponent = ({ children }) => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => setIsMounted(true), [])

  return (
    <ThemeProvider1990>
      <AnimatePresence>
        {isMounted && (
          <React.Fragment>
            <main>{children}</main>
          </React.Fragment>
        )}
      </AnimatePresence>
    </ThemeProvider1990>
  )
}

export { Layout as default }
