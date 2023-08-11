import { shallowMount } from "@vue/test-utils";
import DetailedRecipe from "@/components/DetailedRecipe.vue";

describe("DetailedRecipe", () => {
  it("renders recipe name and description", () => {
    const recipe = {
      id: 1,
      name: "Recipe",
      description: "This is recipe description.",
    };

    const wrapper = shallowMount(DetailedRecipe, {
      props: { recipe },
    });

    expect(wrapper.find("h2").text()).toBe(recipe.name);
    expect(wrapper.find("p").text()).toBe(recipe.description);
  });

  it("opens RecipePreview on button click", async () => {
    const wrapper = shallowMount(DetailedRecipe);

    await wrapper.find("button").trigger("click");

    expect(
      wrapper.findComponent({ name: "RecipePreview" }).props("preview")
    ).toBe(true);
  });
});
