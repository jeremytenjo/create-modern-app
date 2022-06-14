import { getAnalytics, logEvent } from 'firebase/analytics'

type GtagProps = {
  action: string
  category: string
  [key: string]: any
}

const analytics = getAnalytics()

export default function gtag({ action, category, ...rest }: GtagProps) {
  logEvent(analytics, action, {
    event_category: category,
    ...rest,
  })
}
