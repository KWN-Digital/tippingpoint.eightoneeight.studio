import { NextResponse } from 'next/server'
import { SITE_NAME } from '../../constants'

export async function GET() {
  return NextResponse.json({
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: '',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    lang: 'en-US',
    display: 'standalone',
    default_locale: 'en-US',
    orientation: 'landscape',
    version: '1.0.0',
    start_url: '/',
    icons: [
      {
        src: '/favicon/favicon.png',
        sizes: '512x512',
      },
    ],
  })
}
