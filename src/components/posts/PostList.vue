<template>
  <div class="row justify-content-center" v-if="posts && !this.picturesIsEmpty">
      <PostCard
        v-for="post in Object.values(posts)"
        :key="post.id"
        :post="post"
        :img="this.pictures[Math.floor(Math.random() * this.pictures.length)]"
      />
  </div>
  <AppAlert v-else message="Aucune image n'a été trouvé" variant="warning" />
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PostCard from '@/components/posts/PostCard.vue';
import AppAlert from '@/components/AppAlert.vue';
import _ from 'lodash';

export default {
  name: 'PostList',
  components: {
    PostCard,
    AppAlert,
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapState('thematic', ['pictures']),

    picturesIsEmpty() {
      return _.isEmpty(this.pictures);
    },
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
