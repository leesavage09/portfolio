import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const primary: ComponentStory<typeof Button> = () => (
  <Button primary={true} label={'Button'} />
);

export const secondary: ComponentStory<typeof Button> = () => (
  <Button primary={false} label={'Button'} />
);
