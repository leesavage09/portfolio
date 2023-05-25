import { Chip } from '@stories/Atoms/Chip';
import { Heading } from '@stories/Atoms/Heading';
import { Layout } from '@stories/Atoms/Layout';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { Subtitle } from '@stories/Atoms/Subtitle';

export const AboutSection = () => (
  <>
    <Heading type="h2">About Me</Heading>
    <Subtitle type="M">
      Here you will find more information about me, what I do, and my skills and
      the technoliges I have used recently
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
                I&apos;m open to Job opportunities where I can contribute, learn
                and grow. If you have a good opportunity that matches my skills
                and experience then don&apos;t hesitate to contact me.
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
  </>
);
