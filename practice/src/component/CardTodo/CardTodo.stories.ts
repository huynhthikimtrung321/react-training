import { Meta, StoryObj } from '@storybook/react/*';
import { CardTodo } from './CardTodo';

const meta = {
  title: 'Card/CardTodo',
  component: CardTodo,
  parameters: {
    layout: 'fullscreen centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
