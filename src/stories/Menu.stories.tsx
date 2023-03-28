import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Menu } from './Menu';

export default {
  title: 'Toggle',
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const noArgs: ComponentStory<typeof Menu> = () => <Menu />;
