<template>
  <app-modal content="Supprimez le post"
             title="Supprimez un post"
             :on-dismiss="() => this.$router.push({ path: '/admin' })">
    <template v-slot:actions>
      <button
        class="btn btn-danger"
        @click="this.deletePost(this.$route.params.id)">
        Delete
      </button>
      <router-link
        class="btn btn-primary"
        to="/admin">
        Cancel
      </router-link>
    </template>
  </app-modal>
</template>

<script>
import AppModal from '@/components/AppModal.vue';
import { mapActions } from 'vuex';

export default {
  name: 'PostDelete',
  components: { AppModal },
  methods: {
    ...mapActions('posts', ['deletePost']),
  },
};
</script>

<style scoped>
</style>
