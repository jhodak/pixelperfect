import type { MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
  primaryColor: 'green',
  primaryShade: 7,
  fontFamily: 'Roboto Slab, serif',
  headings: { fontFamily: 'Roboto Slab, serif', fontWeight: 700 },
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
}
