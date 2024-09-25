import type { Meta, StoryObj } from '@storybook/vue3';
import CustomDrawer from './CustomDrawer.vue';

const meta = {
  title: 'Example/CustomDrawer',
  component: CustomDrawer,
  decorators: [(Story) => ({
    components: { Story },
    template: '<div class="pa-4"><story /></div>',
  })],
  tags: ['autodocs'],
} satisfies Meta<typeof CustomDrawer>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { CustomDrawer },
    setup: () => ({ args }),
    template: '<custom-drawer>{{ args.default }}</custom-drawer>'
  }),
  args: {
    default: 'Default slot content'
  }
};

export default meta;
