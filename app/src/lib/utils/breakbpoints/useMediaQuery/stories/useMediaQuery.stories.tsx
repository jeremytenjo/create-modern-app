import React, { useState } from 'react'
import useEventListener from '@useweb/use-event-listener'

import useMediaQuery, { type UseMediaQueryProps } from '../useMediaQuery'

export default {
  title: 'Lib/components/useMediaQuery',
}

const Template = (args) => {
  const [width, setWidth] = useState(window.innerWidth)

  const xs = useMediaQuery({ type: args.type, size: 'xs' })
  const sm = useMediaQuery({ type: args.type, size: 'sm' })
  const md = useMediaQuery({ type: args.type, size: 'md' })
  const lg = useMediaQuery({ type: args.type, size: 'lg' })
  const xl = useMediaQuery({ type: args.type, size: 'xl' })

  useEventListener('resize', () => {
    setWidth(window.innerWidth)
  })

  const doesItMatch = xs.breakpoints.keys.map((b) => {
    const mqs = {
      xs,
      sm,
      md,
      lg,
      xl,
    }
    return (
      <div key={b}>
        <span>
          theme.breakpoints.{args.type}(`{b}`) ={' '}
          <span style={{ fontWeight: mqs[b].matches ? 'bold' : 'normal' }}>
            {xs.breakpoints.values[b]}px
          </span>{' '}
          {` `}
          {args.type} - matches:{' '}
          {mqs[b].matches ? (
            <span style={{ color: 'green' }}>true</span>
          ) : (
            <span style={{ color: 'red' }}>false</span>
          )}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return (
    <div style={{ padding: '20px' }}>
      <h3>Viewport width: {width}px</h3>
      <br />
      {doesItMatch}
    </div>
  )
}

export const Default = Template.bind({}) as any

const defaultArgs: UseMediaQueryProps = {
  type: 'up',
  size: 'sm',
}

Default.args = defaultArgs

// export const Variant = Template.bind({}) as any

// const VariantArgs: useMediaQueryProps = {
//  ...defaultArgs,
//  name: 'World',
// }

// Variant.args = VariantArgs
