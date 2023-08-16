import { NextResponse } from 'next/server'
import { SITE_URL } from './constants'

export async function GET() {
  let robots = `
    User-agent: Googlebot
    Disallow: /nogooglebot/
    Disallow: /api/

    User-agent: *
    Allow: /
  `
  if (SITE_URL) {
    robots += `
    Sitemap: ${SITE_URL}/sitemap.xml
  `
  }
  robots = robots.trim().replace(/^ {4}/gm, '')
  const response = new NextResponse(robots, {
    headers: {
      'content-type': 'text/plain; charset=UTF-8',
    },
  })
  return response
}
