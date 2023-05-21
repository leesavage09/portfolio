import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from './Chip';

export default {
  title: 'Atoms/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const chip: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

chip.args = {
  lable: 'Chip',
};
