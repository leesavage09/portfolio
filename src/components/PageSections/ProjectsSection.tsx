import { Heading } from '@stories/Atoms/Heading';
import { Layout, LayoutItem } from '@stories/Atoms/Layout';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { Subtitle } from '@stories/Atoms/Subtitle';
import { CaseStudy } from '@stories/Organisms/CaseStudy';
import notinstagram from '/public/images/notinstagram.png';
import tt2overview from '/public/images/tt2overview.png';

export const ProjectsSection = () => (
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
          title={'Tyne Tunnel 2 Project'}
          href={'/tt2'}
        >
          <Paragraph>
            Tyne Tunnel is the most popular route for those driving to the North
            of England. The tunnel goes underneath the river Tyne and connects
            North and South Shields.
          </Paragraph>
          <Paragraph>
            A cashless free flow system was implemented in November 2021. The
            removal of barriers and physical payment booths required
            implementation of a web app payment system.
          </Paragraph>
        </CaseStudy>
      </LayoutItem>

      <LayoutItem>
        <CaseStudy
          image={notinstagram}
          title={'Not Instagram'}
          href={'/notinstagram'}
        >
          <Paragraph>
            Notinstagram is a pixel perfect MVP version of Instagram. I created
            not instagram in my spare time to learn React and Ruby on Rails. It
            serves as a demonstration of my capabilities in createing a complex
            full stack aplication from scratch.
          </Paragraph>
        </CaseStudy>
      </LayoutItem>
    </Layout>
  </>
);
