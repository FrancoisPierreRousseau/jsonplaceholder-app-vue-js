<template>
  <div class="row justify-content-center" v-if="posts && pictures">
      <PostCard
        v-for="post in Object.values(posts).slice(1)"
        :key="post.id"
        :post="post"
        :img="this.pictures[Math.floor(Math.random() * this.pictures.length)]"
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
  computed: {
    ...mapState('posts', ['posts']),
    ...mapState('thematic', ['pictures']),
  },
  methods: {
    ...mapActions('posts', ['fetchPosts']),
    ...mapActions('thematic', ['fetchPictures']),

  },
  async mounted() {
    await this.fetchPosts();
    await this.fetchPictures();
  },
};
</script>

<style lang="scss">
</style>
