<template>
  <div>
    <div class="displayComment">
      <div v-for="(comment, index) in comments" :key="index">
        <h4>{{ comment.text }}</h4>
        <p><strong> By: </strong>{{ comment.author }} - </p>
        <p><strong> Date: </strong>{{ comment.timestamp }}</p>
      </div>
    </div>
    <form @submit.prevent="addComment">
      <input
        class="inputComment"
        v-model="newComment.text"
        placeholder="Enter your comment"
      />
      <input v-model="newComment.author" type="text" placeholder="Your name" />
      <button type="submit">Add Comment</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      newComment: {
        text: "",
        author: "",
      },
    };
  },
  methods: {
    addComment() {
      this.comments.push({
        text: this.newComment.text,
        author: this.newComment.author,
        timestamp: new Date().toLocaleDateString(),
      });
      this.newComment.text = "";
      this.newComment.author = "";
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin: 20px;
  border: 2px solid #ff6f00;
  width: 50%;
}
.inputComment {
  width: 90%;
}
button {
  background-color: #ff6f00;
  border: none;
  color: white;
  padding: 10px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
input {
  line-height: 20px;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
}
textarea {
  line-height: 20px;

  padding: 10px;
  margin: 10px;
}
.displayComment {
  /* display: grid;
  grid-template-columns: 4fr 1fr; ; */
  font-size: 20px;
  margin: 20px;
  padding: 20px;
  width: 50%;
}
.displayComment h4 {
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid #ff6f00;
  font-size: 25px;
}
</style>
