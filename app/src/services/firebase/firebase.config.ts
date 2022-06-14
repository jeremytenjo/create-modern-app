const firebaseConfig: FirebaseConfigProps = {
  apiKey: 'AIzaSyA-avceh0MDbRTqIBEfluvcdDWedGpmXog',
  authDomain: 'starter-webapp-jt.firebaseapp.com',
  projectId: 'starter-webapp-jt',
  storageBucket: 'starter-webapp-jt.appspot.com',
  messagingSenderId: '289244348405',
  appId: '1:289244348405:web:a5a9ebf8a9fb87346faabc',
  measurementId: 'G-WVR476ERZE',
}

export default firebaseConfig

export type FirebaseConfigProps = {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId: string
}
