<template>
  <post-show :populate-user="true" :id="this.$route.params.id">
    <template v-slot:userDetail="slotProps">
      <p v-if="slotProps.user">Écrit par: {{ slotProps.user.name }} </p>
    </template>
    <template>
      <CommentsList :post-id="this.$route.params.id" />
    </template>
  </post-show>
</template>

<script>
import PostShow from '@/components/posts/PostShow.vue';
import CommentsList from '@/components/comments/CommentsList.vue';

export default {
  name: 'PostView',
  components: {
    PostShow,
    CommentsList,
  },
};
</script>

<style scoped>

</style>
