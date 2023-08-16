import RSS from 'rss'
import moment from 'moment'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from './constants'

export const getFeed = async () => {
  let feedOptions = {
    pubDate: moment().toDate(),
    // TODO - fix any type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any

  if (SITE_NAME) {
    feedOptions = {
      ...feedOptions,
      title: SITE_NAME,
    }
  }

  if (SITE_DESCRIPTION) {
    feedOptions = {
      ...feedOptions,
      description: SITE_DESCRIPTION,
    }
  }

  if (SITE_URL) {
    feedOptions = {
      ...feedOptions,
      site_url: SITE_URL,
      feed_url: `${SITE_URL}/sitemap.xml`,
      copyright: `All rights reserved ${new Date().getFullYear()}`,
    }
  }

  const feed = new RSS(feedOptions)

  return feed
}
