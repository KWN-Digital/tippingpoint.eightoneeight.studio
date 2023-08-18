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
      <div>Fundraising</div>
    </Container>
  )
}
