<template>
  <input ref="inputRef" type="text" />
</template>

<script>
// import { useCurrencyInput } from "vue-currency-input";
// import { watchDebounced } from "@vueuse/core";

import { useCurrencyInput } from 'vue-currency-input'


export default {
  name: "DebouncedCurrencyInput",
  props: {
    modelValue: Number, // Vue 2: value
    options: Object,
  },
  setup(props) {
    const { inputRef } = useCurrencyInput(props.options)

    return { inputRef }
  }


};
</script>