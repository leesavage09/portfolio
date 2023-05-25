import { Button } from '@stories/Atoms/Button';
import { Chip } from '@stories/Atoms/Chip';
import { Heading } from '@stories/Atoms/Heading';
import { Layout, LayoutItem } from '@stories/Atoms/Layout';
import { Link } from '@stories/Atoms/Link';
import { OrderedList } from '@stories/Atoms/OrderedList';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { Section } from '@stories/Atoms/Section';
import Head from 'next/head';
import Image from 'next/image';
import { ContactSection } from '../components/PageSections/ContactSection';
import notinstagramgroup1 from '/public/images/notinstagramgroup1.png';
import notinstagramgroup2 from '/public/images/notinstagramgroup2.png';
import notinstagramsingle2 from '/public/images/notinstagramsingle2.png';

export default function TT2() {
  return (
    <>
      <Head>
        <title>notinstagram Case Study</title>
      </Head>
      <Section pattern className="pt-40">
        <Heading type="h1">notinstagram Case Study</Heading>
        <OrderedList
          items={[
            {
              name: 'Role',
              discription: 'Full-stack developer/Project management',
            },
            {
              name: 'Scope',
              discription: 'Demo fully featured MVP product',
            },
            {
              name: 'Timeframe',
              discription: 'Apr 2020 - June 2020',
            },
          ]}
        />
        <Button
          primary
          className="self-end"
          label={'Live Link'}
          href={'https://not--instagram.herokuapp.com/'}
        />
      </Section>
      <Section>
        <Layout columns={2}>
          <LayoutItem>
            <Heading type="h3">About notinstagram</Heading>
            <Paragraph>
              notinstagram is one of my favorite personal projects. I created a
              pixel perfect and minimally functional version of Instagram (2020
              version) as an open-source tech demo. The web app shows I can
              create a fully featured product, built to known features and
              design specifications.
            </Paragraph>
            <Paragraph>
              <>
                I started the notinstagram project with a
                <Link href="https://github.com/leesavage09/notinstagram/wiki">
                  design brief
                </Link>
                that narrows down the features for the MVP product. The design
                brief also contains{' '}
                <Link href="https://www.figma.com/proto/mPN3OAnSB9bZCmVttgZLhc/notinstagram?node-id=7-12&scaling=scale-down">
                  interactive wireframes in Figma,
                </Link>
                it considers database design, redux state shape and REST api
                design.
              </>
            </Paragraph>
            <Paragraph>
              Google has blacklisted notinstagram as a phishing site so you may
              have trouble accessing it. I take this as an acknowledgment of the
              accuracy of the implementation.
            </Paragraph>
          </LayoutItem>
          <LayoutItem className="justify-center">
            <Image
              src={notinstagramsingle2}
              alt={`notinstagram screen shots`}
              width={400}
            />
          </LayoutItem>
        </Layout>
      </Section>
      <Section>
        <Layout columns={2}>
          <LayoutItem>
            <Heading type="h3">Backend</Heading>
            <Paragraph>
              For the backend of notinstagram I used a JSON REST API, built with
              Ruby on Rails and backed by a PostgreSQL database. I chose Ruby on
              Rails for its Convention over Configuration philosophy and strict
              (MVC) architectural pattern.
            </Paragraph>
            <div className="flex flex-wrap gap-4 ">
              <Chip lable={'jbuilder'} />
              <Chip lable={'bcrypt'} />

              <Chip lable={'react-rails'} />
              <Chip lable={'aws-sdk '} />

              <Chip lable={'factory_bot_rails'} />
              <Chip lable={'faker '} />
              <Chip lable={'rspec-rails'} />
            </div>
          </LayoutItem>
          <LayoutItem>
            <Heading type="h3">Frontend</Heading>
            <Paragraph>
              notinstagram is a single page app built with React. To create more
              maintainable code, the React code is entirely written in
              functional style. For state management, I chose to use Redux, to
              keep changes predictable and traceable.
            </Paragraph>
            <div className="flex flex-wrap gap-4 ">
              <Chip lable={'React'} />
              <Chip lable={'Redux '} />

              <Chip lable={'Reduxjs/toolkit'} />
              <Chip lable={'Redux-devtools-extension '} />

              <Chip lable={'Redux-thunk'} />
              <Chip lable={'axios  '} />
            </div>
          </LayoutItem>
        </Layout>

        <Image
          src={notinstagramgroup1}
          alt={`notinstagram screen shots`}
          className="my-8"
          width={700}
        />

        <Layout columns={2}>
          <LayoutItem>
            <Heading type="h3">Design</Heading>
            <Paragraph>
              <>
                SCSS is used to style notinstagram. To create reusable styled
                components, I used SCSS in combination with
                <Link href="https://getbem.com">BEM conventions.</Link>
              </>
            </Paragraph>
          </LayoutItem>

          <LayoutItem>
            <Heading type="h3">Amazon S3</Heading>
            <Paragraph>
              To reduce the load on the backend and to reduce costs, images are
              edited on the client side and sent directly to an Amazon S3 bucket
              using presigned URLs.
            </Paragraph>
          </LayoutItem>
          <LayoutItem>
            <Heading type="h3">Live demo</Heading>
            <Paragraph>
              You can view a live demo of notinstagram. Please note that the web
              app is designed for mobile devices only. To access the demo, you
              can best use a mobile device. On desktop, you can use the mobile
              simulator in the browser DevTools.
            </Paragraph>
            <Paragraph>
              Warning: If you use Chrome or a browser with fishing protection,
              the site is flagged as a scam. I take this as a complement, as it
              looks identical to the old version of Instagram. For example, with
              Chrome you will need to click through&apos;Detail&apos;
              &apos;visit this unsafe site&apos;.
            </Paragraph>
            <Button
              primary
              label={'Live Link'}
              href={'https://not--instagram.herokuapp.com/'}
            />
          </LayoutItem>
          <LayoutItem>
            <Heading type="h3">Full documentation</Heading>
            <Paragraph>
              Full documentation on notinstagram is available on my GitHub
              account. The documentation includes more information on the above,
              multiple code examples and more screenshots.
            </Paragraph>
            <Button
              primary
              label={'GitHub'}
              href={'https://github.com/leesavage09/notinstagram#notinstagram'}
            />
          </LayoutItem>
        </Layout>
        <Image
          src={notinstagramgroup2}
          alt={`notinstagram screen shots`}
          className="my-8"
          width={700}
        />
      </Section>
      <Section id="contact" pattern>
        <ContactSection />
      </Section>
    </>
  );
}
