import { MetadataRoute } from 'next'
// import { colors } from '#theme/colors'
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tipping Point',
    short_name: 'tippingpoint.eightoneeight.studio',
    description: 'Tipping Point | Site by KWN Digital',
    start_url: '/',
    display: 'standalone',
    orientation: 'landscape',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon/favicon.svg',
        sizes: '512x512',
      },
    ],
  }
}
