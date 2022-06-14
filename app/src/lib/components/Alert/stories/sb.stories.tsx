import React from 'react'
import Alert from '@mui/material/Alert'

export default {
  title: 'lib/components/Alert',
  args: {
    children: 'Hello snackbar!',
  },
}

const Template = (args: any) => {
  return <Alert {...args} />
}

export const Example = Template.bind({})
// Example.args = {}
