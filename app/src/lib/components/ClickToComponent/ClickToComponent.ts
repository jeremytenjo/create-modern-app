import React from 'react'

const ClickToComponent = React.lazy(() => import('@useweb/click-to-component'))

export default import.meta.env.DEV ? ClickToComponent : () => null
