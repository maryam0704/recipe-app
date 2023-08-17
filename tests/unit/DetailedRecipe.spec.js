import { shallowMount } from "@vue/test-utils";
import DetailedRecipe from "@/components/DetailedRecipe.vue";

describe("DetailedRecipe", () => {
  it("renders props.course when passed", () => {
    const recipe = {
      id: 0,
      name: "chickpea salad",
      description: "Lorem ipsum dolor sit amet...",
      preptime: "30 minutes",
      ingridents: "shvs bsgdf",
      chef: "abc",
    };
    const wrapper = shallowMount(DetailedRecipe, {
      propsData: { recipe },
    });
    expect(wrapper.find("h2").text()).toMatch(recipe.name);
    expect(wrapper.find("p").text()).toMatch(recipe.description);
  });


  // view recipe button is clicked

  it("RecipePreview component will rendered when a button is clicked.", async () => {
    const wrapper = shallowMount(DetailedRecipe);
    await wrapper.find("button").trigger("click");
    expect(wrapper.findComponent({ name: "RecipePreview" }).exists()).toBe(
      true
    );
  });

  // view recipe button is not clicked
  it("RecipePreview component will not rendered when a button is not clicked.", async () => {
    const wrapper = shallowMount(DetailedRecipe);
    expect(wrapper.findComponent({ name: "RecipePreview" }).find(false));
  });

  
  // testing like button

  it('emits "liked" event and updates "isAdded" when "like" button is clicked', async () => {
    const recipe = {
      id: 0,
      name: "chickpea salad",
      description: "Lorem ipsum dolor sit amet...",
      preptime: "30 minutes",
      ingridents: "shvs bsgdf",
      chef: "abc",
    };

    const wrapper = shallowMount(DetailedRecipe, {
      props: { recipe },
    });
    await wrapper.vm.liked();
    expect(wrapper.emitted("liked")).toBeTruthy();
    expect(wrapper.vm.isAdded).toBe(true);
  });

  // testing unlike button

  it('emits "unlike" event and updates "isAdded" when "unlike" button is clicked', async () => {
    const recipe = {
      id: 0,
      name: "chickpea salad",
      description: "Lorem ipsum dolor sit amet...",
      preptime: "30 minutes",
      ingridents: "shvs bsgdf",
      chef: "abc",
    };

    const wrapper = shallowMount(DetailedRecipe, {
      props: { recipe },
    });
    await wrapper.vm.unlike();
    expect(wrapper.emitted("unlike")).toBeTruthy();
    expect(wrapper.vm.isAdded).toBe(false);
  });

  it("when ref isOpen is true", async () => {
    const wrapper = shallowMount(DetailedRecipe);
    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.isOpen).toBe(true);
   
  });

  it("when ref isOpen is false", async () => {  
    const wrapper = shallowMount(DetailedRecipe);
    expect(wrapper.vm.isOpen).toBe(false);
  }
    
  );
});