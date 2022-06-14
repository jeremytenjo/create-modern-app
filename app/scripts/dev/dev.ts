import shellDashboard, {
  type CommandProps,
} from '../../devtools/utils/terminal/shellDashboard.js'
import getAppConfig from '../../app.config.js'
import firebaseJson from '../../firebase.json' assert { type: 'json' }

type Props = {
  onReady?: () => any
}

export default async function dev({ onReady }: Props = { onReady: undefined }) {
  const appConfig = await getAppConfig()
  const emulatorPorts: number[] = []
  const waitForPortsMessage = 'Waiting for emulator data'

  for (const [, value] of Object.entries(firebaseJson.emulators)) {
    emulatorPorts.push(value.port)
  }

  const commands: CommandProps[] = [
    {
      label: 'App',
      command: 'npm run app:dev',
      ports: [appConfig.server.local.port],
      color: '#01BF81',
      enableQRCode: true,
      waitForPorts: {
        ports: emulatorPorts,
        message: waitForPortsMessage,
      },
    },
    {
      label: `Storybook`,
      command: `npm run storybook:dev`,
      ports: [appConfig.devtools.storybook.port],
      color: '#FF4785',
      enableQRCode: true,
      waitForPorts: {
        ports: emulatorPorts,
        message: waitForPortsMessage,
      },
    },
  ]

  if (firebaseJson.emulators) {
    const command = firebaseJson.emulators.functions.port
      ? 'npm run functions:dev'
      : 'npm run emulators:start'

    if (!emulatorPorts.length) {
      throw new Error('Missing emulator ports in firebase.json')
    }

    commands.push({
      label: `Firebase Emulators`,
      command,
      ports: emulatorPorts,
      color: '#FFCB2E',
      onCommandRunning: async () => {
        const addEmulatorData = await import(
          '../../src/lib/utils/firebase/emulator/addEmulatorData/addEmulatorData.js'
        )
        addEmulatorData.default()
      },
    })
  }

  shellDashboard({ commands, onCommandsRunning: onReady })
}
