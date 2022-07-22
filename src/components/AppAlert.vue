<template>
  <div :class=[variantClass] role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'AppAlert',
  data() {
    return {
      variantClass: `alert alert-${this.variant}`,
    };
  },
  props: {
    variant: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
