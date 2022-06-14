import React from 'react'
import Button, { type ButtonProps } from '@mui/material/Button'

export default {
  title: 'Lib/components/Button',
}

const Template = (args) => {
  return (
    <>
      <Button {...args}>Button</Button>
    </>
  )
}

export const Default = Template.bind({}) as any

const defaultArgs: ButtonProps = {
  variant: 'outlined',
}

Default.args = defaultArgs

// export const Variant = Template.bind({}) as any

// const VariantArgs: ButtonProps = {
//  ...defaultArgs,
//  name: 'World',
// }

// Variant.args = VariantArgs
