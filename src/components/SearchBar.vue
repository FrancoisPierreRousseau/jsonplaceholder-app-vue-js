<template>
  <form @submit="this.onFormSubmit">
    <div class="form-group row">
      <label for="term" class="col-sm-2 col-form-label">Marquez une thématique:</label>
      <div class="col-sm-10">
        <input @change="(e) => this.onFormSubmit(e.target.value)" v-model="termSearch"
               type="text" class="form-control" id="term" placeholder="Password">
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      term: 'programming',
    };
  },
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  computed: {
    termSearch: {
      get() {
        return this.term;
      },
      set(value) {
        this.term = value;
      },
    },
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      this.onSubmit(this.term);
    },
  },
};
</script>

<style scoped>

</style>
