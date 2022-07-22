<template>
  <div>
    <h1 class="text-center">Inscription</h1>
    <UserCreate />
  </div>
</template>

<script>
import UserCreate from '@/components/users/UserCreate.vue';

export default {
  name: 'RegisterView',
  components: {
    UserCreate,
  },
};
</script>

<style scoped>

</style>
