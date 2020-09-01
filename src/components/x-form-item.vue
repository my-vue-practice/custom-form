<template>
  <div>
    <!-- label -->
    <label v-if="label">{{ label }}</label>
    <!-- input -->
    <slot />
    <!-- error -->
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'XFormItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      error: '',
    };
  },
};
</script>

<style lang="scss" scoped></style>
