<template>
  <h1>recipe book</h1>

  <RecipesList :recipes="recipes"> </RecipesList>
</template>

<script>
import RecipesList from "./components/RecipesList.vue";

export default {
  name: "App",
  data() {
    return {
      coursesSelected: 0,
      coursesSelectedList: [],
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
        // {
        //   id: 4,
        //   name: "Mexican Casserole",
        //   description: "This Mexican casserole is made with pantry staples ",
        // },
        // {
        //   id: 5,
        //   name: "Suegra's Tomatillo Chicken",
        //   description:
        //     "Chicken pieces are seared and then simmered in a tomatillo sauce. ",
        // },

        // {
        //   id: 6,
        //   name: "Papas con Chorizo ",
        //   description:
        //     "The bold, delicious flavors of this traditional Mexican dish",
        // },
      ],
    };
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
.recipelist {
  background-color: grey;
  h1 {
    color: red;
  }
}
</style>
