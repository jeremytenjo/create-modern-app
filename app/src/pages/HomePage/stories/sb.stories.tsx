import React from 'react'

import HomePage from '../HomePage'

export default {
  title: 'Pages/Home Page',
}

const Template = (args) => {
  return (
    <>
      <HomePage {...args} />
    </>
  )
}

export const Default = Template.bind({})
