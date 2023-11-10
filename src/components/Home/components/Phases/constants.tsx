import { Fundraising } from '../TimelinePage/components/Fundraising'
import { Cast } from './components/Cast'
import { Pitch } from './components/Pitch'

const CAST = [
  {
    name: 'Timothy Morris Lane',
    role: 'Alex',
    bio: "Timothy Morris Lane is a talented actor with a passion for learning and languages. He has studied acting at Kenyon College and the New York Film Academy's Acting Conservatory, and has worked in the Atlanta, Los Angeles, and NYC markets.\nLane's notable acting experiences include a role in Tyler Perry's All The Queen's Men and the lead role in the musical Let It Flow. He is also a skilled martial artist.\n Lane is inspired by other great actors and real people in real situations. He finds the most challenging part of acting to be pulling the emotional energy necessary for a scene and maintaining it for long periods of time. However, he finds it incredibly rewarding to watch the characters come to life at the end.\nLane is a versatile and talented actor with a bright future ahead of him. He is sure to continue to entertain and inspire audiences with his work.",
    image: {
      src: 'https://ucarecdn.com/6a86e1d3-8cbb-4611-aa82-b8bc1dc830f9/IMG_9689TimothyLane.JPG',
      width: 590,
      height: 590,
    },
  },
  {
    name: 'Whitney Hicks',
    role: 'Stephanie',
    bio: 'Meet Whitney Hicks, a versatile actor who currently brings the character Stephanie to life in our upcoming short film. At 37 years of age, Whitney boasts a decade of experience in the acting world. She embarked on her acting journey by working in commercials and print during the first five years of her career. Fueled by her passion for storytelling, she made a bold move to Atlanta to pursue her dreams in television and film. Whitney\'s talent has shone brightly in various projects, including her captivating performance in the Amazon Prime series "30," a supporting role in a short film featuring the esteemed Reginae Carter on BETher, and a featured role in Tyler Perry\'s acclaimed series, "Sistas." For Whitney, acting is not just a profession; it\'s her therapy, a way to release her inner emotions and explore different facets of her identity. She perseveres in the face of countless "No\'s" because the most rewarding aspect is being able to do what she loves—act. Beyond her acting talent, Whitney is also a spoken word artist and has a unique penchant for pickles, often indulging in them as if they were potato chips, always going back for more. Whitney Hicks is an actor with immense passion, resilience, and a touch of quirkiness, making her stand out in the industry and serving as an inspiration to aspiring actors everywhere.',
    image: {
      src: 'https://ucarecdn.com/69b0c3ed-9351-4f35-b5e8-c0b0a8d26bb0/F58F37742577449DA1355442E763A458WhitneyHicks.jpeg',
      width: 590,
      height: 590,
    },
  },
  {
    name: 'Joe Suarez',
    role: 'Charlie',
    bio: 'Joe Suarez is a passionate and talented actor based in Atlanta, GA. He is originally from Miami, FL and moved to Atlanta two years ago to pursue his dream of acting. He has a background in stand-in work, improv classes, and workshops specializing in method and Meisner techniques.\nSuarez has two notable acting achievements: He was bumped up to cast for a scene in the Showtime series "The First Lady" to perform "The Waltz" with Judy Greer alongside Michelle Pfeiffer and Aaron Eckhart. He was also chosen to play one of the new core friends of cast/karate students of the Cobra Kai dojo in the Netflix show Cobra Kai and was brought on to the stunts team to participate in the final fight with cast.\nSuarez is inspired by every aspect of the film industry, from the sets to the actors. He is particularly influenced by Al Pacino and Brendan Frazier.\nSuarez finds the most challenging part of acting to be staying on schedule and getting through long days on set. However, he finds it incredibly rewarding to see his hard work come to life in the final cut.\nIn addition to acting, Suarez is also a sneakerhead and has an elite collection of Nikes and Jordans. His family also founded and owns a brewery in Marietta, GA called Red Hare Brewery.\nSuarez is a rising star in the acting industry and is sure to achieve great things in the future.',
    image: {
      src: 'https://ucarecdn.com/708efd67-170d-457b-b997-9df450549b98/62F9A95D83BD427EA1653FF5F8D7C441JoeSuarezSarmiento.jpeg',
      width: 590,
      height: 590,
    },
  },
  {
    name: 'Kyle G. Johnson',
    role: 'Sean',
    bio: 'Kyle G. Johnson is a rising actor and screenwriter based in Atlanta, GA. He began his acting career as a child, appearing in commercials, television shows, and local theater productions. After taking a break from acting to focus on his studies and athletics, Johnson has refocused his energy on performing and writing. He has since appeared in several short films and series, and is currently working on his own screenplay.\nJohnson is inspired by films and storytelling, and he appreciates the ability of these mediums to bring people together. He finds acting to be a rewarding but challenging job, as it requires him to research his characters deeply and find the pieces of himself that fit with their lives.\nIn addition to acting, Johnson is also a passionate music lover. His music taste is eclectic, ranging from rap and R&B to country and alternative.\nJohnson is a talented and versatile actor with a bright future ahead of him. He is sure to continue to entertain and inspire audiences with his work.',
    image: {
      src: 'https://ucarecdn.com/2d030357-e52b-46ab-aaa4-c1f0cd665bb1/IMG_8012KyleJohnson.jpeg',
      width: 590,
      height: 590,
    },
  },
  {
    name: 'Jameson Deloatch',
    role: 'Leonard',
    bio: 'Jameson Deloatch is a multifaceted talent who is making his debut as an actor in the film Tipping Point. He has a background in production work, having hosted large-scale events and curated unforgettable moments for diverse audiences.\nDeloatch is originally from Virginia and has a charismatic and dynamic presence. Most recently, he was at the helm of Richmond Black Restaurant Week and also involved with Virginia Pride, showcasing his dedication to creating spaces of acceptance and celebration for the LGBTQ+ community.\nIn addition to his acting and production work, Deloatch is also a dedicated advocate for social justice. He is passionate about using his platform to amplify the voices of marginalized communities and promote equity and inclusion.\nDeloatch is a rising star to watch in the entertainment industry. With his talent, passion, and commitment to social justice, he is sure to make a significant impact.',
    image: {
      src: 'https://ucarecdn.com/363dd126-290a-42da-a9cc-85156ba821b3/02061EAC22EF4913B2B7B787999BA7FFJamesonDeloatch.jpeg',
      width: 590,
      height: 590,
    },
  },
  {
    name: 'Trevor Santiago',
    role: 'Party Goer',
    bio: 'Trevor Santiago, a versatile actor hailing from a rich theatre background, steps into the role of Party Guest with enthusiasm in the upcoming short Tipping Point. Having portrayed diverse characters, from the charismatic Curly in "Oklahoma! The Musical" to captivating moments in "A Chorus Line," Trevor brings a wealth of experience to the set. Beyond the spotlight, he has also contributed his talents behind the scenes as an Art Director and key PA in various film productions. Notable achievements include winning multiple acting awards in high school and performing in a college production of "A Chorus Line" on the eve of the COVID pandemic. Trevor thrives on delving into a character\'s psyche and cherishes the profound connection that transforms scenes into memorable moments. Alongside his acting prowess, he showcases his musical talents by playing the saxophone and carries the unique distinction of participating in the St. Patrick\'s Day parade in Dublin, Ireland. With a passion for authenticity and a knack for making scenes truly come alive, Trevor Santiago is poised to leave a lasting impression in the world of film.',
    image: {
      src: 'https://ucarecdn.com/ab8ce7f7-e71a-42f8-bc00-3880685685b8/Screenshot_20231103180701TrevorSantiago.png',
      width: 590,
      height: 590,
    },
  },
]

