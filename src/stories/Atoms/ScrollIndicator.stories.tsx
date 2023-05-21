import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ScrollIndicator } from './ScrollIndicator';

export default {
  title: 'Atoms/ScrollIndicator',
  component: ScrollIndicator,
} as ComponentMeta<typeof ScrollIndicator>;

export const scrollIndicator: ComponentStory<typeof ScrollIndicator> = () => (
  <ScrollIndicator />
);
