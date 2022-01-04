import * as React from 'react'

import { theme } from './AudioPlayer.styles'

// @ts-ignore
export const PlayIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = React.forwardRef((props, ref) => {
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      width={'48'}
      height={'48'}
      fill={'none'}
      viewBox={'0 0 24 24'}
      {...props}
      ref={ref}>
      <path
        fill={theme.palette.light.icon}
        d={'M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z'}
      />
      <path
        fill={theme.palette.light.icon}
        d={
          'M9 7.99992V15.9999C9 16.3899 9.40974 16.6299 9.74953 16.4399L16.7452 12.4399C17.0849 12.2499 17.0849 11.7599 16.7452 11.5699L9.74953 7.56992C9.40974 7.37992 9 7.61992 9 7.99992Z'
        }
      />
      <path
        strokeLinejoin={'round'}
        strokeLinecap={'round'}
        strokeWidth={'1'}
        stroke={'white'}
        d={
          'M9 7.99992V15.9999C9 16.3899 9.40974 16.6299 9.74953 16.4399L16.7452 12.4399C17.0849 12.2499 17.0849 11.7599 16.7452 11.5699L9.74953 7.56992C9.40974 7.37992 9 7.61992 9 7.99992Z'
        }
      />
    </svg>
  )
})

// @ts-ignore
export const PauseIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = React.forwardRef((props, ref) => {
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      width={'48'}
      height={'48'}
      fill={'none'}
      viewBox={'0 0 24 24'}
      {...props}
      ref={ref}>
      <path
        fill={theme.palette.light.icon}
        d={'M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z'}
      />
      <path
        strokeLinejoin={'round'}
        strokeLinecap={'round'}
        strokeMiterlimit={'10'}
        strokeWidth={'1'}
        stroke={'white'}
        d={'M9 16V8'}
      />
      <path
        strokeLinejoin={'round'}
        strokeLinecap={'round'}
        strokeMiterlimit={'10'}
        strokeWidth={'1'}
        stroke={'white'}
        d={'M15 16V8'}
      />
    </svg>
  )
})

// @ts-ignore
export const StepBackwardIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = React.forwardRef(
  (props, ref) => {
    return (
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        width={'24'}
        height={'24'}
        fill={'none'}
        viewBox={'0 0 24 24'}
        {...props}
        ref={ref}>
        <path fill={theme.palette.light.icon} d={'M10 12L18 6V18L10 12Z'} clipRule={'evenodd'} fillRule={'evenodd'} />
        <path
          fill={theme.palette.light.icon}
          d={'M8 18C9.1 18 10 17.1 10 16V8C10 6.9 9.1 6 8 6C6.9 6 6 6.9 6 8V16C6 17.1 6.9 18 8 18Z'}
        />
      </svg>
    )
  }
)

// @ts-ignore
export const StepForwardIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = React.forwardRef(
  (props, ref) => {
    return (
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        width={'24'}
        height={'24'}
        fill={'none'}
        viewBox={'0 0 24 24'}
        {...props}
        ref={ref}>
        <path fill={theme.palette.light.icon} d={'M14 12L6 6V18L14 12Z'} clipRule={'evenodd'} fillRule={'evenodd'} />
        <path
          fill={theme.palette.light.icon}
          d={'M16 18C14.9 18 14 17.1 14 16V8C14 6.9 14.9 6 16 6C17.1 6 18 6.9 18 8V16C18 17.1 17.1 18 16 18Z'}
        />
      </svg>
    )
  }
)

