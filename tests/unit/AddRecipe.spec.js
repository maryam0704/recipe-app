import { mount } from "@vue/test-utils";
import AddRecipe from "@/components/AddRecipe.vue";

describe("AddRecipe", () => {
  it('emits "addedRecipe" event when form is submitted with valid data', async () => {
    const wrapper = mount(AddRecipe);

    // Fill out the form fields
    await wrapper.setData({
      newRecipe: {
        name: "Test Recipe",
        ingredients: "Ingredient 1, Ingredient 2",
      },
    });

    // Submit the form
    await wrapper.find("form").trigger("submit.prevent");

    // Expect an emitted event
    expect(wrapper.emitted("addedRecipe")).toBeTruthy();

    // Check if the emitted event payload matches the input data
    expect(wrapper.emitted("addedRecipe")[0][0]).toEqual({
      name: "Test Recipe",
      ingredients: "Ingredient 1, Ingredient 2",
    });

    // Check if form fields are cleared after submission
    expect(wrapper.vm.newRecipe.name).toBe("");
    expect(wrapper.vm.newRecipe.ingredients).toBe("");
  });

  it('does not emit "addedRecipe" event when form is submitted with empty data', async () => {
    const wrapper = mount(AddRecipe);

    // Submit the form with empty data
    await wrapper.find("form").trigger("submit.prevent");

    // Expect no emitted event
    expect(wrapper.emitted("addedRecipe")).toBeFalsy();
  });

  // You can add more tests to cover other behaviors and interactions.
  it('does not emit "addedRecipe" event when form is submitted with missing name or ingredients', async () => {
    const wrapper = mount(AddRecipe);

    // Fill out the form with missing name
    await wrapper.setData({
      newRecipe: {
        name: "", // Empty name
        ingredients: "Ingredient 1, Ingredient 2",
      },
    });
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("addedRecipe")).toBeFalsy();

    // Fill out the form with missing ingredients
    await wrapper.setData({
      newRecipe: {
        name: "Test Recipe",
        ingredients: "", // Empty ingredients
      },
    });
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("addedRecipe")).toBeFalsy();
  });

  it("clears form fields after a successful submission", async () => {
    const wrapper = mount(AddRecipe);

    // Fill out the form fields
    await wrapper.setData({
      newRecipe: {
        name: "Test Recipe",
        ingredients: "Ingredient 1, Ingredient 2",
      },
    });

    // Submit the form
    await wrapper.find("form").trigger("submit.prevent");

    // Check if form fields are cleared after submission
    expect(wrapper.vm.newRecipe.name).toBe("");
    expect(wrapper.vm.newRecipe.ingredients).toBe("");
  });
});
