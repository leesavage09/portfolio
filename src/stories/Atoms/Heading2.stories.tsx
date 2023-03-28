import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading2 } from './Heading2';

export default {
  title: 'Atoms/Heading 2',
  component: Heading2,
} as ComponentMeta<typeof Heading2>;

export const noArgs: ComponentStory<typeof Heading2> = () => (
  <Heading2>The is the heading</Heading2>
);
