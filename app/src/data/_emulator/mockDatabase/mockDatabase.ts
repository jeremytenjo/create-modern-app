import users from '../../users/users.stubs.js'
import type { CollectionType } from '../../../lib/utils/firebase/emulator/addEmulatorData/handlers/addFirestoreEmulatorData'

// used by src/services/firebase/emulator/addEmulatorData/handlers/addFirestoreEmulatorData.ts
const mockDatabase: CollectionType[] = [
  {
    name: 'users',
    data: users,
  },
]

export default mockDatabase
