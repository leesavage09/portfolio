import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading3 } from './Heading3';

export default {
  title: 'Atoms/Heading 3',
  component: Heading3,
} as ComponentMeta<typeof Heading3>;

export const noArgs: ComponentStory<typeof Heading3> = () => (
  <Heading3>The is the heading</Heading3>
);
