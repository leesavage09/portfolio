import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Scroll } from './Scroll';

export default {
  title: 'Animation/Scroll',
  component: Scroll,
} as ComponentMeta<typeof Scroll>;

export const noArgs: ComponentStory<typeof Scroll> = () => <Scroll />;
