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
import imageCalendar1 from '/public/images/teach/calendar1.png';
import imageCalendar2 from '/public/images/teach/calendar2.png';
import imageCalendar3 from '/public/images/teach/calendar3.png';
import imageChat1 from '/public/images/teach/chat1.png';
import imageChat2 from '/public/images/teach/chat2.png';
import imageCommunity1 from '/public/images/teach/community1.png';
import imageCommunity3 from '/public/images/teach/community3.jpg';
import imageCourse1 from '/public/images/teach/course1.png';
import imageDrip1 from '/public/images/teach/drip1.png';
// import imageCommunity2 from '/public/images/teach/community2.png';
import { Link } from '@stories/Atoms/Link';
import imageEmail1 from '/public/images/teach/email1.png';
import imageIntegrations1 from '/public/images/teach/integrations1.png';
import imageSettings1 from '/public/images/teach/settings1.png';
import imageTeach1 from '/public/images/teach/teachio1.png';
import imageTeach2 from '/public/images/teach/teachio2.png';
import imageTeach3 from '/public/images/teach/teachio3.png';
import imageTeach4 from '/public/images/teach/teachio4.png';

export default function TT2() {
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
              discription: 'Technical Lead - Full stack developer',
            },
            {
              name: 'Scope',
              discription: 'Development from MVP to a complete application',
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

      <Section alternativeBackground pattern>
        <Heading type="h3">Testimonial</Heading>
        <Paragraph>
          <i>
            <b>&quot;</b>We took a chance on Lee as we’d not worked together
            before, and he was going to be the sole developer for our project.
            So it was an important hire to get right. This chance paid off
            significantly.
            <br />
            <br />
            Lee has been a wonderful, helpful, and extremely valuable asset to
            our team over the course of the project. He has taken on a
            significant amount of technical responsibility within the product,
            and has been instrumental in completing a significant ground-up
            restructuring, and also a front end redesign. He is full of ideas,
            which are carefully planned and calculated, which clearly
            demonstrates his detail-oriented personality traits. He is able to
            follow instructions without hesitation, but if he disagrees or
            thinks there’s a better way, he is able to tell you why, and offer
            an alternative solution.
            <br />
            <br />I really enjoyed working with Lee, and I would have no
            hesitations hiring him again should the need arise.<b>&quot;</b>
          </i>
        </Paragraph>
        <Link href="https://www.linkedin.com/in/rebecca-longhurst/">
          Bex Longhurst - Chief Technology Officer - Teach.io
        </Link>
      </Section>

      <Section pattern>
        <Heading type="h2">About Teach</Heading>
        <Layout columns={2}>
          <LayoutItem className="my-auto">
            <Paragraph>
              Teach.io is an e-learning platform. When I joined the project, the
              app was a proof of concept. I implemented Teach.io as a
              Progressive Web App (PWA), enabling key features such as push
              notifications, offline access, and app installation across
              different devices. This upgrade significantly enhanced user
              engagement and accessibility, bridging the gap between web and
              native applications.
            </Paragraph>
          </LayoutItem>
          <LayoutItem className="justify-center">
            <Image
              src={imageTeach3}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md"
              width={500}
            />
          </LayoutItem>
        </Layout>
        <Layout columns={2}>
          <LayoutItem className="justify-center">
            <Image
              src={imageTeach2}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md"
              width={500}
            />
          </LayoutItem>
          <LayoutItem>
            <Paragraph>
              <>
                <b>The app consists of 4 major pillars:</b>
                <ul className="my-2 flex gap-2 flex-col">
                  <li>
                    <b>Community:</b> The Facebook-like community is the heart
                    of the app. It allows multi-media posting including Tenor
                    GIFs, emojis, likes, comments, and replies.
                  </li>
                  <li>
                    <b>Course builder:</b> Teachers can create courses with the
                    customer course builder using multi-media content, module
                    drip feed and progress tracking.
                  </li>
                  <li>
                    <b>Messaging:</b> Instantly message other members with push
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
          </LayoutItem>
        </Layout>

        <Layout columns={1}>
          <LayoutItem>
            <Paragraph>
              The app is fully functional and has all supporting features such
              as student management, group creation, avatars, personal
              preferences, security 2FA, notifications, email and more.
            </Paragraph>
            <Paragraph>
              <>
                For all features see:
                <Link href="https://teach.io/features">
                  https://teach.io/features
                </Link>
                .
              </>
            </Paragraph>
          </LayoutItem>
        </Layout>
      </Section>

      <Section alternativeBackground pattern>
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
          <Chip lable={'React Email'} />
          <Chip lable={'React Query'} />
          <Chip lable={'Formik & Yup'} />
          <Chip lable={'Tailwind'} />
        </div>
      </Section>

      <Section alternativeBackground>
        <Heading type="h2">React query state management</Heading>
        <Subtitle type="M">
          Shortly after joining the project, I encountered significant
          performance bottlenecks due to excessive API calls and unnecessarily
          complex boilerplate code. The application relied heavily on useReducer
          and React&apos;s context API.
        </Subtitle>

        <Layout columns={2}>
          <LayoutItem className="justify-center">
            <Image
              src={imageTeach4}
              alt={`Teach.io screen shot`}
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
                  being made, leading to performance degradation and unnecessary
                  server load.
                </li>
                <li>
                  <b>Complex state management: </b> Managing API state with
                  useState, useEffect, and useReducer required excessive
                  boilerplate code.
                </li>
                <li>
                  <b>Side effects: </b> useEffect was a source of numerous
                  difficult-to-trace bugs. Some effects were written directly in
                  components rather than abstracted to custom hooks.
                </li>
                <li>
                  <b>Difficult cache invalidation:</b> Implementing caching and
                  refetching logic was error-prone and inconsistent or
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
              project, replacing manual API state management and caching logic.
              React Query provided an elegant way to manage server-state data
              efficiently.
            </Paragraph>
          </LayoutItem>
        </Layout>
        <Layout columns={2}>
          <LayoutItem>
            <Heading type="h3">Results of introducing React Query</Heading>
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
                  trivial. It was easy to identfy if data was undefined, fresh,
                  or stale. Suitable skeletons or animations now make it easy to
                  indicate to the user what is happening in real-time.
                </li>
                <li>
                  <b>Simplified state management:</b> Eliminated unnecessary
                  reducer logic, led to cleaner, more maintainable code. A
                  simple repeatable pattern was established, allowing new code
                  to be authored quickly.
                </li>
                <li>
                  <b> Enhanced user experience:</b> Optimistic updates provided
                  instant UI feedback, improving perceived performance. For
                  example, liking or commenting on a post is instantaneous and
                  any failures would later result in a roll-back.
                </li>
              </ul>
            </Paragraph>
          </LayoutItem>
          <LayoutItem className="justify-center">
            <Image
              src={imageTeach1}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md"
              width={500}
            />
          </LayoutItem>
        </Layout>
        <Layout columns={1}>
          <LayoutItem>
            <Heading type="h3">Conclusion</Heading>
            <Paragraph>
              Migrating to React Query revolutionised the state management
              strategy of the web application. I improved performance, reduced
              complexity and enhanced the user experience by leveraging its
              powerful caching, background refetching, mutation handling
              capabilities and Optimistic updates. React Query is now a key part
              of the teach.io development stack.
            </Paragraph>
          </LayoutItem>
        </Layout>
      </Section>

      <Section>
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
                Teach.io has an app on the Zoom Market Place that allows
                students and teachers to create and attend meetings from within
                the Teach.io calendar app.
              </Paragraph>
              <Paragraph>
                <>
                  See the
                  <Link href="https://marketplace.zoom.us/apps/WPObZ8yYQI2hvFaVp-Jetg">
                    Zoom Marketplace App
                  </Link>
                  .
                </>
              </Paragraph>
            </LayoutItem>
            <LayoutItem>
              <Heading type="h3">Zapier</Heading>
              <Paragraph>
                To provide better marketing options for teachers, the teach.io
                Zapier app was introduced. Now, student creation can be
                automated via Zapier actions, allowing teachers to sell courses
                on external platforms or sales funnels.
              </Paragraph>
            </LayoutItem>
          </Layout>
          <Layout columns={2}>
            <LayoutItem>
              <Image
                src={imageIntegrations1}
                alt={`Teach.io screen shot`}
                className="drop-shadow-md rounded-lg overflow-hidden"
                width={1024}
              />
            </LayoutItem>
            <LayoutItem>
              <Heading type="h3">Chargebee</Heading>
              <Paragraph>
                Chargebee handles teachers&apos; subscriptions on Teach.io.
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
                Various management tools are available to track sales and refund
                customers.
              </Paragraph>
            </LayoutItem>
          </Layout>
        </Layout>
      </Section>

      <Section alternativeBackground>
        <Heading type="h2">Event system</Heading>
        <Subtitle type="M">
          Teach.io needed a reliable and scalable solution for email and push
          notifications about important events, discussions, activities within
          the app, student milestones, new course content created or unlocked by
          the drip-feed feature. The event system has to function according to a
          user&apos;s app preference.
        </Subtitle>

        <Layout columns={1}>
          <LayoutItem>
            <Paragraph>
              The challenge was to ensure notifications were sent efficiently
              and on time, without overloading the system. To achieve this, the
              below technologies were implemented.
            </Paragraph>
          </LayoutItem>
        </Layout>

        <Layout columns={2}>
          <LayoutItem>
            <Heading type="h3">Implementation</Heading>
            <Paragraph>
              <ul className="my-2 flex gap-2 flex-col">
                <li>
                  <b>Google Cloud Tasks:</b> Chosen as the event management
                  system to schedule and run tasks efficiently. This allows
                  notifications to be processed asynchronously, improving
                  performance and reliability.
                </li>
                <li>
                  <b>MongoDB:</b> Used to store event metadata, ensuring quick
                  access and retrieval of relevant event data.
                </li>
                <li>
                  <b>Express event processing middleware:</b> Middleware was
                  developed to fetch event metadata before passing the event to
                  the appropriate event handler.
                </li>
                <li>
                  <b>Express debouncing middleware:</b> Debouncing middleware
                  ensures notifications are only sent after the trigger stops
                  changing. This keeps unnecessary notifications down while
                  still keeping users informed about activity on the platform.
                </li>
                <li>
                  <b>Queue-based processing:</b> Implemented to manage server
                  load and prevent bottlenecks.
                </li>
              </ul>
            </Paragraph>
          </LayoutItem>
          <LayoutItem className="justify-center">
            <Image
              src={imageCommunity3}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={500}
            />
          </LayoutItem>
        </Layout>
        <Layout columns={2}>
          <LayoutItem className="justify-center">
            <Image
              src={imageDrip1}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={500}
            />
          </LayoutItem>
          <LayoutItem>
            <Heading type="h3">Results</Heading>
            <Paragraph>
              <ul className="my-2 flex gap-2 flex-col">
                <li>
                  <b>Improved engagement:</b> Users received timely updates,
                  leading to increased interactions within the community.
                </li>
                <li>
                  <b>Scalability:</b> The solution can handle thousands of
                  notifications daily with minimal performance overhead.
                  Analysis of the community and interesting posts are calculated
                  during night times when server load is low. A points based
                  system was implement to score relevant or interesting content.
                </li>
                <li>
                  <b>Reliability: </b> Google Cloud Tasks ensured that no
                  notifications were missed, even during high-traffic periods.
                  Automatic retries and New Relic logging was implemented to
                  monitor success.
                </li>
                <li>
                  <b>Optimized performance: </b> Offloading tasks to
                  asynchronous processing reduced server load, ensuring app
                  responsiveness.
                </li>
              </ul>
            </Paragraph>
          </LayoutItem>
        </Layout>

        <Layout columns={1}>
          <LayoutItem>
            <Paragraph>
              By leveraging cloud-based event management and a well-structured
              backend, I was able to successfully automate a notification
              system, enhancing user experience and engagement.
            </Paragraph>
          </LayoutItem>
        </Layout>
      </Section>

      <Section>
        <Heading type="h2">Block content editor</Heading>
        <Subtitle type="M">
          The HTML content editor for the course builder and course sales page
          allows teachers to create stylish sales pages, as well as useful
          course resources.
        </Subtitle>

        <Layout columns={1}>
          <LayoutItem>
            <Heading type="h3">The challenge</Heading>
            <Paragraph>
              Teach.io’s course creation and sales page management were
              initially reliant on static HTML and the markdown format,
              requiring teachers to have at least a basic understanding of
              markdown. This was a major bottleneck in content creation, as
              non-technical users struggled with formatting and structuring
              content effectively. Our goal was to provide an intuitive WYSIWYG
              editor that allowed real-time editing and customization without
              sacrificing control over the final HTML output.
            </Paragraph>
          </LayoutItem>
        </Layout>

        <Layout columns={2}>
          <LayoutItem className="justify-center">
            <Image
              src={imageCommunity1}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={500}
            />
          </LayoutItem>
          <LayoutItem>
            <Heading type="h3">Why Slate.js?</Heading>
            <Paragraph>
              Given the need for flexible, user-friendly, and extendable
              features, I chose Slate.js.
            </Paragraph>
            <Paragraph>
              <>
                Slate.js is a framework for building a customizable block editor
                in React and stood out for several reasons:
                <ul className="my-2 flex gap-2 flex-col">
                  <li>
                    <b>Highly customizable:</b> Unlike traditional WYSIWYG
                    editors, Slate.js provides a lower-level API to define the
                    exact behaviour needed. Later, when we needed the slate
                    editor in the community, I was able to add mentions easily.
                  </li>
                  <li>
                    <b>React-friendly:</b> Since Teach.io’s front end was built
                    with React, integrating Slate.js felt natural.
                  </li>
                  <li>
                    <b>Rich text capabilities: </b> It allowed me to implement
                    features like inline formatting, media embedding, and custom
                    blocks.
                  </li>
                  <li>
                    <b>Schema enforcement: </b> Ensuring structured content
                    without breaking HTML semantics was crucial.
                  </li>
                </ul>
              </>
            </Paragraph>
          </LayoutItem>
        </Layout>

        <Layout columns={2}>
          <LayoutItem>
            <Heading type="h3">Implementation</Heading>
            <Paragraph>
              To build the editor, I configured Slate.js to provide a block
              editing experience that felt seamless and intuitive. I structured
              the system to handle different content types, such as headings,
              paragraphs, images and mentions, ensuring users could easily
              insert and format content.
            </Paragraph>
            <Paragraph>
              One of the most powerful aspects of Slate.js was the ability to
              customize the editor’s behaviour by defining specific rules for
              content formatting. This allowed me to enforce consistency while
              still giving users creative control over their course materials.
            </Paragraph>
            <Paragraph>
              Additionally, I implemented a toolbar with essential formatting
              options, including bold and italic text, and list creation. By
              leveraging Slate.js’s flexibility, I ensured that users could
              paste and edit their content in a way that mirrored a traditional
              word processor while maintaining the underlying structure needed
              for clean HTML output.
            </Paragraph>
          </LayoutItem>
          <LayoutItem className="justify-center">
            <Image
              src={imageTeach1}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md"
              width={500}
            />
          </LayoutItem>
        </Layout>

        <Layout columns={2}>
          <LayoutItem className="justify-center">
            <Image
              src={imageCourse1}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={500}
            />
          </LayoutItem>
          <LayoutItem>
            <Heading type="h3">Storing and retrieving content</Heading>
            <Paragraph>
              Instead of storing raw HTML, I opted to save the structured JSON
              output generated by Slate.js. This approach provided flexibility
              in rendering content dynamically and prevented issues with
              malformed HTML. When content needed to be displayed, it was
              converted into HTML while maintaining its intended structure and
              styling.
            </Paragraph>
            <Paragraph>
              This method also allowed for seamless integration with our
              database, ensuring that course content and sales pages remained
              organized and easy to update. It also meant I could introduce new
              content types and features over time without requiring significant
              overhauls to the system.
            </Paragraph>
          </LayoutItem>
        </Layout>

        <Layout columns={1}>
          <LayoutItem>
            <Heading type="h3">The outcome</Heading>
            <Paragraph>
              With the new CMS, course creators at Teach.io were able to build,
              update, and manage content effortlessly.
            </Paragraph>
            <Paragraph>
              Slate.js proved to be a powerful tool in the Teach.io stack,
              enabling a custom editing experience tailored to Teach.io’s needs.
              By leveraging its flexibility, I transformed how courses and sales
              pages were managed, ultimately improving both teacher efficiency
              and learner engagement.
            </Paragraph>
          </LayoutItem>
        </Layout>
      </Section>

      <Section alternativeBackground>
        <Heading type="h2">The calendar app</Heading>
        <Subtitle type="M">
          The calendar is one of the 4 cornerstones of the app. It supports time
          zones and repeating events in an RFC iCal format.
        </Subtitle>

        <Layout columns={1}>
          <LayoutItem>
            <Heading type="h3">Overview</Heading>
            <Paragraph>
              I designed and implemented a robust calendar application within
              Teach.io.
            </Paragraph>
          </LayoutItem>
        </Layout>

        <Layout columns={2}>
          <LayoutItem className="justify-center">
            <Image
              src={imageCalendar1}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={500}
            />
          </LayoutItem>
          <LayoutItem>
            <Heading type="h3">Challenges</Heading>
            <Paragraph>
              <ul className="my-2 flex gap-2 flex-col">
                <li>
                  <b>Handling time zones correctly:</b> Given that users were
                  spread across different time zones, ensuring that events
                  appeared at the correct local time was critical.
                </li>
                <li>
                  <b>Implementing recurring events:</b> Recurring event rules
                  needed to be flexible (daily, weekly, monthly, custom
                  intervals) and adhere to iCalendar’s RRULE specification.
                </li>
                <li>
                  <b>Exceptions: </b> Editing of one repeated event or edit all
                  events after a date.
                </li>
                <li>
                  <b>iCalendar (RFC 5545) compliance: </b> The calendar needed
                  to generate valid .ics files that can be read by external
                  services like Google Calendar and Outlook.
                </li>
              </ul>
            </Paragraph>
          </LayoutItem>
        </Layout>

        <Layout columns={2}>
          <LayoutItem>
            <Heading type="h3">Time zone management</Heading>
            <Paragraph>
              To handle time zones effectively, I used the date-fns library.
              Events were stored in UTC in the database, and time zone
              conversion was done dynamically based on the user’s location.
            </Paragraph>
            <Heading type="h3">Recurring events with RRULE</Heading>
            <Paragraph>
              I used the rrule.js library to generate recurring event rules. The
              backend stored recurrence rules in the database as per the iCal
              standard.
            </Paragraph>
            <Heading type="h3">Generating iCalendar (.ics) files</Heading>
            <Paragraph>
              To allow users to export events, I generated .ics files using
              ical-generator in Node.js.
            </Paragraph>
          </LayoutItem>
          <LayoutItem className="justify-center">
            <Image
              src={imageCalendar3}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={200}
            />
          </LayoutItem>
        </Layout>

        <Layout columns={2}>
          <LayoutItem className="justify-center">
            <Image
              src={imageCalendar2}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={500}
            />
          </LayoutItem>
          <LayoutItem>
            <Heading type="h3">Results</Heading>
            <Paragraph>
              <ul className="my-2 flex gap-2 flex-col">
                <li>
                  <b>Time Zones:</b> The calendar successfully handles time
                  zones, ensuring events are displayed correctly worldwide.
                </li>
                <li>
                  <b>Recurring events:</b> Recurring events are flexible and
                  fully customizable by users.
                </li>
                <li>
                  <b>Import and export:</b> iCalendar export and import
                  functionality enables seamless integration with external
                  services.
                </li>
                <li>
                  <b>Scalability:</b> The system is scalable, supporting
                  thousands of concurrent users.
                </li>
                <li></li>
              </ul>
            </Paragraph>
          </LayoutItem>
        </Layout>

        <Layout columns={1}>
          <LayoutItem>
            <Paragraph>
              By building a custom calendar the app is fully styled and tailored
              to the needs of Teach.io. I leveraged standardized protocols and
              robust libraries to build a highly functional and user-friendly
              calendar for Teach.io. This enhanced scheduling efficiency for
              educators and learners alike.
            </Paragraph>
          </LayoutItem>
        </Layout>
      </Section>

      <Section>
        <Heading type="h2">Real-time messaging & notifications</Heading>
        <Subtitle type="M">
          I implemented real-time messaging and notifications in teach.io using
          Socket.io. The goal was to create an instant and seamless
          communication experience for users, similar to what you’d expect in
          modern chat applications.
        </Subtitle>

        <Layout columns={2}>
          <LayoutItem className="justify-center">
            <Image
              src={imageChat2}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={500}
            />
            <span className="my-4" />
            <Image
              src={imageChat1}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={500}
            />
          </LayoutItem>
          <LayoutItem>
            <Heading type="h3">The challenge</Heading>
            <Paragraph>
              Traditional web applications rely on repeated requests to the
              server to check for new messages or updates. This approach is
              inefficient and results in stale data.
            </Paragraph>
            <Heading type="h3">The solution</Heading>
            <Paragraph>
              I integrated Socket.io, a powerful real-time communication
              library, into the React frontend and an Express backend. This
              allows messages and notifications to be delivered instantly - as
              soon as they are sent.
            </Paragraph>
            <Heading type="h3">The impact</Heading>
            <Paragraph>
              This implementation significantly improved the user experience,
              making communication smooth and real-time. Users are able to see
              when others are online. However, this is controllable via user
              preferences.
            </Paragraph>
          </LayoutItem>
        </Layout>
      </Section>

      <Section alternativeBackground>
        <Heading type="h2">Email templating</Heading>
        <Subtitle type="M">
          Email templating in web applications can be a particularly tricky
          challenge due to several key factors. I encountered these difficulties
          when working on email templates for Teach.io.
        </Subtitle>

        <Layout columns={2}>
          <LayoutItem>
            <Paragraph>
              <>
                <Heading type="h3">Challenges</Heading>
                <ul className="my-2 flex gap-2 flex-col">
                  <li>
                    <b>Email client incompatibilities:</b> Different email
                    clients (like Gmail, Outlook, and Apple Mail) render emails
                    differently.
                  </li>
                  <li>
                    <b>CSS support:</b> Many email clients have limited or
                    outdated support for CSS. Some won’t recognize newer CSS
                    properties or media queries, making responsive email design
                    challenging.
                  </li>
                  <li>
                    <b>Cross-device optimization: </b> Emails need to look good
                    on various devices. This requires careful attention to
                    detail in structuring the layout and the styles.
                  </li>

                  <li>
                    <b>Testing & maintenance: </b> Since emails are sent to a
                    wide range of users across different devices and email
                    clients, extensive testing is needed to ensure that the
                    design displays consistently.
                  </li>
                </ul>
              </>
            </Paragraph>
          </LayoutItem>
          <LayoutItem className="justify-center">
            <Image
              src={imageSettings1}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={500}
            />
          </LayoutItem>
        </Layout>

        <Layout columns={2}>
          <LayoutItem className="justify-center">
            <Image
              src={imageEmail1}
              alt={`Teach.io screen shot`}
              className="drop-shadow-md rounded-lg overflow-hidden"
              width={500}
            />
          </LayoutItem>
          <LayoutItem>
            <Heading type="h3">The solution</Heading>
            <Paragraph>
              I found that React Email is a powerful tool to improve the process
              by offering a solution that addressed many of the traditional
              pitfalls of email templating.
            </Paragraph>

            <Paragraph>
              <>
                Here’s why I used React Email to implement a robust email
                templating solution for teach.io:
                <ul className="my-2 flex gap-2 flex-col">
                  <li>
                    <b>Component-based design:</b> React Email allows for email
                    templates to be built using reusable components. Each
                    component can be individually styled and tested, making
                    development faster and more organized.
                  </li>
                  <li>
                    <b>Compatibility:</b> React email provides a set of
                    pre-configured strategies and templates that address
                    specific problems encountered in different email clients.
                    This reduced the amount of manual tweaking and testing
                    required to ensure emails look good in various environments.
                  </li>
                  <li>
                    <b>Avoiding raw HTML editing: </b> One of the most
                    significant challenges with traditional email templating is
                    the need to manually edit raw HTML. React Email abstracted
                    that away, allowing me to focus on building structure and
                    logic.
                  </li>
                  <li>
                    <b>Optimized for testing and debugging: </b> React Email
                    provides tools for previewing email templates, making it
                    easier to debug issues related to rendering, responsiveness,
                    and compatibility.
                  </li>
                </ul>
              </>
            </Paragraph>
          </LayoutItem>
        </Layout>

        <Layout columns={1}>
          <LayoutItem>
            <Heading type="h3">Results</Heading>
            <Paragraph>
              By using React Email, I was able to streamline the email template
              development process. It’s a modern solution that simplifies the
              traditionally complex task of email templating, making it more
              efficient and less error-prone.
            </Paragraph>
          </LayoutItem>
        </Layout>
      </Section>

      <Anchor id={'contact'} />
      <Section alternativeBackground pattern>
        <ContactSection />
      </Section>
    </>
  );
}
