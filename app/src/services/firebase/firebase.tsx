import React from 'react'
import { FirebaseProvider } from '@useweb/use-firebase'
import { initializeApp } from 'firebase/app'
import { getFunctions } from 'firebase/functions'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import firebaseJson from '../../../firebase.json'

import testUser from './emulator/testUser'
import firebaseConfig from './firebase.config'

const firebaseApp = initializeApp(firebaseConfig)
const functions = getFunctions(firebaseApp)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

const envIsDev = process.env.NODE_ENV === 'development'

export default function Firebase({ children }) {
  return (
    <FirebaseProvider
      firebaseConfig={firebaseConfig}
      firebaseApp={firebaseApp}
      envIsDev={envIsDev}
      functions={functions}
      db={db}
      dbOptions={{ dbEmulatorPort: firebaseJson.emulators.firestore.port }}
      auth={auth}
      authOptions={{
        testUserEmail: testUser.email,
        testUserPassword: testUser.password,
        authEmulatorPort: firebaseJson.emulators.auth.port,
      }}
    >
      {children}
    </FirebaseProvider>
  )
}
