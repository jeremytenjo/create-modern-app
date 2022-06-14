import { useTheme } from '@mui/material/styles'
import useMediaQueryMui from '@mui/material/useMediaQuery'

export type UseMediaQueryProps = {
  type?: 'up' | 'down' | 'only' | 'not' | 'between'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
/**
 * @example
 * const isDesktop = useMediaQuery({ size: 'lg' })
 */
export default function useMediaQuery({ type = 'up', size = 'sm' }: UseMediaQueryProps) {
  const theme = useTheme()
  const matches = useMediaQueryMui(theme.breakpoints[type](size, null as any))

  return { matches, breakpoints: theme.breakpoints }
}
