<template>
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
</template>

<script>
import { ErrorMessage, Field, Form } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'UserForm',
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
      formValues: {
        login: '',
        password: '',
      },
      schema,
    };
  },
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  components: {
    Form,
    Field,
    ErrorMessage,
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
    onFormSubmit() {
      this.onSubmit(this.formValues);
    },
  },
};
</script>

<style scoped>

</style>
