import gtag from '../../utils/gtag/gtag'

type GaOpenProjectProps = {
  type: 'App' | 'OSS' | 'Plugins'
  name: string
}

export default function ga_openProject({ type, name }: GaOpenProjectProps) {
  gtag({
    category: 'Projects',
    action: 'Open Project',
    name,
    type,
  })
}
