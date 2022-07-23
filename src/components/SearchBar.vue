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
import { mapActions, mapState } from 'vuex';

export default {
  name: 'SearchBar',
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapState('thematic', ['term']),
    termSearch: {
      get() {
        return this.term;
      },
      set(value) {
        this.setTerm(value);
      },
    },
  },
  methods: {
    ...mapActions('thematic', ['setTerm']),
    onFormSubmit() {
      this.onSubmit(this.term);
    },
  },
};
</script>

<style scoped>

</style>
