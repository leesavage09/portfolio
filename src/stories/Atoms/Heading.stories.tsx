import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const heading: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

heading.args = {
  type: 'h1',
  children: 'The is a Heading',
};
