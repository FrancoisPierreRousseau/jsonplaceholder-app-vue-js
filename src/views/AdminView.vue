<template>
  <div class="container">
    <h1 class="text-center mt-4">Page d'administration</h1>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'AdminView',
  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('posts', ['posts']),
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
