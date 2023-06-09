import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const button: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

button.args = {
  children: 'Button',
  primary: true,
  type: 'submit',
  disabledText: 'disabled...',
};
