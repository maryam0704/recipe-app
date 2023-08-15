<template>
  <div v-show="preview">
    <slot />
    <button type="button" @click="$emit('close')">back to page</button>
  </div>
</template>
<script>
export default {
  props: {
    preview: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
button {
  background-color: #ff6f00;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
