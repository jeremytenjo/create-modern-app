import React from 'react'

import FirebaseFunctionDashboard from '../../../../src/lib/components/firebase/FirebaseFunctionDashboard/FirebaseFunctionDashboard'

export default {
  title: 'functions/helloWorld',
  args: {},
}

export const Default = {
  render: (args) => {
    const payload = {
      name: 'Jeremy',
    }

    return (
      <FirebaseFunctionDashboard functionName='helloWorld' payload={payload} {...args} />
    )
  },
}
