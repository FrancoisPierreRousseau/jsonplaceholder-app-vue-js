<template>
  <PostShow
    :id="this.$route.params.id"
  />
</template>

<script>
import PostShow from '@/components/posts/PostShow.vue';

// Post View: J'utiliserais le post selectionné
// Et utiliserai des vues différentes pour les users
// Créer un espace connection ou je pourrais éditer, poster, supprimer un post
export default {
  name: 'PostView',
  components: {
    PostShow,
  },
};
</script>

<style scoped>

</style>
