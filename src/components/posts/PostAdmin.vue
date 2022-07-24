<template>
  <router-link class="me-1 btn btn-success" to="/posts/new">Créer</router-link>
  <app-table
    v-if="!this.postUserIsEmpty"
    :items="this.mapAndPickPosts('id','title')">
    <template v-slot:default="slotProps">
      <td>
        <router-link class="me-1 btn btn-primary" :to="`/posts/edit/${slotProps.item.id}`">
          Éditer
        </router-link>
        <router-link class="me-1 btn btn-danger" :to="`/posts/delete/${slotProps.item.id}`">
          Supprimer
        </router-link>
        <router-link class="me-1 btn btn-success" :to="`/posts/${slotProps.item.id}`">
          Voir
        </router-link>
      </td>
    </template>
  </app-table>
  <div v-else>
    <h3 class="text-center mt-5">Créez un post !</h3>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import AppTable from '@/components/AppTable.vue';
import _ from 'lodash';

export default {
  name: 'PostAdmin',
  components: {
    AppTable,
  },
  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('posts', ['posts']),
    ...mapGetters('posts', ['filterByUserId']),
    postUserIsEmpty() {
      return _.isEmpty(this.filterByUserId(this.auth.userId));
    },
    mapAndPickPosts() {
      return (...propsToPick) => _
        .map(this.filterByUserId(this.auth.userId), (item) => _.pick(item, ...propsToPick));
    },
  },
};
</script>

<style scoped>

</style>
