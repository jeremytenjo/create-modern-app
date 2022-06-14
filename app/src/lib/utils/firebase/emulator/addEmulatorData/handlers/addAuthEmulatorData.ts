import testUser from '../../../../../../services/firebase/emulator/testUser.js'

/**
 * [Docs](https://firebase.google.com/docs/emulator-suite/connect_auth)
 */
export default async function addAuthEmulatorData({ auth, signInUser = true }) {
  try {
    const email = testUser.email
    const password = testUser.password

    const createdUser = await auth.createUser({
      email,
      password,
      emailVerified: true,
      displayName: 'John Doe',
      phoneNumber: '+11234567890',
      photoURL: 'https://www.jeremytenjo.com/images/profile_photo.webp',
      disabled: !signInUser,
    })

    console.log('User creation was successful')
    return createdUser.uid
  } catch (error) {
    console.log(error, 'User creation failed')
  }
}
