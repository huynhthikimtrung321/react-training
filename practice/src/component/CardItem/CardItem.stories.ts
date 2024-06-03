import { Meta, StoryObj } from '@storybook/react/*';
import { CardItem } from './CardItem';

const meta = {
  title: 'Card/CardItem',
  component: CardItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
      content: 'Do Homework',
      isCompleted: false,
    },
    onChange: () => {},
  },
};

export const PrimaryCompleted: Story = {
  args: {
    item: {
      content: 'Do Homework',
      isCompleted: true,
    },
    onChange: () => {},
  },
};
