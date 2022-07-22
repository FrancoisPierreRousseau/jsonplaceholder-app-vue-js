<template>
  <h1 class="text-center">Connection</h1>
  <Form @submit="this.onFormSubmit" :validation-schema="schema">
    <div class="mb-3">
      <label class="form-label">Login:</label>
      <Field v-model="login" name="login" type="text" class="form-control"/>
      <ErrorMessage name="login"/>
    </div>
    <div class="mb-3">
      <label class="form-label">Mot de passe:</label>
      <Field v-model="password" name="password" type="password" class="form-control"/>
      <ErrorMessage name="password"/>
    </div>
    <button class="btn btn-primary">Submit</button>
  </Form>
  <AppAlert class="mt-3" v-if="errorMessage" :message="errorMessage" variant="danger" />
</template>

<script>
import { ErrorMessage, Field, Form } from 'vee-validate';
import * as yup from 'yup';
import { mapActions } from 'vuex';
import AppAlert from '@/components/AppAlert.vue';

export default {
  name: 'ConnectionView',
  data() {
    yup.setLocale({
      mixed: {
        required: 'Le champ est requis',
      },
    });

    const schema = yup.object({
      login: yup.string()
        .required(),
      password: yup.string()
        .required(),
    });

    return {
      errorMessage: '',
      formValues: {
        login: '',
        password: '',
      },
      schema,
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
    AppAlert,
  },
  computed: {
    password: {
      get() {
        return this.formValues.password;
      },
      set(value) {
        this.formValues.password = value;
      },
    },
    login: {
      get() {
        return this.formValues.login;
      },
      set(value) {
        this.formValues.login = value;
      },
    },
  },
  methods: {
    ...mapActions('auth', ['signIn']),

    async onFormSubmit() {
      await this.signIn(this.formValues).catch((err) => {
        this.errorMessage = err.message;
      });
    },
  },
};
</script>

<style scoped>

</style>
