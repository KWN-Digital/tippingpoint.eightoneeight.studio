import { getFeed } from './utils'

export async function GET() {
  const feed = await getFeed()
  const response = new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml; charset=UTF-8',
    },
  })
  return response
}