// @ts-ignore
export const ShuffleIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = React.forwardRef((props, ref) => {
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      width={'24'}
      height={'24'}
      fill={'none'}
      viewBox={'0 0 24 24'}
      {...props}
      ref={ref}>
      <path
        fill={theme.palette.light.icon}
        d={
          'M1 7C1 6.44772 1.44772 6 2 6H5C8.31228 6 11 8.68772 11 12C11 15.3123 8.31228 18 5 18H2C1.44772 18 1 17.5523 1 17C1 16.4477 1.44772 16 2 16H5C7.20772 16 9 14.2077 9 12C9 9.79228 7.20772 8 5 8H2C1.44772 8 1 7.55228 1 7Z'
        }
        clipRule={'evenodd'}
        fillRule={'evenodd'}
      />
      <path
        fill={theme.palette.light.icon}
        d={
          'M15 8C12.7923 8 11 9.79228 11 12C11 14.2077 12.7923 16 15 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H15C11.6877 18 9 15.3123 9 12C9 8.68772 11.6877 6 15 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H15Z'
        }
        clipRule={'evenodd'}
        fillRule={'evenodd'}
      />
      <path
        fill={theme.palette.light.icon}
        d={'M18 3.9458L22.8868 7.00005L18 10.0543V3.9458Z'}
        clipRule={'evenodd'}
        fillRule={'evenodd'}
      />
      <path
        fill={theme.palette.light.icon}
        d={'M18 13.9458L22.8868 17L18 20.0543V13.9458Z'}
        clipRule={'evenodd'}
        fillRule={'evenodd'}
      />
    </svg>
  )
})

// @ts-ignore
export const LoopIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = React.forwardRef((props, ref) => {
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      width={'24'}
      height={'24'}
      fill={'none'}
      viewBox={'0 0 24 24'}
      {...props}
      ref={ref}>
      <path
        fill={theme.palette.light.icon}
        d={
          'M6.5 8.5C4.56228 8.5 3 10.0623 3 12C3 13.9377 4.56228 15.5 6.5 15.5C7.60657 15.5 8.58182 14.9958 9.21765 14.1972C9.56164 13.7651 10.1908 13.6937 10.6228 14.0377C11.0549 14.3816 11.1263 15.0108 10.7823 15.4428C9.77818 16.7042 8.23343 17.5 6.5 17.5C3.45772 17.5 1 15.0423 1 12C1 8.95772 3.45772 6.5 6.5 6.5C7.61983 6.5 8.73279 6.84015 9.65711 7.49333L9.08 8.31L9.65549 7.49219C10.5035 8.08891 11.0754 8.93195 11.5331 9.60653C11.6116 9.72218 11.6867 9.83288 11.7592 9.93654C12.1057 10.4315 12.4529 10.9176 12.8115 11.4157C13.1729 11.9176 13.5257 12.4115 13.8792 12.9165C13.9799 13.0604 14.0739 13.1972 14.1633 13.3274C14.6281 14.0045 14.9699 14.5023 15.4955 14.8722L15.4971 14.8733C16.0728 15.2801 16.7798 15.5 17.5 15.5C19.4377 15.5 21 13.9377 21 12C21 10.0623 19.4377 8.5 17.5 8.5C16.3934 8.5 15.4182 9.00417 14.7823 9.80284C14.4384 10.2349 13.8092 10.3063 13.3772 9.96235C12.9451 9.61836 12.8737 8.98924 13.2177 8.55716C14.2218 7.29583 15.7666 6.5 17.5 6.5C20.5423 6.5 23 8.95772 23 12C23 15.0423 20.5423 17.5 17.5 17.5C16.3802 17.5 15.2672 17.1599 14.3429 16.5067C13.4958 15.91 12.9243 15.0676 12.4669 14.3935C12.3884 14.2778 12.3133 14.1671 12.2408 14.0635C11.8943 13.5685 11.5471 13.0824 11.1885 12.5843C10.8271 12.0824 10.4743 11.5885 10.1208 11.0835C10.0201 10.9396 9.92612 10.8028 9.83672 10.6726C9.37188 9.9955 9.03007 9.49765 8.50451 9.12781L8.50289 9.12667C7.92721 8.71985 7.22017 8.5 6.5 8.5Z'
        }
        clipRule={'evenodd'}
        fillRule={'evenodd'}
      />
    </svg>
  )
})
