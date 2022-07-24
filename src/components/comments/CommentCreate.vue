<template>
  <CommentForm :on-submit="this.onSubmit" />
</template>

<script>
import { mapActions } from 'vuex';
import CommentForm from '@/components/comments/CommentForm.vue';

export default {
  name: 'CommentCreate',
  components: {
    CommentForm,
  },
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions('comments', ['createComment']),

    async onSubmit(formValues) {
      await this.createComment({ ...formValues, postId: this.postId });
    },
  },
};
</script>

<style scoped>
</style>
