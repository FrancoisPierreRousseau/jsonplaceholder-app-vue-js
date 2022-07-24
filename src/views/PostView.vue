<template>
  <post-show :populate-user="true" :id="this.$route.params.id">

    <template v-slot:userDetail="slotProps">
      <p v-if="slotProps.user">Écrit par: {{ slotProps.user.name }} </p>
    </template>

    <template v-slot:comments="slotProps">
      <div class="container mt-5">
        <comments-list :post-id="slotProps.id">
          <template v-slot:form>
            <CommentCreate :post-id="slotProps.id" class="mb-4"/>
          </template>
        </comments-list>
      </div>
    </template>

  </post-show>
</template>

<script>
import PostShow from '@/components/posts/PostShow.vue';
import CommentsList from '@/components/comments/CommentsList.vue';
import CommentCreate from '@/components/comments/CommentCreate.vue';

export default {
  name: 'PostView',
  components: {
    PostShow,
    CommentsList,
    CommentCreate,
  },
};
</script>

<style scoped>

</style>
