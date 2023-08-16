import { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from './constants'

export const metadata: Metadata = {
  manifest: `${SITE_URL}/manifest.json`,
  icons: {
    icon: '/favicon/favicon.png',
    shortcut: '/favicon/favicon.ico',
  },
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: SITE_NAME,
    description: '',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
