import React from 'react'
import ReactJsonView from 'react-json-view'

/**
 * [Docs](https://github.com/mac-s-g/react-json-view)
 */
export default function ReactJson({ json }) {
  return <ReactJsonView src={json} theme='chalk' />
}
