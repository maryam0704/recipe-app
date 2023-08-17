import { shallowMount } from "@vue/test-utils";
import RecipesList from "@/components/RecipesList.vue";

describe("RecipesList", () => {
  it("renders an AddRecipe component", async () => {
    const wrapper = shallowMount(RecipesList);
    const addRecipeComponent = wrapper.findComponent({ name: "AddRecipe" });
    expect(addRecipeComponent.exists()).toBe(true);
  });

  it("renders a Detailed component", () => {
    const wrapper = shallowMount(RecipesList);
    const DetailedRecipeComponent = wrapper.findComponent({
      name: "DetailedRecipe",
    });
    expect(DetailedRecipeComponent.exists()).toBe(true);
  });

  it("renders a Detailed component for each recipe in recipes data", () => {
    const wrapper = shallowMount(RecipesList);
    const DetailedRecipeComponents = wrapper.findAllComponents({
      name: "DetailedRecipe",
    });
    expect(DetailedRecipeComponents.length).toBe(wrapper.vm.recipes.length);
  });

  it("adds the new recipe when addedRecipe is triggered", async () => {
    const recipeId = 5;
    const wrapper = shallowMount(RecipesList);

    await wrapper.vm.addedRecipe(recipeId);

    // Expect the addedRecipe event to be emitted
    expect(wrapper.emitted().addedRecipe).toBeTruthy();

    // Check the emitted value matches the provided recipeId
    expect(wrapper.emitted().addedRecipe[0][0]).toBe(recipeId);
  });
});
