import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from './Chip';

export default {
  title: 'Atoms/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const withLable: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args} />
);
withLable.args = {
  lable: 'Default Lable',
};
