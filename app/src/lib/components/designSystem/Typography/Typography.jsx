import React from 'react'
import Box from '@mui/material/Box'

import Text from '../../Text/Text'

export default function DSTypography({ variantNames = [] }) {
  const text = 'The quick brown fox jumps over the lazy dog.'

  return (
    <Box sx={{ padding: '10px' }}>
      {variantNames.map((variant) => (
        <Box key={variant} sx={{ padding: '10px' }}>
          <Text sx={{ marginBottom: '10px', color: 'grey.main' }} text={variant} />
          <Text variant={variant} text={text} />
        </Box>
      ))}
    </Box>
  )
}
