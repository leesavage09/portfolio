import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CaseStudy } from './CaseStudy';
import notinstagramgroup1 from '/public/images/notinstagramgroup1.png';

export default {
  title: 'Organisms/CaseStudy',
  component: CaseStudy,
} as ComponentMeta<typeof CaseStudy>;

export const caseStudy: ComponentStory<typeof CaseStudy> = (args) => (
  <CaseStudy {...args}>{args.children}</CaseStudy>
);

caseStudy.args = {
  image: notinstagramgroup1,
  title: 'notinstagram!',
  href: '#',
  children: <>This is an example case study</>,
};
