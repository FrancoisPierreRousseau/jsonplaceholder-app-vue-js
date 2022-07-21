<template>
  <div class="row justify-content-center" v-if="posts && images">
      <PostCard
        v-for="post in Object.values(posts).slice(1)"
        :key="post.id"
        :post="post"
        :img="this.images[Math.floor(Math.random() * 10)]"
      />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PostCard from '@/components/posts/PostCard.vue';
import unsplash from '@/apis/unsplash';

export default {
  name: 'PostList',
  components: {
    PostCard,
  },
  data() {
    return {
      images: null,
    };
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
    const response = await unsplash.get('/search/photos', {
      params: { query: 'programming' },
    });
    this.images = response.data.results;
  },
};
</script>

<style lang="scss">
</style>
