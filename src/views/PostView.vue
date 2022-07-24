<template>
  <post-show :id="this.$route.params.id">
    <p v-if="!this.usersIsEmpty">Écrit par:  {{this.user.name}} </p>
  </post-show>
</template>

<script>
import PostShow from '@/components/posts/PostShow.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'PostView',
  components: {
    PostShow,
  },
  computed: {
    ...mapState('users', ['users']),
    ...mapState('posts', ['posts']),
    ...mapGetters('posts', ['postsIsEmpty']),
    ...mapGetters('users', ['usersIsEmpty']),
    user() {
      return this.users[this.posts[this.$route.params.id].userId];
    },
  },
  methods: {
    ...mapActions('thematic', ['fetchPictures']),
    ...mapActions('users', ['fetchUser']),
    ...mapActions('posts', ['fetchPosts']),
  },
};
</script>

<style scoped>

</style>
