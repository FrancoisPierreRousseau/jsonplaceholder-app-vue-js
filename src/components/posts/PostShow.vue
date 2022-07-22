<template>
  <div v-if="this.post">
    {{ this.post }}
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'PostShow',
  data() {
    return {
      post: null,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapGetters('posts', ['findPostById']),
  },
  methods: {
    ...mapActions('posts', ['fetchPost']),
  },
  async mounted() {
    await this.fetchPost(this.id);
    this.post = this.findPostById(this.id);
  },
};
</script>

<style scoped>

</style>
