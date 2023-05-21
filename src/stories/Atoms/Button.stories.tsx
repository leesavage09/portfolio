import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const button: ComponentStory<typeof Button> = (args) => (
  // div is a hack to force storybook to preload some styles
  <>
    <div className="bg-dark-blue-700" style={{ display: 'none' }} />
    <Button {...args} />
  </>
);

button.args = {
  label: 'Button',
  primary: true,
};
