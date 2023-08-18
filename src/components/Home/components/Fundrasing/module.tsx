import Script from 'next/script'
import { Video, Container } from './style'
export const Fundraising = () => {
  return (
    <Container>
      <h2>Be a part of the journey</h2>
      <Video>
        <iframe
          src="https://player.vimeo.com/video/855725921?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          //   style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="The Tipping Point by 818 Films - Fundraising"
        ></iframe>
        <Script src="https://player.vimeo.com/api/player.js"></Script>
      </Video>
      <div>
        <h6>
          The Heart of &quot;Tipping Point&quot;: A Tale of Coming-of-Age and
          Overcoming Adversity
        </h6>
        <p>
          <strong>Tipping Point</strong> is a coming-of-age story that echoes
          the challenges, fears, and aspirations we all face on our journey to
          adulthood. It&apos;s a story that transcends age, background, and
          experience - because we&apos;ve all encountered moments that tested
          our courage, pushed us beyond our limits, and demanded that we stand
          up to our fears.
        </p>
        <p>
          Through the eyes of our protagonist, you&apos;ll witness a narrative
          that&apos;s relatable, heartwarming, and inspiring. &quot;Tipping
          Point&quot; follows Alex, a young man at a crucial crossroads in
          his life. As he grapples with adversity and uncertainty, he&apos;s
          forced to confront his deepest fears and insecurities. But this is not
          just Alex&apos;s story; it&apos;s a universal story of growth,
          resilience, and ultimately, triumph.
        </p>
        <a className="button" href="">
          Donate on IndieGogo
        </a>
      </div>
    </Container>
  )
}
