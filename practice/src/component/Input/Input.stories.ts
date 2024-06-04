import type { Meta, StoryObj } from '@storybook/react/';
import { Input } from './Input';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'What needs to be done?',
    type: 'text',
    value: '',
    onChange: () => {},
    onKeyDown: () => {},
  },
};

export const Secondary: Story = {
  args: {
    type: 'text',
    value: '',
    onChange: () => {},
    onKeyDown: () => {},
  },
};
