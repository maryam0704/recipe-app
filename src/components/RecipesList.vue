<template>
  <h1>Recipe list page</h1>
  <div class="recipe-list">
    <DetailedRecipe
      class="detailed"
      v-for="recipe in recipes"
      :recipe="recipe"
      :key="recipe.id"
    >
    </DetailedRecipe>
  </div>
</template>

<script>
import DetailedRecipe from "./DetailedRecipe.vue";

export default {
  name: "RecipesList",
  props: {
    recipes: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    DetailedRecipe,
  },
};
</script>

<style scoped lang="scss">
.recipe-list {
  // display: grid;
  width: 700px;
  margin: 50px auto;
  margin: 4em;

  // grid-template-columns: repeat(3, 2fr);
  gap: 10px;
  text-align: center;
}
.detailed {
  border: 2px solid black;
  padding: 1em;
}
</style>
