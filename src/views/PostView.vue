<template>
  <post-show v-if="this.user" :id="this.$route.params.id">
    <p>Écrit par:  {{this.user.name}} </p>
  </post-show>
  <div style="height: 100vh" class="container d-flex justify-content-center" v-else>
    <p class="align-self-center h3">Veuillez recréer un nouveau compte</p>
  </div>
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
      if (!this.users) {
        return null;
      }
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
    if (this.posts && !this.user) {
      await this.fetchUser(this.posts[this.$route.params.id].userId);
    }
  },
};
</script>

<style scoped>

</style>
