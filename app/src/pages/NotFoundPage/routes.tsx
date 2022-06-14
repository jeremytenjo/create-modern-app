import React from 'react'

export default [
  { path: '*', element: () => import('./NotFoundPage').then((res) => <res.default />) },
]
