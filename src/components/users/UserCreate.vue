<template>
  <div>
    <UserForm
      :on-submit="this.onSubmit"
    />
    <AppAlert class="mt-3" v-if="errorMessage" :message="errorMessage" variant="danger" />
  </div>
</template>

<script>
import UserForm from '@/components/users/UserForm.vue';
import AppAlert from '@/components/AppAlert.vue';
import { mapActions } from 'vuex';

export default {
  name: 'UserCreate',
  data() {
    return {
      errorMessage: '',
    };
  },
  components: {
    UserForm,
    AppAlert,
  },
  methods: {
    ...mapActions('users', ['createUser']),

    async onSubmit(formValues) {
      await this.createUser(formValues)
        .catch((err) => {
          this.errorMessage = err.message;
        });
    },
  },
};
</script>

<style scoped>

</style>
