import React from 'react'

import MuiProvider from './mui/MuiProvider'

export default function Theme({ children }) {
  return <MuiProvider>{children}</MuiProvider>
}
