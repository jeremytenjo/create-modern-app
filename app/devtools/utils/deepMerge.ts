import lodashMerge from 'lodash/merge'

/**
 * @example
 * deepMerge(defaultConfigOptions, config)
 */
export default function deepMerge(defaultValues, newValues) {
  return lodashMerge(defaultValues, newValues)
}
