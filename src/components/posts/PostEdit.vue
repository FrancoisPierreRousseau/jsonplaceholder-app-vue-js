<template>
  <h1 class="text-center mt-3">Éditer votre post</h1>
  <div class="container">
    <PostForm />
  </div>
</template>

<script>
import PostForm from '@/components/posts/PostForm.vue';

export default {
  name: 'PostEdit',
  components: {
    PostForm,
  },
};
</script>

<style scoped>

</style>
