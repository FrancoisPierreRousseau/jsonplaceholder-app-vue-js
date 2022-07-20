<template>
  <div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PostList',
  methods: {
    ...mapActions('posts', ['fetchPosts']),
    ...mapState('posts', ['posts']),
  },
  async mounted() {
    await this.fetchPosts();
  },
};
</script>

<style scoped>

</style>
