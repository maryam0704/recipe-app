<template>
  <!-- <h1>Recipe list page</h1> -->
  <div class="recipe-list">
    <DetailedRecipe
      class="detailed"
      v-for="recipe in recipes"
      :recipe="recipe"
      :key="recipe.id"
    >
    </DetailedRecipe>
    <AddRecipe @addedRecipe="addedRecipe"> </AddRecipe>
  </div>
</template>

<script>
import DetailedRecipe from "./DetailedRecipe.vue";
import AddRecipe from "./AddRecipe.vue";

export default {
  name: "RecipesList",

  data() {
    return {
      recipes: [
        {
          id: 1,
          name: "Banana Bread",
          description:
            "This banana bread recipe creates the most delicious, moist loaf with loads of banana flavor.",
          preptime: "30 minutes",
          ingridents:
            "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
          chef: "alpha",
        },
        {
          id: 2,
          name: "Salsa Chicken",
          description:
            "Use your favorite jar of salsa to give simple chicken breasts big flavor.",
          preptime: "30 minutes",
          ingridents:
            "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
          chef: "charlie",
        },
        {
          id: 3,
          name: "Chorizo Street Tacos",
          description:
            "Chorizo and chipotle peppers give these street-style tacos some serious heat. ",
          preptime: "30 minutes",
          ingridents:
            "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
          chef: "barvo",
        },
        {
          id: 5,
          name: "Salsa Chicken",
          description:
            "Use your favorite jar of salsa to give simple chicken breasts big flavor.",
          preptime: "30 minutes",
          ingridents:
            "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
          chef: "charlie",
        },
        {
          id: 6,
          name: "Salsa Chicken",
          description:
            "Use your favorite jar of salsa to give simple chicken breasts big flavor.",
          preptime: "30 minutes",
          ingridents:
            "1 pound lean ground beef ,15 ounces tomato sauce, 1 (15 ounce) can kidney beans, drained 1 (15 ounce) can chili beans, not drained 2 tablespoons chili powder, or to taste salt and freshly ground black pepper to taste",
          chef: "charlie",
        },
      ],
    };
  },
  components: {
    DetailedRecipe,
    AddRecipe,
  },

  methods: {
    addedRecipe(recipe) {
      this.recipes.push(recipe);
      this.$emit("addedRecipe", recipe);
    },
    liked(id) {
      console.log(3, "liked!", id);
    },
  },
};
</script>

<style scoped lang="scss">
.recipe-list {
  display: grid;
  grid-template-columns: 1fr;
  width: 550px;
  align-items: center;
  grid-gap: 20px;
  padding: 20px;
  margin: 0 auto;
  // max-width: 1200px;
}
.detailed {
  margin: 0 auto;
}
</style>
