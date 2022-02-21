import * as React from 'react'

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

export const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = React.useState<Breakpoints>('sm')
  const [windowSize, setWindowSize] = React.useState(window.innerWidth)
  const handleResize = () => setWindowSize(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    if (0 < windowSize && windowSize < 600) {
      setBreakPoint('xs')
    }
    if (600 < windowSize && windowSize < 960) {
      setBreakPoint('sm')
    }
    if (960 < windowSize && windowSize < 1280) {
      setBreakPoint('md')
    }
    if (1280 < windowSize && windowSize < 1920) {
      setBreakPoint('lg')
    }
    if (windowSize >= 1920) {
      setBreakPoint('xl')
    }

    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize])

  const min = (key: Breakpoints) => windowSize >= breakpoints[key]

  const max = (key: Breakpoints) => windowSize < breakpoints[key]
  return {
    value: breakpoint,
    min,
    max,
  }
}
