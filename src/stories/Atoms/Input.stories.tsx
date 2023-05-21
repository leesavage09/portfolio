import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const input: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

input.args = {
  id: 'message',
  textArea: true,
  label: 'Message',
  placeholder: 'Enter your Message',
};
