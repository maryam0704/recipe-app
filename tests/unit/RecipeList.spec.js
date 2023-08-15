import { mount } from "@vue/test-utils";
import RecipesList from "@/components/RecipesList.vue";

describe("RecipesList", () => {
  it("renders a list of DetailedRecipe components", () => {
    const wrapper = mount(RecipesList);

    const detailedRecipeComponents = wrapper.findAllComponents({
      name: "DetailedRecipe",
    });

    // Check if the number of DetailedRecipe components matches the number of recipes in the data
    expect(detailedRecipeComponents.length).toBe(wrapper.vm.recipes.length);
  });

  it("renders an AddRecipe component", () => {
    const wrapper = mount(RecipesList);

    const addRecipeComponent = wrapper.findComponent({ name: "AddRecipe" });

    // Check if the AddRecipe component is rendered
    expect(addRecipeComponent.exists()).toBe(true);
  });

  it('adds a new recipe when "addedRecipe" event is emitted', async () => {
    const wrapper = mount(RecipesList);

    const newRecipe = {
      id: 4,
      name: "New Recipe",
      description: "Test Description",
      preptime: "30 minutes",
      ingridents: "Test Ingredients",
      chef: "Test Chef",
    };

    // Emit the "addedRecipe" event
    await wrapper.vm.addedRecipe(newRecipe);

    // Check if the new recipe is added to the list
    const addedRecipeComponent = wrapper.findComponent({
      name: "DetailedRecipe",
      props: { recipe: newRecipe },
    });
    expect(addedRecipeComponent.exists()).toBe(true);
  });

  // it('does not add a new recipe when "addedRecipe" event is emitted with empty data', async () => {
  //   const wrapper = mount(RecipesList);

  //   // Emit the "addedRecipe" event with empty data
  //   await wrapper.vm.addedRecipe({});

  //   // Check if no new recipe is added to the list
  //   const addedRecipeComponent = wrapper.findComponent({
  //     name: "DetailedRecipe",
  //     props: { recipe: {} },
  //   });
  //   expect(addedRecipeComponent.exists()).toBe(false);
  // });

  // it('does not add a new recipe when "addedRecipe" event is not emitted', () => {
  //   const wrapper = mount(RecipesList);

  //   // Check if no new recipe is added initially
  //   const initialRecipeComponents = wrapper.findAllComponents({
  //     name: "DetailedRecipe",
  //   });
  //   expect(initialRecipeComponents.length).toBe(wrapper.vm.recipes.length);

  //   // Do not emit the "addedRecipe" event

  //   // Check if no new recipe is added after the event was not emitted
  //   const recipeComponentsAfterEvent = wrapper.findAllComponents({
  //     name: "DetailedRecipe",
  //   });
  //   expect(recipeComponentsAfterEvent.length).toBe(wrapper.vm.recipes.length);
  // });
});
