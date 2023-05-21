import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Section } from './Section';

export default {
  title: 'Atoms/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

export const section: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>{args.children}</Section>
);

section.args = {
  children: <p>This is some content</p>,
  pattern: true,
};
