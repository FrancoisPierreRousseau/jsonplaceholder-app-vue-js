<template>
  <h1 class="text-center mt-3">Éditer votre post</h1>
  <div class="container">
    <PostForm
      :on-submit="this.onSubmit"
      :initial-values="this.posts[this.$route.params.id]"
    />
  </div>
</template>

<script>
import PostForm from '@/components/posts/PostForm.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PostEdit',
  components: {
    PostForm,
  },
  computed: {
    ...mapState('posts', ['posts']),
  },
  methods: {
    ...mapActions('posts', ['editPost']),
    async onSubmit(formValues) {
      await this.editPost({ id: this.$route.params.id, formValues });
    },
  },
};
</script>

<style scoped>
</style>
