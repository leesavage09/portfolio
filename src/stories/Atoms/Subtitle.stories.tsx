import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Subtitle } from './Subtitle';

export default {
  title: 'Atoms/Subtitle',
  component: Subtitle,
} as ComponentMeta<typeof Subtitle>;

export const subtitle: ComponentStory<typeof Subtitle> = (args) => (
  <Subtitle {...args}>{args.children}</Subtitle>
);

subtitle.args = {
  type: 'L',
  children: 'This is the subtitle',
};
