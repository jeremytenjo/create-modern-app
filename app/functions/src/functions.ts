import * as functions from 'firebase-functions'

import getAppConfig from '../../app.config.js'

import _helloWorld from './helloWorld/helloWorld.js'

// https://firebase.google.com/docs/functions/get-started

export const helloWorld = functions.https.onRequest(async (req, res) => {
  const appConfig = await getAppConfig()
  res.set('Access-Control-Allow-Origin', appConfig.domain.main)

  try {
    const payload = JSON.parse(req.body)
    const result = await _helloWorld({ payload })

    res.status(200).json(result)
  } catch (error: any) {
    console.error(new Error(error))
    res.status(500).json({
      error: error.toString(),
    })
  }
})
