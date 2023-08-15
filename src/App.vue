<template>
  <div class="heading">
    <h1>Delicious Recipes</h1>
    <h2>Explore a world of mouthwatering recipes for every occasion.</h2>
  </div>
  <RecipesList :recipes="recipes"> </RecipesList>
</template>

<script>
import RecipesList from "./components/RecipesList.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    RecipesList,
  },

  methods: {
    liked() {
      console.log(2, "liked!");
    },
    unlike() {
      console.log(2, "unliked!");
    },
  },
};
</script>
<style lang="scss">
.heading {
  background-color: #5c565627;
  padding: 20px;
  text-align: center;
  margin-bottom: 10px;
}
h1 {
  font-family: "Pacifico", cursive;
  font-size: 50px;
  color: #ff6f00;
  text-shadow: 2px 2px 4px #000000;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  word-spacing: 5px;
}
h2 {
  font-size: 26px;
  font-family: "Pacifico", cursive;
  color: #ff6f00;
  text-shadow: 1px 1px 2px #1f1e1e;
  letter-spacing: 1px;
}
</style>
