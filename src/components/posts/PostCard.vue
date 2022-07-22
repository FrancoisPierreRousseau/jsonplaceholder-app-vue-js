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
import { mapState } from 'vuex';

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
  computed: {
    ...mapState('photos', ['photos']),
  },
};
</script>

<style lang="scss">
.post-item {
  cursor: pointer;
}
</style>
