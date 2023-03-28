import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Section } from './Section';

export default {
  title: 'Atoms/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

export const noArgs: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>
    <p>content will go here</p>
  </Section>
);
