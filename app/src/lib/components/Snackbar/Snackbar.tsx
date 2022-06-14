import React, { useState, createContext, useContext } from 'react'
import Snackbar, { type SnackbarOrigin } from '@mui/material/Snackbar'
import Alert, { type AlertColor } from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

type Return = {
  show: (props: ShowProps) => any
  hide: () => any
}

type ShowProps = {
  message: any
  autoHideDuration?: number
  severity?: AlertColor
  disableAutoHide?: boolean
  action?: any
  anchorOrigin?: SnackbarOrigin
}

export const SnackbarContext = createContext<Return>({
  show: () => null,
  hide: () => null,
})

export const SnackbarProvider = ({ children }) => {
  const defaultSeverity = 'info' as any
  const defaultAutoHideDuration = 3000 as any
  const defaultAlertAnchorOrigin = { vertical: 'bottom', horizontal: 'center' } as any

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [autoHideDuration, setAutoHideDuration] = useState(defaultAutoHideDuration)
  const [severity, setSeverity] = useState(defaultSeverity)
  const [alertAction, setAlertAction] = useState()
  const [alertAnchorOrigin, setAlertAnchorOrigin] = useState(defaultAlertAnchorOrigin)

  const show = ({
    message,
    autoHideDuration = defaultAutoHideDuration,
    severity = defaultSeverity,
    anchorOrigin = defaultAlertAnchorOrigin,
    disableAutoHide,
    action,
  }: ShowProps) => {
    setMessage(message)
    setSeverity(severity)
    setAutoHideDuration(autoHideDuration)
    setAlertAnchorOrigin(anchorOrigin)
    setAlertAction(action)

    disableAutoHide && setAutoHideDuration(null)

    setOpen(true)
  }

  const hide = () => {
    setOpen(false)
  }

  return (
    <SnackbarContext.Provider
      value={{
        show,
        hide,
      }}
    >
      {children}

      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={hide}
        TransitionComponent={Slide}
        anchorOrigin={alertAnchorOrigin}
      >
        <Alert severity={severity} action={alertAction}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}

const useSnackbar = () => useContext<Return>(SnackbarContext)

export default useSnackbar
