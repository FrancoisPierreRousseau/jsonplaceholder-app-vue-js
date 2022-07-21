<template>
  <div class="row justify-content-center" v-if="posts && images">
      <PostCard
        v-for="post in Object.values(posts).slice(1)"
        :key="post.id"
        :post="post"
        :img="this.images[Math.floor(Math.random() * this.images.length)]"
      />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PostCard from '@/components/posts/PostCard.vue';

export default {
  name: 'PostList',
  components: {
    PostCard,
  },
  props: {
    images: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapState('photos', ['photos']),
  },
  methods: {
    ...mapActions('posts', ['fetchPosts']),
  },
  async mounted() {
    await this.fetchPosts();
  },
};
</script>

<style lang="scss">
</style>
