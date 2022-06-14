import commandLineArgs from 'command-line-args'

/**
 * Get script options eg --watch
 * {@link https://github.com/75lb/command-line-args#readme|Docs}
 */
export default function getCommandLineArgs() {
  const optionDefinitions = [{ name: 'watch', alias: 'w', type: Boolean }]
  const options = commandLineArgs(optionDefinitions)

  return options
}
