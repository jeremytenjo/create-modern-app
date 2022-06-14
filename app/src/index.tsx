import React from 'react'
import { createRoot } from 'react-dom/client'
import { UseInstallPromptProvider } from '@useweb/use-install-prompt'

import ClickToComponent from './lib/components/ClickToComponent/ClickToComponent'
import Firebase from './services/firebase/firebase'
import Router from './pages/router'
import Theme from './theme/theme'

function App() {
  return (
    <UseInstallPromptProvider>
      <Firebase>
        <Theme>
          <Router />
        </Theme>
      </Firebase>
    </UseInstallPromptProvider>
  )
}

const container = document.getElementById('root') as any
const root = createRoot(container)
root.render(
  <>
    <App />
    <ClickToComponent />
  </>,
)
