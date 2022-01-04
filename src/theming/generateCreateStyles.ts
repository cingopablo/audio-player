import { createStyles, NamedStyles, Style, StyleProps, Styles } from './createStyles'
import { DefaultTheme, ResponsiveTheme, UnpackedTheme } from './theme/theme'

export function generateCreateStyles<T extends DefaultTheme | ResponsiveTheme<DefaultTheme>>() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function createStylesWithTheme<P extends undefined, S extends Styles<S> = Record<string, Style>>(
    styles: S | ((theme: UnpackedTheme<T>, props: undefined) => S)
  ): {
    useStyles: () => NamedStyles<S>
  }
  function createStylesWithTheme<P extends StyleProps, S extends Styles<S> = Record<string, Style>>(
    styles: S | ((theme: UnpackedTheme<T>, props: P) => S)
  ): {
    useStyles: (props: P) => NamedStyles<S>
  }
  function createStylesWithTheme<P extends StyleProps, S extends Styles<S> = Record<string, Style>>(
    styles: S | ((theme: UnpackedTheme<T>, props: P) => S)
  ) {
    return createStyles<UnpackedTheme<T>, P, S>(styles)
  }
  return createStylesWithTheme
}
