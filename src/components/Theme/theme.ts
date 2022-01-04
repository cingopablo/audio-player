import {
  createStyles as originalCreateStyles,
  NamedStyles,
  Style,
  StyleProps,
  Styles,
} from '../../theming/createStyles'
import { createTheme } from '../../theming/theme/theme'
import { useTheme as useGenericTheme } from '../../theming/ThemeProvider'

const typography = {}

const transition = {
  hover: {
    in: '150ms ease 0ms',
    out: '450ms ease 0ms',
  },
  move: {
    in: '250ms cubic-bezier(0.75, 0, 1, 1) 0ms',
    out: '500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0ms',
  },
}

const baseColors = {
  white: '#FFFFFF',
  alice_blue: '#F2F6FF',
  grey: '#B8B8B8',
  silver: '#88929E',
  oxford_blue: '#0C0425',
  midnight_blue: '#140740',
  charleston_green: '#232526',
  pink: '#E2596A',
  amaranth: '#DD3C50',
  crimson: '#D2253A',
  persian_red: '#D04039',
  apple_red: '#C7372F',
  golden_gate_red: '#B6322B',
  malachite: '#33D74B',
  lime_green: '#33D74B',
  pastel_green: '#25BB3C',
  orange_peel: '#FFA21F',
  yellow_orange: '#FF9500',
  yellow_orange_darker: '#F58F00',
}

const commonColors = {
  white: baseColors.white,
  black: baseColors.oxford_blue,
  primary_light: baseColors.pink,
  primary: baseColors.amaranth,
  primary_dark: baseColors.crimson,
  success_light: baseColors.malachite,
  success: baseColors.lime_green,
  success_dark: baseColors.pastel_green,
  warning_light: baseColors.orange_peel,
  warning: baseColors.yellow_orange,
  warning_dark: baseColors.yellow_orange_darker,
  danger_light: baseColors.persian_red,
  danger: baseColors.apple_red,
  danger_dark: baseColors.golden_gate_red,
}

export const paletteDark = {
  ...commonColors,
  text: {
    primary: baseColors.white,
    secondary: baseColors.grey,
    tertiary: baseColors.silver,
  },
  background: baseColors.alice_blue,
}

export const paletteLight = {
  ...commonColors,
  text: {
    primary: baseColors.oxford_blue,
    secondary: baseColors.midnight_blue,
    tertiary: baseColors.silver,
  },
  background: baseColors.alice_blue,
}

export const theme = createTheme({
  typography,
  transition,
  palette: paletteLight,
})

export type Theme = typeof theme

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createStyles<P extends undefined, S extends Styles<S> = Record<string, Style>>(
  styles: S | ((theme: Theme, props: undefined) => S)
): {
  useStyles: () => NamedStyles<S>
}
export function createStyles<P extends StyleProps, S extends Styles<S> = Record<string, Style>>(
  styles: S | ((theme: Theme, props: P) => S)
): {
  useStyles: (props: P) => NamedStyles<S>
}
export function createStyles<P extends StyleProps, S extends Styles<S> = Record<string, Style>>(
  styles: S | ((theme: Theme, props: P) => S)
) {
  return originalCreateStyles<Theme, P, S>(styles)
}

export const useTheme = () => {
  return useGenericTheme() as Theme
}
