import { shallowMount } from "@vue/test-utils";
import AddRecipe from "@/components/AddRecipe.vue";

describe("AddRecipe", () => {
  it("emits an addedRecipe event when the form is submitted", async () => {
    const wrapper = shallowMount(AddRecipe);

    await wrapper.setData({
      newRecipe: {
        name: "Salsa Chicken",
        description:
          "Use your favorite jar of salsa to give simple chicken breasts big flavor.",
        preptime: "30 minutes",
        ingridents:
          "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
        chef: "charlie",
      },
    });

    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted("addedRecipe")).toBeTruthy();
  });

  it("will not emit an addedRecipe event when the form is submitted", async () => {
    const wrapper = shallowMount(AddRecipe);

    await wrapper.setData({
      newRecipe: {
        name: "Salsa Chicken",
      },
    });

    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted("addedRecipe")).toBeFalsy();
  });

  it("emits addedRecipe event with correct recipe data on form submission", async () => {
    const wrapper = shallowMount(AddRecipe);

    await wrapper.setData({
      newRecipe: {
        name: "Salsa Chicken",
        description:
          "Use your favorite jar of salsa to give simple chicken breasts big flavor.",
        preptime: "30 minutes",
        ingridents:
          "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
        chef: "charlie",
      },
    });
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("addedRecipe")[0][0]).toEqual({
      name: "Salsa Chicken",
      description:
        "Use your favorite jar of salsa to give simple chicken breasts big flavor.",
      preptime: "30 minutes",
      ingridents:
        "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
      chef: "charlie",
    });
  });

  it('does not emit "addedRecipe" event when form is submitted with empty data', async () => {
    const wrapper = shallowMount(AddRecipe);
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("addedRecipe")).toBeFalsy();
  });

  it('does not emit "addedRecipe" event when form is submitted with missing name ', async () => {
    const wrapper = shallowMount(AddRecipe);

    await wrapper.setData({
      newRecipe: {
        name: "",
        description:
          "Use your favorite jar of salsa to give simple chicken breasts big flavor.",
        preptime: "30 minutes",
        ingridents:
          "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
        chef: "charlie",
      },
    });
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("addedRecipe")).toBeFalsy();
  });

  it('does not emit "addedRecipe" event when form is submitted with missing description', async () => {
    const wrapper = shallowMount(AddRecipe);
    await wrapper.setData({
      newRecipe: {
        name: "Salsa Chicken",
        description: "",
        preptime: "30 minutes",
        ingridents:
          "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
        chef: "charlie",
      },
    });
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("addedRecipe")).toBeFalsy();
  });

  it("clears form fields after a successful submission", async () => {
    const wrapper = shallowMount(AddRecipe);
    await wrapper.setData({
      newRecipe: {
        // name: "Salsa Chicken",
        // description: "",
        // preptime: "30 minutes",
        // ingridents:
        //   "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
        // chef: "charlie",
      },
    });
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.vm.newRecipe.name).toBe("");
    expect(wrapper.vm.newRecipe.description).toBe("");

    expect(wrapper.vm.newRecipe.preptime).toBe("");
    expect(wrapper.vm.newRecipe.ingridents).toBe("");
    expect(wrapper.vm.newRecipe.chef).toBe("");
  });
});
