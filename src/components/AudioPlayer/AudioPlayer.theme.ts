export type SelectedTheme = {
  primary: string
  background: string
  icon: string
  border: string
  text: {
    primary: string
    secondary: string
  }
  progressBar: {
    background: string
    hover: string
  }
}

interface AudioPlayerTheme {
  palette: {
    light: SelectedTheme
    dark: SelectedTheme
  }
}

export const theme: AudioPlayerTheme = {
  palette: {
    light: {
      primary: '#9C5AF2',
      background: '#FFFFFF',
      icon: '#9C5AF2',
      border: 'rgba(231,231,231,0.8)',
      text: {
        primary: '#000000',
        secondary: '#4e4e4e',
      },
      progressBar: {
        background: '#b3b3b3',
        hover: 'rgba(179, 179, 179, 0.2)',
      },
    },
    dark: {
      primary: '#9C5AF2',
      background: '#414040',
      icon: '#FFFFFF',
      border: 'rgba(231,231,231,0.8)',
      text: {
        primary: '#FFFFFF',
        secondary: '#a4a4a4',
      },
      progressBar: {
        background: '#b3b3b3',
        hover: 'rgba(179, 179, 179, 0.2)',
      },
    },
  },
}
