import { Meta, StoryObj } from '@storybook/react/*';
import { CardHeader } from './CardHeader';

const meta = {
  title: 'Card/CardHeader',
  component: CardHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
