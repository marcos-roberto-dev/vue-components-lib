import { mount } from "@vue/test-utils"
import { vuetifyTest } from "@/plugins/vuetifyTest";

import CustomButton from "@components/CustomButton.vue";

describe('CustomButton', () => {
  it('should render button with text', () => {
    const text = 'Click me';

    const wrapper = mount(CustomButton, {
      propsData: { label: text },
      global: {
        plugins: [vuetifyTest]
      }
    });

    expect(wrapper.text()).toContain(text);
  });
})
