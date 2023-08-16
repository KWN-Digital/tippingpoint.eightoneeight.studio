import { NextResponse } from 'next/server'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './constants'
import packageJson from '#package'

export const GET = () => {
  // TODO - Fix any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let manifest = {} as any

  if (SITE_NAME) {
    manifest = {
      ...manifest,
      name: SITE_NAME,
    }
  }

  if (SITE_URL) {
    manifest = {
      ...manifest,
      id: SITE_URL,
      background_color: '#FFF',
      lang: 'en-US',
      display: 'standalone',
      default_locale: 'en-US',
      orientation: 'landscape',
      start_url: '/',
      icons: [
        {
          src: '/favicon/favicon.png',
          sizes: '512x512',
        },
      ],
    }
  }

  if (SITE_DESCRIPTION) {
    manifest = {
      ...manifest,
      description: SITE_DESCRIPTION,
    }
  }

  if (packageJson.version) {
    manifest = {
      ...manifest,
      version: packageJson.version,
    }
  }

  return NextResponse.json(manifest)
}
