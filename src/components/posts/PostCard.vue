<template>
  <div class="card" style="width: 18rem;">
    <img
      :alt=post.title
      class="ui image"
      :src=img.urls.regular
    />
    <p class="card-text">{{post.title}}</p>
    <router-link class="btn btn-primary" :to="`/posts/${post.id}`" >Voir le post</router-link>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
    img: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.post-item {
  cursor: pointer;
}
</style>
