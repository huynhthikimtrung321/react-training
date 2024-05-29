import { Meta, StoryObj } from '@storybook/react/*';
import { CartItem } from './CartItem';

const meta = {
  title: 'CartItem',
  component: CartItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 'Do homework',
    isCompleted: false,
    onClear: () => {},
  },
};
