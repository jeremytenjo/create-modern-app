import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

/**
 * Returns whether screen is tablet or larger
 */
export default function useIsTabletUp() {
  const theme = useTheme()
  const isTabletUp = useMediaQuery(theme.breakpoints.up('md'))
  return isTabletUp
}
