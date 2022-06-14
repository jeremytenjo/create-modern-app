import { internalIpV4Sync } from 'internal-ip'

export default function getIpAddress() {
  const ipAddress = internalIpV4Sync()
  return ipAddress
}
