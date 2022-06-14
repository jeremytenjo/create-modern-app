import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'

import ReactJson from '../ReactJson/ReactJson'

type FetchingUiProps = {
  onClick: any
  loading: any
  error: any
  result: any
}

export default function FetchingUi({ onClick, loading, error, result }: FetchingUiProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Button
        onClick={onClick}
        sx={{ mb: 2, color: 'black.main', backgroundColor: 'white.main' }}
        variant='contained'
      >
        Execute
      </Button>

      {loading && <LinearProgress sx={{ width: '100%', mb: 2 }} />}

      {error && <p>{error.toString()}</p>}

      {result && (
        <>
          <p>Result:</p>
          {typeof result === 'object' ? <ReactJson json={result} /> : result}
        </>
      )}
    </Box>
  )
}
