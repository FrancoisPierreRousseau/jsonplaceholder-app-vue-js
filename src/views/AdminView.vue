<template>
  <div class="container">
    <h1 class="text-center mt-4">Page d'administration</h1>

    <app-table v-if="this.posts" :items="this.mapAndPickPost('id','title')">
      <template v-slot:default="slotProps">
        <td>
          <router-link class="me-1 btn btn-primary"
                       to="/admin">Editer {{ slotProps.item.id }}
          </router-link>
          <router-link class="me-1 btn btn-success" to="/admin">Créer</router-link>
          <router-link class="me-1 btn btn-danger" to="/admin">Supprimer</router-link>
        </td>
      </template>
    </app-table>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
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
    mapAndPickPost() {
      return (...propsToPick) => _.map(this.posts, (item) => _.pick(item, ...propsToPick));
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
