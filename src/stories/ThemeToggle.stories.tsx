import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

export default {
  title: 'ThemeToggle',
  component: ThemeToggle,
} as ComponentMeta<typeof ThemeToggle>;

export const noArgs: ComponentStory<typeof ThemeToggle> = () => <ThemeToggle />;
