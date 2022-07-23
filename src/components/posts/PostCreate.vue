<template>
  <h1 class="text-center mt-3">Créer un post</h1>
  <div class="container">
    <PostForm :on-submit="this.onSubmit" />
  </div>
</template>

<script>
import PostForm from '@/components/posts/PostForm.vue';
import { mapActions } from 'vuex';

export default {
  name: 'PostCreate',
  components: {
    PostForm,
  },
  methods: {
    ...mapActions('posts', ['createPost']),

    async onSubmit(formValues) {
      await this.createPost(formValues);
    },
  },
};
</script>

<style scoped>

</style>
