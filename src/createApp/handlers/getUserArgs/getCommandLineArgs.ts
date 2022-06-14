import commandLineArgs from 'command-line-args'

/**
 * Get script options eg --name
 * {@link https://github.com/75lb/command-line-args#readme|Docs}
 */
export default function getCommandLineArgs() {
  const optionDefinitions = [
    { name: 'name', alias: 'n', type: String },
    { name: 'type', alias: 't', type: String },
  ]
  const options = commandLineArgs(optionDefinitions)

  return options
}
