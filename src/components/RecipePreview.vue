<template>
  <div v-show="preview">
    <slot />
    <button type="button" @click="$emit('close')">back to page</button>

    <br />
    <button>like</button>
    <br />
    <form>
      <br />
      <input name="comment" type="text" v-model="name" placeholder="comment" />

      <button type="submit">submit</button>
    </form>
    <br />
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
