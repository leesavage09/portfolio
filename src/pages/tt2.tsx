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
import { ContactSection } from '../components/PageSections/ContactSection';
import tt2 from '/public/images/tt2.png';
import tt2devices from '/public/images/tt2devices.png';
import tt2devices2 from '/public/images/tt2devices2.png';

export default function TT2() {
  return (
    <>
      <Head>
        <title>TT2 Case Study</title>
      </Head>
      <Section pattern className="pt-28 md:pt-36 lg:pt-40">
        <Heading type="h1">Tyne Tunnel 2 Case Study</Heading>
        <OrderedList
          items={[
            {
              name: 'Client',
              discription: 'Land digital agency',
              href: 'https://www.landdigital.agency/',
            },
            {
              name: 'Role',
              discription: 'Freelance Front-end Expert',
            },
            {
              name: 'Scope',
              discription: 'Large monorepo with multiple user interfaces',
            },
            {
              name: 'Timeframe',
              discription: 'Dec 2021 - Apr 2023',
            },
          ]}
        />
        <Button
          primary
          className="self-end mt-8"
          label={'Live Link'}
          href={'https://account.tt2.co.uk/'}
        />
      </Section>
      <Section>
        <Layout columns={2}>
          <LayoutItem>
            <Heading type="h2">About Tyne Tunnel</Heading>
            <Paragraph>
              Tyne Tunnel is the most popular route for those driving to the
              North of England. The tunnel goes underneath the river Tyne and
              connects North and South Shields.
            </Paragraph>
            <Paragraph>
              First opened in 1967 as a single lane tunnel in each direction,
              the tunnel was expanded to a dual carriageway in 2011. Nowadays,
              the tunnel facilitates over 60,000 journeys each day.
            </Paragraph>
            <Paragraph>
              A cashless free flow system was implemented in November 2021. The
              removal of barriers and physical payment booths required
              implementation of a web app payment system.
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
      </Section>
      <Section>
        <Heading type="h2">Technologies used</Heading>
        <div className="flex flex-wrap gap-4 ">
          <Chip lable={'Agile Scrum'} />
          <Chip lable={'Gitflow'} />

          <Chip lable={'ClickUp'} />
          <Chip lable={'Jira'} />

          <Chip lable={'Babel'} />
          <Chip lable={'Vite'} />
          <Chip lable={'TypeScript'} />
          <Chip lable={'React'} />

          <Chip lable={'Eslint'} />
          <Chip lable={'SASS'} />
          <Chip lable={'Tailwind'} />

          <Chip lable={'URQL'} />
          <Chip lable={'GraphQL'} />

          <Chip lable={'Formik'} />
          <Chip lable={'Yup'} />
          <Chip lable={'Storybook'} />
          <Chip lable={'Ant design'} />

          <Chip lable={'Jest'} />
          <Chip lable={'Cypress'} />
          <Chip lable={'React Testing Library'} />
        </div>
      </Section>
      <Section>
        <Heading type="h2">Multiple front ends</Heading>
        <Subtitle type="M">
          I worked as the lead front-end developer on multiple front ends.
        </Subtitle>
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
            <Heading type="h3">Customer Web app</Heading>
            <Paragraph>
              The customer facing front end is a responsive web app. Customers
              are able to sign in, view their journeys, pay for tolls manage
              vehicles and top-up their account.
            </Paragraph>
            <Heading type="h3">Head office reporting</Heading>
            <Paragraph>
              The front end of head office reporting provides a view on several
              statistics for tunnel usage, payments, UTN charges and more. It
              also offers the possibility to export data.
            </Paragraph>
            <Heading type="h3">Customer service</Heading>
            <Paragraph>
              The back-office for the customer service facilitates speedy,
              informative, one-touch responses to customers, to enabling team
              members to exceed internal KPIs.
            </Paragraph>
          </LayoutItem>
        </Layout>
      </Section>
      <Section>
        <Heading type="h2">Work Completed</Heading>
        <Subtitle type="M">
          Due to the large scope of the project, continuous updates and ongoing
          improvements were necessary. Improvements like reduction of technical
          debt, implementation of features, redesigns, and improvements of user
          experience.
        </Subtitle>
        <Image
          src={tt2devices2}
          alt={`TT2 mobile app images`}
          className="drop-shadow-md mb-8"
          width={1024}
        />
        <Layout columns={1}>
          <Layout columns={2}>
            <LayoutItem>
              <Heading type="h3">Stripe implementation</Heading>
              <Paragraph>
                When I joined Land Digital agency on the Tyne Tunnel 2 Project,
                WorldPay was the payment provider. I replaced WorldPay with a
                customized Stripe check-out.
              </Paragraph>
            </LayoutItem>
            <LayoutItem>
              <Heading type="h3">Authentication</Heading>
              <Paragraph>
                I refactored front end authentication logic, simplifying a
                customized authentication/authorization component. The component
                handled masquerade tokens allowing telephone support agents
                access to user accounts.
              </Paragraph>
            </LayoutItem>
          </Layout>
          <Layout columns={2}>
            <LayoutItem>
              <Heading type="h3">Migration to React router 6</Heading>
              <Paragraph>
                To clarify design decisions and help future developers maintain
                the code base, I refactored and simplified application routing
                with a migration from React router 5 to React router 6. This
                included modifications of the use and structure of React 18
                suspense API and fallback components.
              </Paragraph>
            </LayoutItem>
            <LayoutItem>
              <Heading type="h3">Testing</Heading>
              <Paragraph>
                Because of the large number of users, many implemented key
                features were backed-up with multi-layered (Snapshot, Unit,
                Integration and E2E) testing for bug-free development.
              </Paragraph>
            </LayoutItem>
          </Layout>
        </Layout>
      </Section>
      <Anchor id={'contact'} />
      <Section pattern>
        <ContactSection />
      </Section>
    </>
  );
}
