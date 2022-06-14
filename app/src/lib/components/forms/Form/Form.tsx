import React, { forwardRef } from 'react'
import Box from '@mui/material/Box'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'

type Props = {
  children: any
  onSubmit: (data: any) => any
  defaultValues?: object
  sx?: object
  resetOnSubmission?: boolean
}

const Form = forwardRef(
  (
    { children, onSubmit, defaultValues = {}, sx = {}, resetOnSubmission }: Props,
    ref,
  ) => {
    const methods = useForm({ defaultValues })

    return (
      <FormProvider {...methods}>
        <FormElement
          onSubmit={onSubmit}
          ref={ref}
          sx={sx}
          resetOnSubmission={resetOnSubmission}
        >
          {children}
        </FormElement>
      </FormProvider>
    )
  },
)

const FormElement = forwardRef(
  ({ children, onSubmit, sx, resetOnSubmission }: Props, ref) => {
    const { handleSubmit, register, reset } = useFormContext()

    const handleSumbit = (props) => {
      resetOnSubmission && reset()
      onSubmit(props)
    }

    return (
      <Box component='form' ref={ref} onSubmit={handleSubmit(handleSumbit)} sx={sx}>
        {Array.isArray(children)
          ? children.map((child) => {
              return child.props.name
                ? React.createElement(child.type, {
                    ...{
                      ...child.props,
                      register,
                      key: child.props.name,
                    },
                  })
                : child
            })
          : children}
      </Box>
    )
  },
)

export default Form
