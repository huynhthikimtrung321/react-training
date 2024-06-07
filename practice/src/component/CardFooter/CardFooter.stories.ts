import { Meta, StoryObj } from '@storybook/react/*';
import { CardFooter } from '..';

const meta = {
  title: 'Card/CardFooter',
  component: CardFooter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
