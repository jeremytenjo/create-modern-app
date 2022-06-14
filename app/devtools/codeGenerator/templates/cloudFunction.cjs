const path = require('path')

const cloudFunction = {
  path: ({ name }) => path.join(process.cwd(), 'functions', 'src', name, `${name}.tsx`),
  template: ({ name, helpers }) => `
  export default function ${helpers.changeCase.pascalCase(name)}() {
    return 'hello'
  }
    `,
}
const cloudFunctionStory = {
  path: ({ name }) =>
    path.join(process.cwd(), 'functions', 'src', name, 'stories', `sb.stories.tsx`),
  template: ({ name }) => `
  import React from 'react'
  
  import FirebaseFunctionDashboard from '../../../../src/lib/components/firebase/FirebaseFunctionDashboard/FirebaseFunctionDashboard'
  
  
  
  export default {
    title: 'functions/${name}',
    args: {},
    
    parameters: {
      docs: {
        page: Docs,
      },
    },
  }
  
  const Template = (args) => {
    return <FirebaseFunctionDashboard functionName='${name}' payload={args} />
  }
  
  export const Example = Template.bind({})`,
}
const cloudFunctionStoryDocs = {
  path: ({ name }) =>
    path.join(process.cwd(), 'functions', 'src', name, 'stories', `docs.mdx`),
  template: ({ name }) => `# ${name}`,
}

const template = {
  type: 'Cloud Function',
  files: [cloudFunction, cloudFunctionStory, cloudFunctionStoryDocs],
  options: {
    createNamedFolder: false,
  },
}

module.exports = {
  template,
}
