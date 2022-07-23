<template>
  <div class="container">
    <h1 class="text-center mt-4">Page d'administration</h1>
    <router-link class="me-1 btn btn-success" to="/posts/new">Créer</router-link>
    <app-table
       v-if="!this.isEmptyPostsUserId"
       :items="this.mapAndPickPosts('id','title')">
      <template v-slot:default="slotProps">
        <td>
          <router-link class="me-1 btn btn-primary" :to="`/posts/edit/${slotProps.item.id}`">
            Éditer
          </router-link>
          <router-link class="me-1 btn btn-danger" to="/admin">Supprimer</router-link>
        </td>
      </template>
    </app-table>
    <div v-else>
      <h3 class="text-center mt-5">Créez un post !</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import AppTable from '@/components/AppTable.vue';
import _ from 'lodash';

export default {
  name: 'AdminView',
  components: {
    AppTable,
  },
  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('posts', ['posts']),
    ...mapGetters('posts', ['filterByUserId']),
    isEmptyPostsUserId() {
      return _.isEmpty(this.filterByUserId(this.auth.userId));
    },
    mapAndPickPosts() {
      return (...propsToPick) => _
        .map(this.filterByUserId(this.auth.userId), (item) => _.pick(item, ...propsToPick));
    },
  },
  methods: {
    ...mapActions('posts', ['fetchPosts']),
  },
  // eslint-disable-next-line no-empty-function
  async mounted() {
    await this.fetchPosts({
      userId: this.auth.userId,
    });
  },
};
</script>

<style scoped>

</style>
