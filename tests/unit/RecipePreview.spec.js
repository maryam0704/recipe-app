import { mount } from "@vue/test-utils";
import RecipePreview from "@/components/RecipePreview.vue";

describe("RecipePreview", () => {
  it('renders slot content when "preview" prop is true', () => {
    const wrapper = mount(RecipePreview, {
      props: { preview: true },
      slots: {
        default: "<p>Preview Content</p>",
      },
    });

    const slotContent = wrapper.find("p");

    // Check if slot content is rendered
    expect(slotContent.exists()).toBe(true);
    expect(slotContent.text()).toBe("Preview Content");
  });

  // it('does not render slot content when "preview" prop is false', () => {
  //   const wrapper = mount(RecipePreview, {
  //     props: { preview: false },
  //     slots: {
  //       default: "<p>Preview Content</p>",
  //     },
  //   });

  //   const slotContent = wrapper.find("p");

  //   // Check if slot content is not rendered
  //   expect(slotContent.exists()).toBe(false);
  // });

  // it('emits "close" event when "back to page" button is clicked', async () => {
  //   const wrapper = mount(RecipePreview, {
  //     props: { preview: true },
  //     slots: {
  //       default: "<p>Preview Content</p>",
  //     },
  //   });

  //   // Click the "back to page" button
  //   await wrapper.find("button").trigger("click");

  //   // Check if "close" event is emitted
  //   expect(wrapper.emitted("close")).toBeTruthy();
  // });

  // You can add more tests to cover other behaviors and interactions.
});
