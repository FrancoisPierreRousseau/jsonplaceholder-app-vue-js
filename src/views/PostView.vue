<template>
  <post-show v-if="this.user" :id="this.$route.params.id">
    <p>Écrit par:  {{this.user.name}} </p>
  </post-show>
</template>

<script>
import PostShow from '@/components/posts/PostShow.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PostView',
  data() {
    return {
      user: null,
    };
  },
  components: {
    PostShow,
  },
  computed: {
    ...mapState('users', ['users']),
    ...mapState('posts', ['posts']),
  },
  methods: {
    ...mapActions('thematic', ['fetchPictures']),
    ...mapActions('users', ['fetchUser']),
  },

  async mounted() {
    await this.fetchPictures();
    await this.fetchUser(this.posts[this.$route.params.id].userId);
    this.user = this.users[this.posts[this.$route.params.id].userId];
  },
};
</script>

<style scoped>

</style>
