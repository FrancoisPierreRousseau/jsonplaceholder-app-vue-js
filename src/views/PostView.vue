<template>
  <post-show :id="this.$route.params.id">
    <p v-if="this.user">Écrit par:  {{this.user.name}} </p>
  </post-show>
</template>

<script>
import PostShow from '@/components/posts/PostShow.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PostView',
  components: {
    PostShow,
  },
  computed: {
    ...mapState('users', ['users']),
    ...mapState('posts', ['posts']),
    user() {
      return this.users[this.posts[this.$route.params.id].userId];
    },
  },
  methods: {
    ...mapActions('thematic', ['fetchPictures']),
    ...mapActions('users', ['fetchUser']),
  },
  async updated() {
    if (this.user) {
      this.user = this.users[this.posts[this.$route.params.id].userId];
    }
  },
  async mounted() {
    await this.fetchPictures();
    await this.fetchUser(this.posts[this.$route.params.id].userId);
  },
};
</script>

<style scoped>

</style>
