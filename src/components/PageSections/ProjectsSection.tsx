import { useAppState } from '@components/AppContext';
import { Button } from '@stories/Atoms/Button';
import { Heading } from '@stories/Atoms/Heading';
import { Layout, LayoutItem } from '@stories/Atoms/Layout';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { Section } from '@stories/Atoms/Section';
import { Subtitle } from '@stories/Atoms/Subtitle';
import Image from 'next/image';
import googlePlayBadge from '/public/images/google_play_badge.png';
import knots3dmenu from '/public/images/knots3dmenu.png';
import notinstagramsingle1 from '/public/images/notinstagramsingle1.png';
import teachio from '/public/images/teach/teachio.png';
import tt2overview from '/public/images/tt2overview.png';
import GithubSvg from '/public/vector/github-mark-white.svg';

export const ProjectsSection = () => {
  const appState = useAppState();

  return (
    <>
      <Section>
        <Heading type="h2">Projects</Heading>
        <Subtitle type="M">
          Here you will find some of the projects that I have created or
          contributed to significantly.
        </Subtitle>
      </Section>

      <Section>
        <LayoutItem>
          <Heading type="h3" className="normal-case">
            Teach.io
          </Heading>
          <Layout columns={2}>
            <LayoutItem className="justify-start ">
              <Image
                src={teachio}
                alt={`Teach.io image`}
                className="drop-shadow-md mb-6"
                width={472}
              />
            </LayoutItem>

            <LayoutItem>
              <>
                <Paragraph className="mb-2">
                  Teach.io is a SaaS startup that enables people to turn their
                  passions into careers through a state-of-the-art,
                  custom-built, learning platform.
                </Paragraph>

                <Paragraph className="mb-2">
                  I joined the project in an early MVP stage. I worked on this
                  project for over two years as the lead developer.
                </Paragraph>

                <Button
                  type="href"
                  primary
                  className="normal-case mt-6"
                  href="/teach"
                >
                  Read Case Study
                </Button>
              </>
            </LayoutItem>
          </Layout>
        </LayoutItem>
      </Section>

      <Section alternativeBackground>
        <LayoutItem>
          <Heading type="h3" className="normal-case">
            Tyne Tunnel 2 Project
          </Heading>
          <Layout columns={2}>
            <LayoutItem className="justify-start ">
              <Image
                src={tt2overview}
                alt={`Tyne Tunnel 2 Project`}
                className="drop-shadow-md mb-6"
                width={500}
              />
            </LayoutItem>

            <LayoutItem>
              <>
                <Paragraph className="mb-2">
                  Tyne Tunnel is the most popular route for those driving to the
                  North of England. The tunnel goes underneath the river Tyne
                  and connects North and South Shields.
                </Paragraph>

                <Paragraph className="mb-2">
                  A cashless free flow system was implemented in November 2021.
                  The removal of barriers and physical payment booths required
                  implementation of a web app payment system.
                </Paragraph>

                <Button
                  type="href"
                  primary
                  className="normal-case mt-6"
                  href="/tt2"
                >
                  Read Case Study
                </Button>
              </>
            </LayoutItem>
          </Layout>
        </LayoutItem>
      </Section>

      <Section>
        <LayoutItem>
          <Heading type="h3" className="normal-case">
            Knots 3D
          </Heading>
          <Layout columns={2}>
            <LayoutItem className="justify-start ">
              <Image
                src={knots3dmenu}
                alt={`Knots 3D`}
                className="drop-shadow-md mb-6"
                width={250}
              />
            </LayoutItem>
            <LayoutItem>
              <Paragraph className="mb-2">
                <>
                  Sailing Knots 3D is an interactive app that teaches how to tie
                  the most common sailing knots. Sailing Knots 3D is the only
                  true 3D app available for teaching sailing knots on the
                  Android app store (June 2023). This app uses the Ionic
                  Framework and Three.js to create a high performance 3D PWA.
                  <span className="flex justify-center mb-6">
                    <a
                      className="hover:-translate-y-1 duration-300"
                      href="https://play.google.com/store/apps/details?id=uk.co.leesavage.CCknots&gl=GB&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                    >
                      <Image
                        height={64}
                        alt="Get it on Google Play"
                        src={googlePlayBadge}
                      />
                    </a>
                  </span>
                  <Button
                    primary
                    className="flex gap-4 items-center bg-black text-white mx-auto w-max"
                    type="href"
                    href="https://github.com/leesavage09/CCKnots"
                  >
                    <GithubSvg width="25px" height="25px" />
                    Source code
                  </Button>
                  <div className="text-sm text-center ">
                    * This app can be run locally as a PWA
                  </div>
                </>
              </Paragraph>
            </LayoutItem>
          </Layout>
        </LayoutItem>
      </Section>

      <Section alternativeBackground>
        <LayoutItem>
          <Heading type="h3" className="normal-case">
            notinstagram
          </Heading>
          <Layout columns={2}>
            <LayoutItem className="justify-start ">
              <Image
                src={notinstagramsingle1}
                alt={`notinstagram`}
                className="drop-shadow-md mb-6"
                width={250}
              />
            </LayoutItem>

            <LayoutItem>
              <>
                <Paragraph className="mb-2">
                  Notinstagram is a MVP version of Instagram. I created
                  notinstagram in my spare time to learn and transition from
                  Java into a JS PWA/Web development career.
                </Paragraph>

                <Paragraph className="mb-2">
                  Built with React and Ruby on Rails, it serves as a
                  demonstration of my capabilities in creating a complex, pixel
                  perfect, full stack application from scratch.
                </Paragraph>

                <Button
                  type="href"
                  primary
                  className="normal-case my-6"
                  href="/notinstagram"
                >
                  Read Case Study
                </Button>

                <Button
                  primary
                  className="flex gap-4 items-center bg-black text-white mx-auto w-max"
                  type="href"
                  href={
                    'https://github.com/leesavage09/notinstagram#notinstagram'
                  }
                >
                  <GithubSvg width="25px" height="25px" />
                  README.md
                </Button>
              </>
            </LayoutItem>
          </Layout>
        </LayoutItem>
      </Section>
    </>
  );
};
