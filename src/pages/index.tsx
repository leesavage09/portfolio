import { Button } from '@stories/Atoms/Button';
import { Chip } from '@stories/Atoms/Chip';
import { Heading } from '@stories/Atoms/Heading';
import { Layout } from '@stories/Atoms/Layout';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { ScrollIndicator } from '@stories/Atoms/ScrollIndicator';
import { Section } from '@stories/Atoms/Section';
import { Subtitle } from '@stories/Atoms/Subtitle';
import { CaseStudy } from '@stories/Organisms/CaseStudy';
import Head from 'next/head';
import { Contact } from './components/Contact';
import notinstagram from '/public/images/notinstagram.png';
import tt2overview from '/public/images/tt2overview.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Developer | Lee Savage</title>
      </Head>
      <Section id="home" className="h-screen" pattern>
        <Heading type="h1">
          HEY, I&apos;M <span className="text-primary">Lee Savage</span>
        </Heading>
        <Subtitle type="L">
          A JavaScript focused web developer that builds frontend and backend
          applications
        </Subtitle>
        <Button primary label={'Projects'} scrollTo={'projects'} />
        <ScrollIndicator />
      </Section>
      <Section id="about">
        <Heading type="h2">About Me</Heading>
        <Subtitle type="M">
          Here you will find more information about me, what I do, and my skills
          and the technoliges I have used recently
        </Subtitle>
        <Layout
          columns={2}
          elements={[
            {
              className: '',
              element: (
                <>
                  <Heading type="h3">Me</Heading>
                  <Paragraph>
                    I&apos;m open to Job opportunities where I can contribute,
                    learn and grow. If you have a good opportunity that matches
                    my skills and experience then don&apos;t hesitate to contact
                    me.
                  </Paragraph>
                </>
              ),
            },
            {
              className: '',
              element: (
                <>
                  <Heading type="h3">Favorite Technologies</Heading>
                  <div className="flex flex-wrap gap-4 ">
                    <Chip lable={'SAAS'} />
                    <Chip lable={'JavaScript'} />
                    <Chip lable={'Typescript'} />
                    <Chip lable={'React'} />
                    <Chip lable={'Next.js'} />
                    <Chip lable={'Express'} />
                    <Chip lable={'Tailwind'} />
                    <Chip lable={'HTML'} />
                    <Chip lable={'CSS'} />
                    <Chip lable={'Git'} />
                  </div>
                </>
              ),
            },
          ]}
        />
      </Section>
      <Section id="projects">
        <Heading type="h2">Projects</Heading>
        <Subtitle type="M">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </Subtitle>
        <Layout
          columns={1}
          elements={[
            {
              className: '',
              element: (
                <>
                  <CaseStudy
                    image={tt2overview}
                    title={'Tyne Tunnel 2 Project'}
                    href={'/tt2'}
                  >
                    <Paragraph>
                      Tyne Tunnel is the most popular route for those driving to
                      the North of England. The tunnel goes underneath the river
                      Tyne and connects North and South Shields.
                    </Paragraph>
                    <Paragraph>
                      A cashless free flow system was implemented in November
                      2021. The removal of barriers and physical payment booths
                      required implementation of a web app payment system.
                    </Paragraph>
                  </CaseStudy>
                </>
              ),
            },
            {
              className: '',
              element: (
                <>
                  <CaseStudy
                    image={notinstagram}
                    title={'Not Instagram'}
                    href={'#'}
                  >
                    <Paragraph>
                      Notinstagram is a pixel perfect MVP version of Instagram.
                      I created not instagram in my spare time to learn React
                      and Ruby on Rails. It serves as a demonstration of my
                      capabilities in createing a complex full stack aplication
                      from scratch.
                    </Paragraph>
                  </CaseStudy>
                </>
              ),
            },
          ]}
        />
      </Section>
      <Section pattern id="contact">
        <Contact />
      </Section>
    </>
  );
}
