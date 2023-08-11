<template>
  <div>
    <!-- <h1>detailed recipe page</h1> -->
    <h2>recipe: {{ recipe.name }}</h2>
    <p>description: {{ recipe.description }}</p>
    <button @click="isOpen = true" :key="recipe.id">view recipe</button>

    <RecipePreview :preview="isOpen" @close="isOpen = !isOpen">
      <div>
        <h2>recipe: {{ recipe.name }}</h2>
        <p>description: {{ recipe.description }}</p>
        <p>prep time: {{ recipe.preptime }}</p>
        <p>ingridents: {{ recipe.ingridents }}</p>
        <p>chef: {{ recipe.chef }}</p>
      </div>
    </RecipePreview>
  </div>
</template>

<script>
import { ref } from "vue";
import RecipePreview from "./RecipePreview.vue";

export default {
  name: "DetailedRecipe",

  props: {
    recipe: {
      type: Object,
      default() {
        return {
          id: 0,
          name: "chickpea salad",
          description: "Lorem ipsum dolor sit amet...",
          preptime: "30 minutes",
          ingridents: "shvs bsgdf",
          chef: "abc",
        };
      },
    },
  },
  components: {
    RecipePreview,
  },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
};
</script>
