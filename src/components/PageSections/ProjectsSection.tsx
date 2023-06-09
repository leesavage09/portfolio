import { useAppState } from '@components/AppContext';
import { Button } from '@stories/Atoms/Button';
import { Heading } from '@stories/Atoms/Heading';
import { Layout, LayoutItem } from '@stories/Atoms/Layout';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { Subtitle } from '@stories/Atoms/Subtitle';
import { CaseStudy } from '@stories/Organisms/CaseStudy';
import Image from 'next/image';
import googlePlayBadge from '/public/images/google_play_badge.png';
import knots3dmenu from '/public/images/knots3dmenu.png';
import notinstagramsingle1 from '/public/images/notinstagramsingle1.png';
import teachio from '/public/images/teachio.png';
import tt2overview from '/public/images/tt2overview.png';

export const ProjectsSection = () => {
  const appState = useAppState();

  return (
    <>
      <Heading type="h2">Projects</Heading>
      <Subtitle type="M">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </Subtitle>
      <Layout columns={1}>
        <LayoutItem>
          <CaseStudy
            image={tt2overview}
            imageWidth={500}
            title={'Tyne Tunnel 2 Project'}
            href={'/tt2'}
          >
            <Paragraph>
              Tyne Tunnel is the most popular route for those driving to the
              North of England. The tunnel goes underneath the river Tyne and
              connects North and South Shields.
            </Paragraph>
            <Paragraph>
              A cashless free flow system was implemented in November 2021. The
              removal of barriers and physical payment booths required
              implementation of a web app payment system.
            </Paragraph>
            <span className="flex justify-center my-6">
              <Button
                primary={false}
                type="href"
                href="https://account.tt2.co.uk"
              >
                https://account.tt2.co.uk
              </Button>
            </span>
          </CaseStudy>
        </LayoutItem>

        <LayoutItem>
          <CaseStudy image={teachio} imageWidth={472} title={'Teach.io'}>
            <>
              <Paragraph>
                Teach.io is a SaaS startup that enables people to turn their
                passions into careers through a state-of-the-art, custom-built,
                learning platform.
              </Paragraph>

              {/* <Paragraph>
              It boasts a plethora of features and functionality, including a
              live messaging system (complete with browser notifications), an
              internal notification system, a course builder, profile pages, and
              lots more.
            </Paragraph> */}

              <Paragraph>
                When I joined the project, teach.io was in MVP stage with a
                small number of users. I worked on this project as a full-stack
                developer, adding new features such as Zoom and Zapier
                Integrations.
              </Paragraph>

              <span className="flex justify-center mt-6">
                <Button type="href" href="https://teach.io">
                  https://teach.io
                </Button>
              </span>

              <span className="flex justify-center mt-6">
                <Button
                  type="onClick"
                  className=""
                  onClick={() => {
                    return;
                  }}
                  disabled
                  disabledText="Case study coming soon"
                >
                  Coming Soon
                </Button>
              </span>
            </>
          </CaseStudy>
        </LayoutItem>

        <LayoutItem>
          <CaseStudy
            image={notinstagramsingle1}
            imageWidth={250}
            title={'notinstagram'}
            href={'/notinstagram'}
          >
            <Paragraph>
              Notinstagram is a pixel perfect MVP version of Instagram. I
              created notinstagram in my spare time to learn React and Ruby on
              Rails. It serves as a demonstration of my capabilities in
              createing a complex full stack aplication from scratch.
            </Paragraph>

            <span className="flex justify-center my-6">
              <Button
                type="onClick"
                primary={false}
                className="self-end mt-8"
                onClick={() => appState.setShowNotInstagram(true)}
              >
                Live Demo
              </Button>
            </span>
          </CaseStudy>
        </LayoutItem>

        <LayoutItem>
          <CaseStudy image={knots3dmenu} imageWidth={250} title={'Knots 3D'}>
            <Paragraph>
              <>
                Sailing Knots 3D is an interactive app that teaches how to tie
                the most common sailing knots. Sailing Knots 3D is the only true
                3D app available for teaching sailing knots on the Android app
                store (June 2023). This app uses the Ionic Framework and
                Three.js to create a high performance 3D PWA.
                <span className="flex justify-center">
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
                <span className="flex justify-center mb-6">
                  <Button
                    type="onClick"
                    primary={false}
                    className="self-end"
                    onClick={() => appState.setShowKnots3d(true)}
                  >
                    Live Demo
                  </Button>
                </span>
                <span className="flex justify-center mb-6">
                  <Button
                    type="onClick"
                    className=""
                    onClick={() => {
                      return;
                    }}
                    disabled
                    disabledText="Case study coming soon"
                  >
                    Coming Soon
                  </Button>
                </span>
              </>
            </Paragraph>
          </CaseStudy>
        </LayoutItem>
      </Layout>
    </>
  );
};
