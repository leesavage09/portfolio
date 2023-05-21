import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

export default {
  title: 'Atoms/ThemeToggle',
  component: ThemeToggle,
} as ComponentMeta<typeof ThemeToggle>;

export const themeToggle: ComponentStory<typeof ThemeToggle> = () => (
  <ThemeToggle />
);
