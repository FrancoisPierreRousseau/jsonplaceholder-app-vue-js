<template>
  <post-show :populate-user="true" :id="this.$route.params.id">
    <template v-slot:default="slotProps">
      <p>Écrit par: {{ slotProps.user.name }} </p>
    </template>
  </post-show>
</template>

<script>
import PostShow from '@/components/posts/PostShow.vue';

export default {
  name: 'PostView',
  components: {
    PostShow,
  },
};
</script>

<style scoped>

</style>
