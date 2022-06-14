/**
 * Gets externals from package.json peerDependencies
 */
export default function getExternals({ packageJson }) {
  if (!packageJson.dependencies) return []

  const externals = Object.keys(packageJson.dependencies)
  return externals
}
