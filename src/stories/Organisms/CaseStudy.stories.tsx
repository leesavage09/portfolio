import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CaseStudy } from './CaseStudy';
import notinstagram from '/public/images/notinstagram.png';

export default {
  title: 'Organisms/CaseStudy',
  component: CaseStudy,
} as ComponentMeta<typeof CaseStudy>;

export const caseStudy: ComponentStory<typeof CaseStudy> = (args) => (
  <CaseStudy {...args}>{args.children}</CaseStudy>
);

caseStudy.args = {
  image: notinstagram,
  title: 'Not Instagram!',
  href: '#',
  children: <>This is an example case study</>,
};
