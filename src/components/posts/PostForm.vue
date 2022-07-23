<template>
  <Form @submit="this.onFormSubmit" :validation-schema="schema">
    <div class="mb-3">
      <label class="form-label">Title:</label>
      <Field v-model="title" name="title" type="text" class="form-control"/>
      <ErrorMessage name="title"/>
    </div>
    <div class="mb-3">
      <label class="form-label">Body:</label>
      <Field v-model="body" as="textarea" name="body" class="form-control"/>
      <ErrorMessage name="body"/>
    </div>
    <button class="btn btn-primary">Submit</button>
  </Form>
</template>

<script>
import { ErrorMessage, Field, Form } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'PostForm',
  data() {
    yup.setLocale({
      mixed: {
        required: 'Le champ est requis',
      },
    });

    const schema = yup.object({
      title: yup.string()
        .required(),
      body: yup.string()
        .required(),
    });

    return {
      formValues: {
        title: '',
        body: '',
      },
      schema,
    };
  },
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    initialValues: {
      type: Object,
    },
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  computed: {
    title: {
      get() {
        return this.formValues.title;
      },
      set(value) {
        this.formValues.title = value;
      },
    },
    body: {
      get() {
        return this.formValues.body;
      },
      set(value) {
        this.formValues.body = value;
      },
    },
  },
  methods: {
    async onFormSubmit() {
      await this.onSubmit(this.formValues);
    },
  },
};
</script>

<style scoped>

</style>
