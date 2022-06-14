const generateUseVariable = require('../utils/generateUseVariable.cjs')

const files = [
  {
    path: () => 'index.ts',
    template: ({ name }) => `import create from 'zustand'

    const ${name}Store = create((set) => ({
      ${generateUseVariable(`${name}`)}: true,
    
      setExample: (newValue) => set(() => ({ ${generateUseVariable(
        `${name}`,
      )}: newValue })),
    }))

    export default function ${name}() {
      const ${generateUseVariable(`${name}Store`)} = ${name}Store()

      const updateExample = (newValue) => {
        ${generateUseVariable(`${name}Store`)}.setExample(newValue)
      }

      return {
        ${generateUseVariable(`${name}`)}: ${generateUseVariable(
      `${name}Store`,
    )}.${generateUseVariable(`${name}`)},
        updateExample
      }
    }`,
  },
]

const template = {
  type: 'Global State',
  files,
}

module.exports = {
  files,
  template,
}
