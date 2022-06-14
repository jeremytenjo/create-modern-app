/**
 * Input `useDataStore` returns `dataStore`
 */
module.exports = function generateUseVariable(string) {
  let newValue = string.substring(3)
  newValue = newValue.charAt(0).toLowerCase() + newValue.slice(1)

  return newValue
}
