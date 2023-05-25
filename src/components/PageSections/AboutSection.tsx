import { Chip } from '@stories/Atoms/Chip';
import { Heading } from '@stories/Atoms/Heading';
import { Layout, LayoutItem } from '@stories/Atoms/Layout';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { Subtitle } from '@stories/Atoms/Subtitle';

export const AboutSection = () => (
  <>
    <Heading type="h2">About Me</Heading>
    <Subtitle type="M">
      Here you will find more information about me, what I do, and my skills and
      the technoliges I have used recently
    </Subtitle>
    <Layout columns={2}>
      <LayoutItem>
        <Heading type="h3">Me</Heading>
        <Paragraph>
          I am a senior full-stack developer, experienced in numerous languages
          such as PHP, Java, Python, Ruby, C, C#. However I have grown to love
          JavaScript warts and all. I am dedicated to creating and maintaining
          JavaScript SAAS and PWAs aplications.
        </Paragraph>
        <Paragraph>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </Paragraph>
      </LayoutItem>
      <LayoutItem>
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
      </LayoutItem>
    </Layout>
  </>
);
