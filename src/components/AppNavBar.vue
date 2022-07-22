<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link v-if="!user.isSigned" class="nav-link" to="/register">Inscription</router-link>
        <router-link v-if="!user.isSigned" class="nav-link" to="/connect">Connection</router-link>
        <button
          v-if="user.isSigned"
          class="nav-link btn btn-link"
          v-on:click="this.signOut">Deconnection</button>
        <router-link v-if="user.isSigned" class="nav-link" to="/">Administration</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'AppNavBar',
  computed: {
    ...mapState('auth', ['user']),
  },
  methods: {
    ...mapActions('auth', ['signOut']),
  },
};
</script>

<style scoped>

</style>
