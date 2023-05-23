import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paragraph } from './Paragraph';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

export const paragraph: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args}>{args.children}</Paragraph>
);

paragraph.args = {
  children: 'This is a paragraph of content',
};
