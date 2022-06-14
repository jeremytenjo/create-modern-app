export default function flattenObject(obj, parent, res = {}) {
  for (const key in obj) {
    const propName = parent ? parent + '.' + key : key
    if (typeof obj[key] === 'object') {
      flattenObject(obj[key], propName, res)
    } else {
      res[propName] = obj[key]
    }
  }
  return res
}
