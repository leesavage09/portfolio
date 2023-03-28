import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Subtitle1 } from './Subtitle1';

export default {
  title: 'Atoms/Heading 1',
  component: Subtitle1,
} as ComponentMeta<typeof Subtitle1>;

export const noArgs: ComponentStory<typeof Subtitle1> = () => (
  <Subtitle1>The is the subtitle</Subtitle1>
);
