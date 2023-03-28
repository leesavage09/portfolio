import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Subtitle2 } from './Subtitle2';

export default {
  title: 'Atoms/Heading 2',
  component: Subtitle2,
} as ComponentMeta<typeof Subtitle2>;

export const noArgs: ComponentStory<typeof Subtitle2> = () => (
  <Subtitle2>The is the subtitle</Subtitle2>
);
