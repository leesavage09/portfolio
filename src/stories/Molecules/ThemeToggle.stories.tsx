import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

export default {
  title: 'Molecules/ThemeToggle',
  component: ThemeToggle,
} as ComponentMeta<typeof ThemeToggle>;

export const noArgs: ComponentStory<typeof ThemeToggle> = () => <ThemeToggle />;
