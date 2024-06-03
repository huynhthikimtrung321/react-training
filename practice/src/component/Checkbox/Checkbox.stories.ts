import { Meta, StoryObj } from '@storybook/react/*';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryChecked: Story = {
  args: {
    variant: 'primary',
    isChecked: true,
    onChange: () => {},
    onClick: () => {},
  },
};

export const PrimaryNotChecked: Story = {
  args: {
    variant: 'primary',
    isChecked: false,
    onChange: () => {},
    onClick: () => {},
  },
};

export const SelectAllChecked: Story = {
  args: {
    variant: 'select-all',
    isChecked: true,
    onChange: () => {},
    onClick: () => {},
  },
};

export const SelectAllNotChecked: Story = {
  args: {
    variant: 'select-all',
    isChecked: false,
    onChange: () => {},
    onClick: () => {},
  },
};
