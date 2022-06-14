const files = [
  {
    path: ({ name }) => `${name}.schema.tsx`,
    template: ({ name, helpers }) => {
      const upperName = helpers.changeCase.capitalCase(name).split(' ').join('')

      return `
      type ${upperName}Schema = {
        id: string
      }
      
      export default ${upperName}Schema

      `
    },
  },
  {
    path: ({ name }) => `${name}.stubs.tsx`,
    template: ({ name, helpers }) => {
      const upperName = helpers.changeCase.capitalCase(name).split(' ').join('')

      return `
      import type ${upperName}Schema from './${name}.schema'

      const ${upperName}Stubs: ${upperName}Schema[] = []
      
      export default ${upperName}Stubs

      `
    },
  },
]

const template = {
  type: 'Data',
  files,
}

module.exports = {
  files,
  template,
}
