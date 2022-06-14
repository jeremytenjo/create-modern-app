import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

import IconChevron from '../../../icons/IconChevron'
import colors from '../../../../../theme/tokens/colors'

type Props = {
  name: string
  label: string
  register?: any
  options: {
    label: string
    value: string | number
  }[]
  defaultValue?: string | number
  sx?: object
  color?: string
  onChange?: (value: any) => any
  buttonProps?: ButtonProps
  value?: any
}

export default function Select({
  name,
  label,
  options = [],
  defaultValue = 1,
  register = () => null,
  sx = {},
  color = colors.grey.light,
  onChange,
  buttonProps = {},
  value: parentValue,
}: Props) {
  const [value, setValue] = useState(parentValue || defaultValue)

  useEffect(() => {
    if (parentValue) setValue(parentValue)
  }, [parentValue])

  const handleValueChange = (event) => {
    const value = event.target.value
    !parentValue && setValue(value)
    onChange && onChange(value)
  }

  return (
    <Box sx={{ width: '100%', position: 'relative', height: '37px' }}>
      <Button
        sx={{
          position: 'absolute',
          pointerEvents: 'none',
          color,
          borderColor: color,
          ...sx,
        }}
        variant='outlined'
        size='medium'
        endIcon={<IconChevron sx={{ stroke: color, transform: 'translateY(7px)' }} />}
        {...buttonProps}
      >
        {label}
      </Button>

      <label id={name} hidden>
        {label}
      </label>

      <Box
        component='select'
        id={name}
        value={value}
        onChange={handleValueChange}
        {...(!onChange ? register(name) : {})}
        sx={{
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0,
        }}
      >
        {options.map((option) => (
          <option key={option.value + option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </Box>
    </Box>
  )
}
