<template>
  <div class="form">
    <form>
      <slot />
    </form>
  </div>
</template>

<script>
export default {
  name: 'XForm',
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
