import tcpPortUsed from 'tcp-port-used'

export default async function onPortsRunning({
  ports,
  onRunning,
}: {
  ports: number[]
  onRunning?: () => any
}) {
  const commandsRunning: number[] = []

  await Promise.all(
    ports.map(async (port) => {
      await tcpPortUsed.waitUntilUsed(port, 100, 200000)
      commandsRunning.push(port)

      if (commandsRunning.length === ports.length) {
        onRunning && onRunning()
      }
    }),
  )
}
