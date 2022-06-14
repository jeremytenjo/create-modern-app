import React from 'react'
import lightOrDarkColor from '@check-light-or-dark/color'
import Box from '@mui/material/Box'

import * as styles from './styles'

export default function Swatch({ name, color }) {
  const textColor = lightOrDarkColor(color) === 'light' ? 'white' : 'black'

  return (
    <Box sx={styles.wrapper} style={{ background: color }}>
      <Box sx={styles.text}>
        <span style={{ color: textColor }}>{name}</span>
        <span style={{ color: textColor }}>{color}</span>
      </Box>
    </Box>
  )
}
