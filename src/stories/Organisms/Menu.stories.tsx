import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Menu } from './Menu';

export default {
  title: 'Organisms/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const menu: ComponentStory<typeof Menu> = () => <Menu />;
