import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    borderColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    icon: 'x',
    hover: 'color',
    color: 'tertiary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'All',
    size: 'small',
    isActive: false,
  },
};

export const OutlineActive: Story = {
  args: {
    variant: 'outline',
    label: 'All',
    size: 'small',
    isActive: true,
  },
};
