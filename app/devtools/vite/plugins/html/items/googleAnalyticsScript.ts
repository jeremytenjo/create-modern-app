import { PayloadTypes } from '../../../vite'

export default function googleAnalyticsScript({ appConfig, isDevMode }: PayloadTypes) {
  // https://www.optimizesmart.com/understanding-measurement-id-in-ga4-google-analytics-4/#1-how-to-find-google-analytics-4-measurement-id-
  return appConfig?.analytics?.google?.measurementId
    ? `
     <!-- Global site tag (gtag.js) - Google Analytics -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=${
       appConfig.analytics.google.measurementId
     }"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());  
       gtag('config', '${appConfig.analytics.google.measurementId}', { 'debug_mode': ${
        isDevMode ? 'true' : 'false'
      } });
     </script>`
    : ''
}
