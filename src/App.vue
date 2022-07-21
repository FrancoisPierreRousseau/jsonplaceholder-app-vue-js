<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/">Inscription</router-link>
        <router-link class="nav-link" to="/">Connection</router-link>
        <router-link class="nav-link" to="/">Deconnection</router-link>
        <router-link class="nav-link" to="/">Administration</router-link>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
