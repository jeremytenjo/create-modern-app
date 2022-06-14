const docsTemplate = () => {
  return {
    path: ({ name }) => `stories/${name}.docs.mdx`,
    template: ({ name }) => `# ${name}`,
  }
}

const getStoryTemplate = ({ name, type = 'component', helpers }) => {
  const isFunction = type === 'function'
  const propsName = `${helpers.changeCase.capitalCase(name).split(' ').join('')}Props`

  return `//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import ${name}, { type ${propsName} } from '../${name}'
${
  isFunction
    ? `import AsyncTester from '../../lib/components/data/AsyncTester/AsyncTester'`
    : ''
}

import Docs from './${name}.docs.mdx'

const defaultArgs: ${propsName} = {
  name: '${name}',
}

export default {
  title: 'lib/components/${name}',
  args: defaultArgs,
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = (args) => {
  ${isFunction ? `const fn = async () => ${name}(args)` : ''}

  return (
    <>
      ${isFunction ? `<AsyncTester fn={fn} autoExec />` : `<${name} {...args} />`}
    </>
  )
}

export const Default = {
  render: (args) => {
    return <Template {...args} />
  },
}

// const variantArgs: ${propsName} = {
//  name: 'World',
// }

// export const Variant = {
//  ...Default,
//  args: variantArgs
// }
`
}

const componentStory = ({ type }) => {
  return {
    path: ({ name }) => `stories/${name}.stories.tsx`,
    template: ({ name, helpers }) => getStoryTemplate({ name, type, helpers }),
  }
}

const componentStoryFiles = [docsTemplate(), componentStory({ type: 'component' })]
const functionStoryFiles = [docsTemplate(), componentStory({ type: 'function' })]

module.exports = {
  componentStoryFiles,
  functionStoryFiles,
}
