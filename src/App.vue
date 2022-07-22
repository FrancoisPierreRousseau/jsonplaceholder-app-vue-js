<template>
  <AppNavNar />
  <router-view />
</template>

<script>
import AppNavNar from '@/components/AppNavBar.vue';

export default {
  components: {
    AppNavNar,
  },
};
</script>

<style lang="scss">
</style>
