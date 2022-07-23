<template>
  <table class="table">
    <thead>
    <tr>
      <th v-for="column in columns" :key="column" scope="col">{{ column }}</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items" :key="item">
      <td v-for="column in columns" :key="column">{{ item[column] }}</td>
      <slot :item="item">

      </slot>
    </tr>
    </tbody>
  </table>
</template>

<script>
import _ from 'lodash';
// Normalement il faudrait séparer les fields des datas pour gérer la complexité (vue-bootstrap)
// Mais cela complexifie le code
export default {
  name: 'AppTable',
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  computed: {
    columns() {
      return _.uniq(_.flatten(_.map(this.items, (val) => _.keys(val))));
    },
  },
};
</script>

<style scoped>

</style>
