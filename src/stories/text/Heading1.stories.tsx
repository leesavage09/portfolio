import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading1 } from './Heading1';

export default {
  title: 'Text/Heading 1',
  component: Heading1,
} as ComponentMeta<typeof Heading1>;

export const noArgs: ComponentStory<typeof Heading1> = () => (
  <Heading1>The is the heading</Heading1>
);
