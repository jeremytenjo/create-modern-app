import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'
import useFirebaseFunction from '@useweb/use-firebase-function'

import ReactJson from '../../ReactJson/ReactJson'

type Props = { functionName: string; payload?: any }

export default function FirebaseFunctionDashboard({ functionName, payload }: Props) {
  const func = useFirebaseFunction({
    name: functionName,
  })

  return (
    <Box sx={{ p: 2 }}>
      <Button
        onClick={() => func.exec(payload ? { data: payload } : undefined)}
        sx={{ mb: 2 }}
        variant='contained'
      >
        Execute
      </Button>

      {func.loading && <LinearProgress sx={{ width: '100%' }} />}

      {func.error && <p>{func.error.toString()}</p>}

      {func.result && <ReactJson json={func.result} />}
    </Box>
  )
}
