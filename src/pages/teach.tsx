import { ContactSection } from '@components/PageSections/ContactSection';
import { Anchor } from '@stories/Atoms/Anchor';
import { Button } from '@stories/Atoms/Button';
import { Chip } from '@stories/Atoms/Chip';
import { Heading } from '@stories/Atoms/Heading';
import { Layout, LayoutItem } from '@stories/Atoms/Layout';
import { OrderedList } from '@stories/Atoms/OrderedList';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { Section } from '@stories/Atoms/Section';
import { Subtitle } from '@stories/Atoms/Subtitle';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import tt2 from '/public/images/tt2.png';
import tt2devices from '/public/images/tt2devices.png';

export default function TT2() {
  const [showReactQuerySection, setShowReactQuerySection] = useState(false);

  return (
    <>
      <Head>
        <title>Teach.io Case Study</title>
      </Head>
      <Section pattern className="pt-28 md:pt-36 lg:pt-40">
        <Heading type="h1">Teach.io Case Study</Heading>
        <OrderedList
          items={[
            {
              name: 'Client',
              discription: 'Teach.io',
              href: 'https://www.teach.io/',
            },
            {
              name: 'Role',
              discription: 'Lead - Full stack developer',
            },
            {
              name: 'Scope',
              discription: 'Development form early MVP to full application',
            },
            {
              name: 'Timeframe',
              discription: 'Feb 2023 - Dec 2024',
            },
          ]}
        />
        <Button
          type="href"
          primary
          className="self-end mt-8"
          href={'https://teach.io'}
        >
          Live Link
        </Button>
      </Section>

      <Section>
        <Heading type="h2">About Teach</Heading>
        <Layout columns={2}>
          <LayoutItem>
            <Paragraph>
              Teach.io is an e-learning platform. When I joined the project, the
              app was a proof of concept. I implemented Teach.io as a
              Progressive Web App (PWA), enabling key features such as push
              notifications, offline access, and app installation across
              devices. This upgrade significantly enhanced user engagement and
              accessibility, bridging the gap between web and native
              applications.
            </Paragraph>
          </LayoutItem>
          <LayoutItem className="justify-center">
            <Image
              src={tt2}
              alt={`TT2 tunnel`}
              className="drop-shadow-md "
              width={500}
            />
          </LayoutItem>
        </Layout>
        <Layout columns={1}>
          <LayoutItem>
            <Paragraph>
              <>
                <b>The app consisted of 4 major pillars:</b>
                <ul className="my-2 flex gap-2 flex-col">
                  <li>
                    <b>Community:</b> The Facebook-like community is the heart
                    of the app. It allows multi-media posting including Tenor
                    GIFs, emojis, likes, comments, and replies.
                  </li>
                  <li>
                    <b>Course:</b> Teachers can create courses with the customer
                    course builder using multi-media content, module drip feed
                    and progress tracking.
                  </li>
                  <li>
                    <b>Messaging:</b> Instant message other members with push
                    notifications.
                  </li>
                  <li>
                    <b>Calendar:</b> An RFC-compliant iCal app with Zoom
                    integration for scheduling live lessons or other community
                    events.
                  </li>
                </ul>
              </>
            </Paragraph>
            <Paragraph>
              The app is fully functional and has all supporting features such
              as student management, group creation, avatars, personal
              preferences, security 2FA, notifications, email and more.
            </Paragraph>
          </LayoutItem>
        </Layout>
      </Section>

      <Section alternativeBackground>
        <Heading type="h3">Technologies used</Heading>
        <div className="flex flex-wrap gap-4 justify-center">
          <Chip lable={'Express'} />
          <Chip lable={'Google App Engine'} />
          <Chip lable={'Google Cloud Task'} />
          <Chip lable={'AWS'} />
          <Chip lable={'MUX'} />
          <Chip lable={'Chargebee'} />
          <Chip lable={'Stripe'} />
          <Chip lable={'Zoom'} />
          <Chip lable={'Zapier'} />
          <Chip lable={'MongoDB'} />
          <Chip lable={'New Relic'} />
          <Chip lable={'Next.js'} />
          <Chip lable={'Socket.io'} />
          <Chip lable={'React email'} />
          <Chip lable={'React Query'} />
          <Chip lable={'Formik & Yup'} />
          <Chip lable={'Tailwind'} />
        </div>
      </Section>

      {/* <Section pattern>
        <Heading type="h3">Testimonial</Heading>
        <Paragraph>
          <i>
            <b>&quot;</b>Lee is a strong communicator, with a pragmatic and
            thoughtful approach to all of the work he undertakes. Mindful of how
            his work effects both users and the project’s commercials, he became
            an invaluable asset to our team. He quickly cemented himself as
            reliable and trustworthy, and is someone we look forward to working
            with again.<b>&quot;</b>
          </i>
        </Paragraph>
        <Link href="https://www.landdigital.agency">
          Daniel Gadd - Technical Director - Land digital agency
        </Link>
      </Section>*/}

      <Section>
        <Anchor id={'ReactQuery'} />
        <Heading type="h2">React query state management</Heading>
        <Subtitle type="M">
          Shortly after joining the project, I encountered significant
          performance bottlenecks due to excessive API calls and unnecessarily
          complex boilerplate code. The application relied heavily on useReducer
          and React&apos;s context API.
        </Subtitle>

        <Button
          type="onClick"
          className={'mb-8 ' + (showReactQuerySection ? 'hidden' : '')}
          onClick={() => {
            setShowReactQuerySection(true);
            document.getElementById('ReactQuery')?.scrollIntoView();
          }}
        >
          How i solved this with React Query
        </Button>

        <div
          className={
            'transition-max-height duration-10000 ease-in-out overflow-hidden ' +
            (showReactQuerySection ? 'max-h-[30000px]' : 'max-h-0 ')
          }
        >
          <Layout columns={2}>
            <LayoutItem className="justify-center">
              <Image
                src={tt2devices}
                alt={`TT2 app images`}
                className="drop-shadow-md"
                width={500}
              />
            </LayoutItem>
            <LayoutItem>
              <Heading type="h3">Challenges</Heading>
              <Paragraph>
                <ul className="my-2 flex gap-2 flex-col">
                  <li>
                    <b>Stale data issues:</b> Users frequently saw outdated
                    information due to lack of automatic refetching.
                  </li>
                  <li>
                    <b>Excessive API calls:</b> Redundant network requests were
                    being made, leading to performance degradation and
                    unnecessary server load.
                  </li>
                  <li>
                    <b>Complex state management: </b> Managing API state with
                    useState, useEffect, and useReducer required excessive
                    boilerplate code.
                  </li>
                  <li>
                    <b>Side effects: </b> useEffect was a source of numerous
                    difficult-to-trace bugs. Some effects were written directly
                    in components rather than abstracted to custom hooks.
                  </li>
                  <li>
                    <b>Difficult cache invalidation:</b> Implementing caching
                    and refetching logic was error-prone and inconsistent or
                    impossible.
                  </li>
                </ul>
              </Paragraph>
            </LayoutItem>
          </Layout>
          <Layout columns={1}>
            <LayoutItem>
              <Paragraph className="text-center">
                To address these challenges, I introduced React Query into the
                project, replacing manual API state management and caching
                logic. React Query provided an elegant way to manage
                server-state data efficiently.
              </Paragraph>
            </LayoutItem>
          </Layout>
          <Layout columns={2}>
            <LayoutItem>
              <Heading type="h3">Results & Benefits</Heading>
              <Paragraph>
                <ul className="my-2 flex gap-2 flex-col">
                  <li>
                    <b>Reduced API calls:</b> React Query caches responses,
                    significantly decreasing redundant network requests. During
                    render - if multiple components request the same data - API
                    calls are automatically deduplicated.
                  </li>
                  <li>
                    <b>No useContext:</b> The need for useContext was removed,
                    greatly reducing unnecessary rerendering.
                  </li>
                  <li>
                    <b>Improved data consistency: </b> Automatic refetching
                    ensures users always see fresh data.
                  </li>
                  <li>
                    <b>Skeletons: </b> The implementation of skeletons became
                    trivial. It was easy to identfy if data was undefined,
                    fresh, or stale. Suitable skeletons or animations now make
                    it easy to indicate to the user what is happening in
                    real-time.
                  </li>
                  <li>
                    <b>Simplified state management:</b> Eliminated unnecessary
                    reducer logic, led to cleaner, more maintainable code. A
                    simple repeatable pattern was established, allowing new code
                    to be authored quickly.
                  </li>
                  <li>
                    <b> Enhanced user experience:</b> Optimistic updates
                    provided instant UI feedback, improving perceived
                    performance. For example, liking or commenting on a post is
                    instantaneous and any failures would later result in a
                    roll-back.
                  </li>
                </ul>
              </Paragraph>
            </LayoutItem>
            <LayoutItem className="justify-center">
              <Image
                src={tt2devices}
                alt={`TT2 app images`}
                className="drop-shadow-md"
                width={500}
              />
            </LayoutItem>
          </Layout>
          <Layout columns={1}>
            <LayoutItem>
              <Heading type="h3">Conclusion</Heading>
              <Paragraph>
                Migrating to React Query revolutionized the state management
                strategy of the web application. I improved performance, reduced
                complexity and enhanced the user experience by leveraging its
                powerful caching, background refetching, mutation handling
                capabilities and Optimistic updates. React Query is now a key
                part of the teach.io development stack.
              </Paragraph>
            </LayoutItem>
          </Layout>
        </div>
      </Section>

      <Section alternativeBackground>
        <Heading type="h2">Integrations</Heading>
        <Subtitle type="M">
          During my time at Teach.io I integrated multiple external services to
          implement the following main features:
        </Subtitle>
        <Layout columns={1}>
          <Layout columns={2}>
            <LayoutItem>
              <Heading type="h3">Zoom</Heading>
              <Paragraph>
                <>
                  Teach.io has an app on the Zoom Market Place that allows
                  students and teachers to create and attend meetings from
                  within the Teach.io calendar app.
                  <a href="https://marketplace.zoom.us/apps/WPObZ8yYQI2hvFaVp-Jetg">
                    Zoom Marketplace App
                  </a>
                </>
              </Paragraph>
            </LayoutItem>
            <LayoutItem>
              <Heading type="h3">Chargebee</Heading>
              <Paragraph>
                Chargebee handles teachers&apos; subscriptions on Teach.io .
                Teachers are able to manage, update, and cancel their own
                subscriptions in-app as well as see the status of any free
                trials or coupons.
              </Paragraph>
              <Paragraph>
                For customer service purposes, Teach.io admins can manage
                subscriptions by adding free services or updating costs.
              </Paragraph>
            </LayoutItem>
          </Layout>
          <Layout columns={2}>
            <LayoutItem>
              <Image
                src={tt2}
                alt={`TT2 mobile app images`}
                className="drop-shadow-md mb-8"
                width={1024}
              />
            </LayoutItem>
            <LayoutItem>
              <Heading type="h3">Zapier</Heading>
              <Paragraph>
                To provide better marketing options for teachers, the
                http://teach.io Zapier app was introduced. Now, student creation
                can be automated via Zapier actions, allowing teachers to sell
                courses on external platforms or sales funnels.
              </Paragraph>
            </LayoutItem>
          </Layout>
          <Layout columns={2}>
            <LayoutItem>
              <Heading type="h3">Mux</Heading>
              <Paragraph>
                Mux allows teachers to upload encrypted videos, only allowing
                students to view them via the app. This keeps their IP
                protected. Teachers are updated when the video is ready to
                review and publish the course.
              </Paragraph>
            </LayoutItem>
            <LayoutItem>
              <Heading type="h3">Stripe</Heading>
              <Paragraph>
                Teachers can add their Stripe API keys to the app. They can
                create sales pages to market courses and receive money directly.
                Various management tools are available to track sales, and
                refund customers.
              </Paragraph>
            </LayoutItem>
          </Layout>
        </Layout>
      </Section>

      <Anchor id={'contact'} />
      <Section pattern alternativeBackground>
        <ContactSection />
      </Section>
    </>
  );
}
