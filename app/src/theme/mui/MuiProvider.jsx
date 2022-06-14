// keep as JSX instead of TSX to prevent `...Button` false positive bug
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import colors from '../tokens/colors'
import { variants as typography } from '../tokens/typography/typography'
import Button from '../../lib/components/Button/mui/Button.mui'
import Alert from '../../lib/components/Alert/mui/Alert.mui'

import CssBaselineOverrides from './CssBaseline/CssBaseline'

export const muiTheme = createTheme({
  palette: colors,
  typography,
  // https://mui.com/customization/theme-components/#global-style-overrides
  components: {
    ...CssBaselineOverrides,
    ...Button,
    ...Alert,
  },
})

export default function MaterialUiThemeProvider({ children }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
