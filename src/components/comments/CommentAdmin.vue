<template>
  <app-table v-if="!this.commentsUserIsEmpty"
             :items="this.mapAndPickComments('id','body')"
  >
    <template v-slot:default="slotProps">
      <td>
        <router-link class="me-1 btn btn-primary" :to="`/posts/${
          this.comments[slotProps.item.id].postId
        }`">
          Voir le post
        </router-link>
      </td>
    </template>
  </app-table>
  <div v-else>
    <h3 class="text-center mt-5">Vous n'avez encore laissé de commentaires !</h3>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import _ from 'lodash';
import AppTable from '@/components/AppTable.vue';

export default {
  name: 'CommentAdmin',
  components: { AppTable },
  computed: {
    ...mapState('auth', ['auth']),
    ...mapGetters('comments', ['filterByUserId']),
    ...mapState('comments', ['comments']),
    ...mapState('posts', ['posts']),

    commentsUserIsEmpty() {
      return _.isEmpty(this.filterByUserId(this.auth.userId));
    },
    mapAndPickComments() {
      return (...propsToPick) => _
        .map(this.filterByUserId(this.auth.userId), (comment) => ({
          ..._.pick(comment, ...propsToPick),
          post: this.posts[comment.postId].title,
        }));
    },
  },
  mounted() {
    console.log();
  },
};
</script>

<style scoped>

</style>
