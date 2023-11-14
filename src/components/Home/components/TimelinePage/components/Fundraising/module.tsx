import { IFundraising } from './types'
import { Container } from './style'
import { Counter } from './components/Counter'
export const Fundraising = ({}: IFundraising) => {
  return (
    <Container>
      <div>
        <h1>Thanks to all of our sponsors</h1>
        <h2>We raised</h2>
        <div>
          <Counter total={3200} />
        </div>
        <div>
          <p>
            We are thrilled to extend our heartfelt gratitude to the generous
            sponsors who have made &quot;Tipping Point&quot; possible. Your
            support and belief in our project mean the world to us, and we
            couldn&apos;t have reached our $3,200 goal without your incredible
            contributions.
          </p>
          <p>
            Your investment in our film allows us to bring our creative vision
            to life and share it with the world. We&apos;re excited to embark on
            this journey, and we promise to make every dollar count.
            &quot;Tipping Point&quot; is more than just a film; it&apos;s a
            shared dream that is now one step closer to reality thanks to your
            support.
          </p>
          <p>
            For those who would like to&nbsp;
            <a
              href="https://donate.stripe.com/00g9Ci9Rtgfs0i46oo"
              target="_blank"
            >
              continue supporting
            </a>
            &nbsp; our projects and our creative endeavors, we invite you to
            contribute to our ongoing mission. Your donations will not only help
            us bring &quot;Tipping Point&quot; to life but also support future
            projects that we are passionate about.
          </p>
          <p>
            Stay tuned for updates as we continue to work diligently on bringing
            &quot;Tipping Point&quot; to life. We&apos;re dedicated to making a
            film that you can be proud to have supported.
          </p>
          <p>
            Once again, thank you from the bottom of our hearts for making this
            project possible. Your generosity inspires us, and we can&apos;t
            wait to share the magic of &quot;Tipping Point&quot; with you and
            the world.
          </p>
          <p>With immense gratitude,</p>
          <p>The Team @ 818 Studios</p>
        </div>
      </div>
    </Container>
  )
}
