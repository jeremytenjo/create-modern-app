import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'
import { type UseAsyncReturn } from '@useweb/use-async'

import Text from '../Text/Text'

export type AsyncResultProps = {
  asyncFunction: UseAsyncReturn
  successMessage: string
  triggerButtonText: string
  functionPayload: any
}

export default function AsyncResult({
  asyncFunction,
  successMessage,
  triggerButtonText,
  functionPayload = {},
}: AsyncResultProps) {
  return (
    <Box>
      <Button
        variant='contained'
        sx={{ my: 4 }}
        onClick={() => asyncFunction.exec(functionPayload)}
      >
        {triggerButtonText}
      </Button>

      <Text text='Result:' sx={{ mb: 2 }} />

      {asyncFunction.result && <Text text={successMessage} sx={{ color: 'green' }} />}
      {asyncFunction.loading && <LinearProgress />}
      {asyncFunction.error && (
        <Box sx={{ color: 'red' }}>{asyncFunction.error.toString()}</Box>
      )}
    </Box>
  )
}