export const TIMELINE = {
  'Pre-production': {
    show: true,
    sections: [
      {
        title: 'Fundraising',
        type: 'video',
        Component: <Fundraising />,
        button: {
          label: 'See how much we raised',
        },
        video: {
          src: 'https://player.vimeo.com/video/855725921?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        },
      },
      {
        title: 'Pitch & Concept',
        type: 'slideshow',
        button: {
          label: 'Learn More About the Film',
        },
        Component: <Pitch />,
        slideshow: {
          slides: [
            {
              title: 'Pitch',
              image: {
                src: 'https://ucarecdn.com/0ed7f45f-d4e8-4ba3-8335-00e65c5d45d3/Sequence_no_k_590x.webp',
                width: 590,
                height: 590,
              },
            },
            {
              title: 'Film Summary',
              image: {
                src: 'https://ucarecdn.com/293ee5f2-dec8-4293-937e-41e2701b2295/5809077c1a000067145bac67.webp',
                width: 590,
                height: 590,
              },
              content:
                "At its core, \"Tipping Point\" is a coming-of-age story that echoes the challenges, fears, and aspirations we all face on our journey to adulthood. It's a story that transcends age, background, and experience - because we've all encountered moments that tested our courage, pushed us beyond our limits, and demanded that we stand up to our fears. Through the eyes of our protagonist, you'll witness a narrative that's relatable, heartwarming, and inspiring. \"Tipping Point\" follows Alex, a young man at a crucial crossroads in his life. As he grapples with adversity and uncertainty, he's forced to confront his deepest fears and insecurities. But this is not just Alex's story; it's a universal story of growth, resilience, and ultimately, triumph.",
            },
            {
              title: 'Film Sypnosis',
              image: {
                src: 'https://ucarecdn.com/fdb32408-0b08-4e7f-b704-ac0b71bf76cd/NOTK_Kone__Bakary_CourtesyofNEON0.webp',
                width: 590,
                height: 590,
              },
            },
            {
              title: 'Visual Reference',
              image: {
                src: 'https://ucarecdn.com/e4dc60dc-9025-439b-871a-2dc9594833f7/HOUSEPARTY20230501112311abca51093546fe8de8a89eefbc7489.webp',
                width: 590,
                height: 590,
              },
            },
          ],
        },
      },
      {
        title: 'Explore the cast',
        type: 'slideshow',
        Component: <Cast actors={CAST} />,
        button: {
          label: 'The Cast of Tipping Point',
        },
        slideshow: {
          orientation: 'portrait',
          slides: CAST,
        },
      },
    ],
  },
  Production: {
    show: false,
    sections: [
      {
        title: 'Directors Diary',
      },
      {
        title: 'Behind the scenes',
      },
    ],
  },
  // 'Post-production': {
  //   show: false,
  //   sections: [
  //     {
  //       title: 'Explore the crew',
  //     },
  //     {
  //       title: 'Soundscape',
  //     },
  //   ],
  // },
  // Release: {
  //   show: false,
  //   sections: [
  //     {
  //       title: 'Premiere',
  //     },
  //     {
  //       title: 'Film Festival',
  //     },
  //     {
  //       title: 'Awards',
  //     },
  //     {
  //       title: 'Press',
  //     },
  //   ],
  // },
}
