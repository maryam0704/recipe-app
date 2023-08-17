<template>
  <div>
    <h2>recipe: {{ recipe.name }}</h2>
    <p>description: {{ recipe.description }}</p>
    <button class="openRecipe" @click="isOpen = true" :key="recipe.id">
      view recipe
    </button>
    <div class="overlay" :class="{ active: isOpen }">
      <div class="popup">
        <RecipePreview
          :preview="isOpen"
          @close="isOpen = !isOpen"
          @liked="liked"
          @unlike="unlike"
        >
          <div>
            <h2>recipe: {{ recipe.name }}</h2>
            <p>description: {{ recipe.description }}</p>
            <p>prep time: {{ recipe.preptime }}</p>
            <p>ingridents: {{ recipe.ingridents }}</p>
            <p>chef: {{ recipe.chef }}</p>

            <button class="like" v-if="!isAdded" @click="liked">LIKE</button>

            <button class="unlike" v-else-if="isAdded" @click="unlike">
              UNLIKE
            </button>
          </div>

          <CommentSection></CommentSection>
        </RecipePreview>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import RecipePreview from "./RecipePreview.vue";
import CommentSection from "./CommentSection.vue";
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
    CommentSection,
  },
  data() {
    const isOpen = ref(false);
    return {
      isOpen,
      isAdded: false,
    };
  },

  methods: {
    liked() {
      console.log(1);
      this.$emit("liked", this.recipe.id);
      console.log("liked");
      this.isAdded = true;
    },
    unlike() {
      this.$emit("unlike", this.recipe.id);
      console.log("unliked");
      this.isAdded = false;
    },
  },
};
</script>
<style scoped>
/* Overlay styles for the fullscreen popup */
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  align-items: center;
  justify-content: center;
}

/* Styling for the popup content */
.popup {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

/* Close button style */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #666;
}

/* Apply the overlay display when the preview is open */
.overlay.active {
  display: flex;
}
.like {
  background-color: rgba(29, 155, 222, 0.793);
  border: 1px solid blue;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: bolder;
}
.unlike {
  background-color: rgba(159, 183, 197, 0.793);
  border: 1px solid rgb(125, 125, 231);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: bolder;
}
.openRecipe {
  background-color: #ff6f00;
  /* border: 1px solid blue; */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: bolder;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
