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

export const Primary: Story = {
  args: {
    variant: 'primary',
    isChecked: false,
    onChange: () => {},
  },
};

export const SelectAll: Story = {
  args: {
    variant: 'secondary',
    isChecked: false,
    onChange: () => {},
  },
};
