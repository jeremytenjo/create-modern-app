/* eslint-disable storybook/prefer-pascal-case */
import React from 'react'

import Typography from '../../../theme/tokens/stories/theme.typography'

import Text, { type TextProps } from './Text'

export default {
  title: 'Lib/Components/Text',
}

const Template = (args) => {
  return (
    <>
      <Text {...args} />
    </>
  )
}

export const Default = Template.bind({}) as any

const defaultArgs: TextProps = { text: 'hello', variant: 'h1' }

Default.args = defaultArgs

export const typography = Typography
