import { type GetUserArgsReturn } from '../../createApp/handlers/getUserArgs/getUserArgs'

type GetRepoUrlProps = GetUserArgsReturn['type']

export default function getRepoUrl({ type = 'webapp' as GetRepoUrlProps }) {
  const repos = {
    webapp: 'https://github.com/jeremytenjo/starter-webapp',
    website: 'https://github.com/jeremytenjo/starter-website',
    demo: 'https://github.com/jeremytenjo/starter-demo',
  }
  const repoUrl = repos[type] as any

  return repoUrl
}
