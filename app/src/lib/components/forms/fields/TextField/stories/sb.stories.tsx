import React from 'react'

import Form from '../../../Form/Form'
import TextField from '../TextField'

export default {
  title: 'lib/components/Forms/TextField',
  args: {},
}

const Template = (args) => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form onSubmit={onSubmit}>
      <TextField {...args} />
    </Form>
  )
}

export const Example = Template.bind({}) as any

Example.args = {
  name: 'test',
  placeholder: 'Input Here',
}
