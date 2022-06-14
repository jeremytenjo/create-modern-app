import React from 'react'

export default [
  { path: '/', element: () => import('./HomePage').then((res) => <res.default />) },
]
