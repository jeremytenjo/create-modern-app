import admin from 'firebase-admin'

import firebaseJson from '../../../../../../firebase.json' assert { type: 'json' }
import firebaseConfig from '../../../../../services/firebase/firebase.config.js'
import getCommandLineArgs from '../../../../../../devtools/utils/node/getCommandLineArgs.js'

import addMockDataToFirestore from './handlers/addFirestoreEmulatorData.js'
import addAuthEmulatorData from './handlers/addAuthEmulatorData.js'

const addFirestoreData = firebaseJson?.emulators?.firestore?.port
const addAuthData = firebaseJson?.emulators?.auth?.port

addFirestoreData &&
  (process.env.FIRESTORE_EMULATOR_HOST = `localhost:${firebaseJson.emulators.firestore.port}`)

addAuthData &&
  (process.env.FIREBASE_AUTH_EMULATOR_HOST = `localhost:${firebaseJson.emulators.auth.port}`)

admin.initializeApp(firebaseConfig)

const db = admin.firestore()
const auth = admin.auth()

export default async function addEmulatorData() {
  const scriptArgs = getCommandLineArgs([{ name: 'user', type: String }])
  const signInUser = scriptArgs?.user !== 'signedOut'
  const createdUserId = addAuthData
    ? await addAuthEmulatorData({ auth, signInUser })
    : 'null'

  await addMockDataToFirestore({ db, createdUserId })
}
