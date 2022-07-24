<template>
  <CommentForm
    :on-submit="this.onSubmit"
    :initial-values="this.comments[this.id]"
  />
</template>

<script>
import CommentForm from '@/components/comments/CommentForm.vue';
import { mapActions, mapState } from 'vuex';

// Ici je ne peux pas conserver l'état, c'est des datas directement stocké au sein
// de vuex, donc pas besoin de fetch

export default {
  name: 'CommentEdit',
  components: {
    CommentForm,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState('comments', ['comments']),
  },
  methods: {
    ...mapActions('comments', ['editComment']),
    async onSubmit(formValues) {
      await this.editComment({ id: this.id, formValues });
    },
  },
};
</script>

<style scoped>

</style>
