<template>
  <div>
    <label>
      <input type="radio" :value="label" v-model="model" v-bind="$attrs" />
      <slot /> - {{label}} - {{value}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'XRadio',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: String,  // 父组件 v-model 传过来的值
  },
  computed: {
    model: {
      set(v) {
        // console.log('[set model]', v);
        this.$emit('input', v); // 将值更新到父组件的 v-model 上
      },
      get() {
        // console.log('[get model]');
        return this.value;
      },
    },
  },
};
</script>

<style lang="sass" scoped></style>
