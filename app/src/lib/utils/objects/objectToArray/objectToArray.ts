export default function objectToArray(object) {
  const array: object[] = []
  for (const [key, value] of Object.entries(object)) {
    const obj = {}
    obj[key] = value
    array.push(obj)
  }

  return array
}
