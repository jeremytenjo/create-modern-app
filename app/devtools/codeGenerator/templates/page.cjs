const files = [
  {
    path: ({ name }) => `${name}.tsx`,
    template: ({ name }) => `import React from 'react' 
    export default function ${name}Page() {
      return <>containers</>
    }`,
  },
  {
    path: () => 'routes.tsx',
    template: ({ name }) => `import React from 'react'
    // https://react-location.tanstack.com/guides/routes#the-rootindex-path-vs-normal-paths
    export default [
      { path: '/', element: () => import('./${name}').then((res) => <res.default />) },
    ]
    `,
  },
]

const template = {
  type: 'Page',
  files,
}

module.exports = {
  files,
  template,
}
