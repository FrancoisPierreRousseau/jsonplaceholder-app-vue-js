<template>
  <Form>

  </Form>
</template>

<script>
import { Form } from 'vee-validate';

export default {
  name: 'CommentForm',
  components: {
    Form,
  },
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    initialValues: {
      type: Object,
      default() {
        return { name: '', body: '' };
      },
    },
  },
  data() {
    return {
      formValues: this.initialValues,
    };
  },
};
</script>

<style scoped>

</style>
