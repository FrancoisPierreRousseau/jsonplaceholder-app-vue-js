<template>
  <Form @submit="this.onFormSubmit" :validation-schema="schema">
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <div class="form-group">
          <label class="form-label" for="name" id="name">Nom:</label>
          <Field
            v-model="name"
            name="name" type="text" class="form-control" :disabled="this.auth.isSigned"/>
          <ErrorMessage name="name"/>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 fl_icon">
        <div class="form-group fl_icon">
          <label class="form-label" for="email" id="email">Email:</label>
          <Field v-model="email" name="email" type="email" class="form-control"/>
          <ErrorMessage name="email"/>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="form-group">
          <label class="form-label" id="body" for="body">Message:</label>
          <Field v-model="body" as="textarea" name="body" class="form-control"/>
          <ErrorMessage name="body"/>
        </div>
      </div>
    </div>
    <button class="btn btn-primary mt-3">submit</button>
  </Form>
</template>

<script>
import { ErrorMessage, Field, Form } from 'vee-validate';
import * as yup from 'yup';
import { mapState } from 'vuex';

export default {
  name: 'CommentForm',
  components: {
    Form,
    ErrorMessage,
    Field,
  },
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    initialValues: {
      type: Object,
      default() {
        return {
          name: '',
          body: '',
          email: '',
        };
      },
    },
  },
  data() {
    yup.setLocale({
      mixed: {
        required: 'Le champ est requis',
      },
    });

    const schema = yup.object({
      name: yup.string()
        .required(),
      body: yup.string()
        .required(),
      email: yup.string()
        .required(),
    });

    return {
      formValues: this.initialValues,
      schema,
    };
  },
  computed: {
    body: {
      get() {
        return this.formValues.body;
      },
      set(value) {
        this.formValues.body = value;
      },
    },
    name: {
      get() {
        return this.formValues.name;
      },
      set(value) {
        this.formValues.name = value;
      },
    },
    email: {
      get() {
        return this.formValues.email;
      },
      set(value) {
        this.formValues.email = value;
      },
    },

    ...mapState('auth', ['auth']),
    ...mapState('users', ['users']),
  },
  methods: {
    async onFormSubmit() {
      await this.onSubmit(this.formValues);
      this.formValues = this.initialValues;
    },
  },
  mounted() {
    this.formValues.name = this.auth.isSigned
      ? this.users[this.auth.userId].name
      : '';
  },
};
</script>

<style scoped>
</style>
