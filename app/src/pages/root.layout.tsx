import React from 'react'

import { SnackbarProvider } from '../lib/components/Snackbar/Snackbar'

export default function ShellLayout({ children }) {
  return (
    <>
      <SnackbarProvider>
        <main>{children}</main>
      </SnackbarProvider>
    </>
  )
}
