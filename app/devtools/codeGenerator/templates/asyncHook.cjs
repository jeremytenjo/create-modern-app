const generateUseVariable = require('../utils/generateUseVariable.cjs')

const files = [
  {
    path: () => 'index.ts',
    template: ({ name }) => `import useAsync from '@useweb/use-async'
    import useSnackbar from '../../../../../lib/components/Snackbar/useSnackbar'
    import useShowError from '../../../../../lib/components/feedback/useShowError'
    
    export default function ${name}() {
      const showError = useShowError()

      const fetcher = async () => {
        return true
      }
    
      const ${generateUseVariable(`${name}`)} = useAsync(fetcher, {
        onError: (error) => {
          showError.show({ error, message: 'Error, please try again'})
        }
        onResult: (result) => {
          console.log(result)
        }
      })
    
      return ${generateUseVariable(`${name}`)}
    }`,
  },
]

const template = {
  type: 'Async Hook',
  files,
}

module.exports = {
  files,
  template,
}
