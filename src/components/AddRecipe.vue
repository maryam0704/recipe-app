<template>
  <div>
    <form @submit.prevent="addRecipe">
      <label for="recipeName">Recipe Name:</label>
      <input v-model="newRecipe.name" id="recipeName" required />

      <label for="recipeIngredients">Ingredients:</label>
      <input
        v-model="newRecipe.ingridents"
        id="recipeIngredients"
        required
      />

      <label for="recipeDescription">Description:</label>
        <input
          v-model="newRecipe.description"
          id="recipeDescription"
          required
        />

        <label for="recipePreptime">Preptime:</label>
        <input
          v-model="newRecipe.preptime"
          id="recipePreptime"
          required
        />

        <label for="recipeChef">Chef:</label>
        <input
          v-model="newRecipe.chef"
          id="recipeChef"
          required
        />

      <button type="submit">Add Recipe</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddRecipe",

  data() {
    return {
      newRecipe: {
        name: "",
        ingridents: "",
        description: "",
        preptime: "",
        chef: "",
      }, 
    };
  },

  // },
  methods: {
    addRecipe() {
      if (this.newRecipe.name && this.newRecipe.ingridents && this.newRecipe.description && this.newRecipe.preptime && this.newRecipe.chef) {
        this.$emit("addedRecipe", { ...this.newRecipe });
        this.newRecipe.name = "";
        this.newRecipe.ingridents = "";
        this.newRecipe.description = "";
        this.newRecipe.preptime = "";
        this.newRecipe.chef = "";
      }
    },
  },
};
</script>
<style scoped>
form {
  display: grid;
  grid-template-columns: 1fr;
  /* width: %;
  margin: 0 auto; */
  color:black

}
input{
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  font-size: 20px;

}
label{
  font-size: 20px;
}
button{
  width: 50%;
  /* height: 30px; */
  margin-bottom: 10px;
  font-size: 25px;
  padding: 10px;
  /* line-height: 22px; */
  background-color: #4CAF50;
  color: white;
  border: #114c13;
  border-radius: 4px;
  margin: 0 auto;
}
</style>
