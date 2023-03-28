import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CaseStudy } from './CaseStudy';
import notinstagram from '/public/images/notinstagram.png';

export default {
  title: 'Organisms/CaseStudy',
  component: CaseStudy,
} as ComponentMeta<typeof CaseStudy>;

export const example: ComponentStory<typeof CaseStudy> = (args) => (
  <CaseStudy {...args} image={notinstagram} title={'Not Instagram'} href={'#'}>
    This is an example
  </CaseStudy>
);
