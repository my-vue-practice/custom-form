<template>
  <div>
    <input type="radio" :value="v" @change="change" v-bind="$attrs" />
    <span><slot /></span>
    {{ v }}
  </div>
</template>

<script>
export default {
  name: 'XRadio',
  inheritAttrs: false,
  // 自定义v-model vue 2.2.0+ 新增
  // text 和 textarea 元素使用 value 作为 prop 和 input 作为事件；
  // checkbox 和 radio 元素使用 checked 作为 prop 和 change 作为事件；
  // select 元素使用 value 作为 prop 并将 change 作为事件。
  model: {
    prop: 'v', // defalt: value
    event: 'i', // default: input
  },
  props: {
    v: String,
  },
  methods: {
    change(e) {
      this.$emit('i', e.target.value);
    },
  },
};
</script>

<style lang="sass" scoped></style>
