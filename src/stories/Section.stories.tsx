import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Section } from './Section';

export default {
  title: 'Section',
  component: Section,
} as ComponentMeta<typeof Section>;

export const noArgs: ComponentStory<typeof Section> = () => (
  <Section>
    <p>test</p>
  </Section>
);
