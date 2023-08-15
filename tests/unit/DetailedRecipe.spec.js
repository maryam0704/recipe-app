import { mount, shallowMount } from "@vue/test-utils";
import DetailedRecipe from "@/components/DetailedRecipe.vue";
import RecipePreview from "@/components/RecipePreview.vue";

describe("DetailedRecipe", () => {
  it("opens RecipePreview on button click ", async () => {
    const wrapper = shallowMount(DetailedRecipe);

    // Find the button and trigger a click event
    const button = wrapper.find("button");
    await button.trigger("click");

    // Check if the count has increased
    expect(wrapper.vm.isOpen).toBe(true);
  });

  it("opens RecipePreview on button click", async () => {
    const wrapper = shallowMount(DetailedRecipe);

    await wrapper.find("button").trigger("click");

    expect(wrapper.findComponent({ name: "RecipePreview" }).exists()).toBe(
      true
    );
  });

  it("renders recipe details when the component is mounted", () => {
    const recipe = {
      id: 1,
      name: "Test Recipe",
      description: "Test Description",
      preptime: "30 minutes",
      ingridents: "Test Ingredients",
      chef: "Test Chef",
    };
    const wrapper = mount(DetailedRecipe, {
      props: { recipe },
    });

    const recipeName = wrapper.find("h2");
    const description = wrapper.find("p");
    const viewButton = wrapper.find("button");

    // Check if recipe details are rendered correctly
    expect(recipeName.text()).toBe(`recipe: ${recipe.name}`);
    expect(description.text()).toBe(`description: ${recipe.description}`);
    expect(viewButton.text()).toBe("view recipe");
  });

  it('opens the overlay when "view recipe" button is clicked', async () => {
    const recipe = {
      id: 1,
      name: "Test Recipe",
      description: "Test Description",
      preptime: "30 minutes",
      ingridents: "Test Ingredients",
      chef: "Test Chef",
    };
    const wrapper = mount(DetailedRecipe, {
      props: { recipe },
    });

    // Click the "view recipe" button
    await wrapper.find("button").trigger("click");

    const overlay = wrapper.find(".overlay.active");

    // Check if the overlay is displayed after clicking the button
    expect(overlay.exists()).toBe(true);
  });

  it('emits "liked" event and updates "isAdded" when "like" button is clicked', async () => {
    const recipe = {
      id: 1,
      name: "Test Recipe",
      description: "Test Description",
      preptime: "30 minutes",
      ingridents: "Test Ingredients",
      chef: "Test Chef",
    };
    const wrapper = mount(DetailedRecipe, {
      props: { recipe },
    });

    // Click the "like" button
    await wrapper.find("button").trigger("click");

    // Check if the "liked" event is emitted and "isAdded" is updated
    expect(wrapper.emitted("liked")).toBeTruthy();
    expect(wrapper.vm.isAdded).toBe(true);
  });

  // You can add more tests to cover other behaviors and interactions.
});

// it('emits "unlike" event and updates isAdded when unlike button is clicked', async () => {
//   const recipe = {
//     id: 1,
//     name: "Test Recipe",
//     description: "Test Description",
//     preptime: "30 minutes",
//     ingridents: "Test Ingredients",
//     chef: "Test Chef",
//   };

//   const wrapper = shallowMount(DetailedRecipe, {
//     props: { recipe },
//   });

//   // Click the like button
//   await wrapper.find("button").trigger("click");
//   console.log(wrapper.html()); // Log the HTML
//   // Wait for the next tick to let the DOM update
//   await wrapper.vm.$nextTick();

//   // Click the unlike button (which is now present)
//   await wrapper.find("button").trigger("click");
//   console.log(wrapper.html()); // Log the HTML

//   expect(wrapper.emitted("unlike")).toBeTruthy();
//   expect(wrapper.vm.isAdded).toBe(false);
// });
// });

// import { shallowMount } from "@vue/test-utils";
// import DetailedRecipe from "@/components/DetailedRecipe.vue";

// describe("DetailedRecipe", () => {
//   it('emits "liked" event when like button is clicked', async () => {
//     const recipe = {
//       id: 1,
//       name: "Test Recipe",
//       description: "Test Description",
//       preptime: "30 minutes",
//       ingridents: "Test Ingredients",
//       chef: "Test Chef",
//     };

//     const wrapper = shallowMount(DetailedRecipe, {
//       props: { recipe },
//     });

//     // Find the like button and trigger a click
//     await wrapper.find("button").trigger("click");

//     // Expect the emitted event
//     expect(wrapper.emitted("liked")).toBeTruthy();
//     expect(wrapper.vm.isAdded).toBe(true);
//   });

// it('emits "unlike" event when unlike button is clicked', async () => {
//   const recipe = {
//     id: 1,
//     name: "Test Recipe",
//     description: "Test Description",
//     preptime: "30 minutes",
//     ingridents: "Test Ingredients",
//     chef: "Test Chef",
//   };

//   const wrapper = shallowMount(DetailedRecipe, {
//     props: { recipe },
//   });

//   // Find the like button and trigger a click
//   await wrapper.find("button").trigger("click");

//   // Find the unlike button and trigger a click
//   await wrapper.find("button").trigger("click");

//   // Expect the emitted event
//   // expect(wrapper.emitted("unlike")).toBeTruthy();
//   expect(wrapper.vm.isAdded).toBe(false);
// });

// You can write more tests for other component behaviors here
// });
// import { mount } from "@vue/test-utils";
// import DetailedRecipe from "@/components/DetailedRecipe.vue";

// describe("DetailedRecipe", () => {
//   it('emits "liked" event when like button is clicked', async () => {
//     const recipe = {
//       id: 1,
//       name: "Test Recipe",
//       description: "Test Description",
//       preptime: "30 minutes",
//       ingridents: "Test Ingredients",
//       chef: "Test Chef",
//     };

//     const wrapper = mount(DetailedRecipe, {
//       props: { recipe },
//     });

//     // Find the like button and trigger a click
//     await wrapper.find("button").trigger("click");

//     // Expect the emitted event
//     expect(wrapper.emitted("liked")).toBeTruthy();
//     expect(wrapper.vm.isAdded).toBe(true);
//   });

//   it('emits "unlike" event when unlike button is clicked', async () => {
//     const recipe = {
//       id: 1,
//       name: "Test Recipe",
//       description: "Test Description",
//       preptime: "30 minutes",
//       ingridents: "Test Ingredients",
//       chef: "Test Chef",
//     };

//     const wrapper = mount(DetailedRecipe, {
//       props: { recipe },
//     });

//     // Find the like button and trigger a click
//     await wrapper.find("button").trigger("click");

//     // Find the unlike button and trigger a click
//     await wrapper.find("button").trigger("click");

//     // Expect the emitted event
//     expect(wrapper.emitted("unlike")).toBeTruthy();
//     expect(wrapper.vm.isAdded).toBe(false);
//   });

//   // You can write more tests for other component behaviors here
// });
