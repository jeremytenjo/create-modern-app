// https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/
// for deep equal use lodash isEqual
export default function areObjectsEqual(obj1: object, obj2: object) {
  const obj1Sorted = Object.fromEntries(
    Object.entries(obj1).sort(([, a]: any, [, b]: any) => a - b),
  )
  const obj2Sorted = Object.fromEntries(
    Object.entries(obj2).sort(([, a]: any, [, b]: any) => a - b),
  )
  const areEqual = JSON.stringify(obj1Sorted) === JSON.stringify(obj2Sorted)
  return areEqual
}
