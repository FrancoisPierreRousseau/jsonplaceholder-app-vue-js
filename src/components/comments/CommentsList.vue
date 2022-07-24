<template>
  <slot name="form"></slot>
  <h1 class="comments-title">Comments ({{ this.reversComments.length }})</h1>
  <CommentItem v-for="comment in this.reversComments" :key="comment.id" :comment="comment"/>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import CommentItem from '@/components/comments/CommentItem.vue';

export default {
  name: 'CommentsList',
  props: {
    postId: null,
  },
  components: {
    CommentItem,
  },
  computed: {
    ...mapState('comments', ['comments']),
    ...mapGetters('comments', ['reversComments']),
  },
  methods: {
    ...mapActions('comments', ['fetchComments']),
  },
  async mounted() {
    await this.fetchComments({ postId: this.postId });
  },
};
</script>

<style scoped>
.comments-title {
  font-size: 16px;
  color: #262626;
  margin-bottom: 15px;
}
</style>
