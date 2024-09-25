import type { Meta, StoryObj } from '@storybook/vue3';

import CustomButton from './CustomButton.vue';

const meta = {
  title: 'Example/CustomButton',
  component: CustomButton,
  decorators: [(Story) => ({
    components: { Story },
    template: '<div class="pa-4"><story /></div>',
  })],
  tags: ['autodocs'],
  args: {
    label: 'Button',

  }
} satisfies Meta<typeof CustomButton>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'CustomButton',
  },
};

export default meta;
