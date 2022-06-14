import React, { useRef } from 'react'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import { useFormContext } from 'react-hook-form'

import IconxSmall from '../../../icons/IconxSmall'

type Props = {
  name: string
  placeholder?: string
  wrapperSx?: object
  id?: string
  inputProps?: object
}

export default function TextField({
  name,
  wrapperSx = {},
  inputProps = {},
  placeholder = '',
  id,
}: Props) {
  const inputRef = useRef<any>(null)
  const { register, setValue } = useFormContext()
  const { ref, ...restRegister } = register(name)

  const clearInput = () => {
    setValue(name, '', { shouldValidate: true })
    inputRef.current && inputRef.current.focus()
  }

  return (
    <Box
      id={id}
      sx={{
        display: 'grid',
        backgroundColor: 'white.main',
        padding: '4px',
        width: 'fit-content',
        borderRadius: '9px',
        transition: '0.2s',
        border: '2px solid white',
        gridAutoFlow: 'column',
        gap: 1,
        '&:focus': {
          borderColor: 'primary.main',
        },
        ...wrapperSx,
      }}
    >
      <Box
        component='input'
        placeholder={placeholder}
        {...restRegister}
        ref={(e) => {
          ref(e)
          inputRef.current = e
        }}
        sx={{
          outline: 'none',
          border: 'none',
          fontSize: '16px',
        }}
        {...inputProps}
      />
      <IconButton aria-label='reset' onClick={clearInput}>
        <IconxSmall sx={{ width: '18px', height: '18px' }} />
      </IconButton>
    </Box>
  )
}
