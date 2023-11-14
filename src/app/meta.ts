import { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from './constants'

export const metadata: Metadata = {
  manifest: `${SITE_URL}/manifest.json`,
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.svg',
  },
  title: {
    template: `%s | Tipping Point, A Short By Aaron Glaize | 818 Studios`,
    default: 'Tipping Point, A Short Film By Aaron Glaize | 818 Studios',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Tipping Point A Short Film By Aaron Glaize',
    description:
      "818 Studios Presents Tipping Point A Short Film By Aaron Glaize. Imagine celebrating your 30th birthday and receiving news that reshapes everything. That's the heart of our story. A young man's journey takes an unforeseen twist, setting him on a new path. It's a tale of courage, change, and the pivotal moments that define us.",
    images: [
      {
        url: 'https://ucarecdn.com/9e757834-1f46-41c9-b65e-31c333f0d42a/tippingpointmeta.png',
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
