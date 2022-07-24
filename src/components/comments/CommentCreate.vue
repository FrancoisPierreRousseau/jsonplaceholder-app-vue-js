<template>
  <div class="mb-4">
    <CommentForm :on-submit="this.onSubmit"/>
    <AppAlert v-if="this.messageSuccess" :message="this.messageSuccess" variant="success"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CommentForm from '@/components/comments/CommentForm.vue';
import AppAlert from '@/components/AppAlert.vue';

export default {
  name: 'CommentCreate',
  data() {
    return {
      messageSuccess: '',
    };
  },
  components: {
    CommentForm,
    AppAlert,
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
      await this.createComment({
        ...formValues,
        postId: this.postId,
      });
      this.messageSuccess = 'Commentaire créé';
      setTimeout(() => {
        this.messageSuccess = '';
      }, 1150);
    },
  },
};
</script>

<style scoped>
</style>
