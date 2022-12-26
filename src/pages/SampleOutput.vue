<template>

<di>
    <pre>countryCode: {{ form.countryCode }}</pre>

    <pre>phoneNumber: {{ form.phoneNumber }}</pre>

</di>

</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";
import { mapMultiRowFields } from "vuex-map-fields";


export default {
  name: "ShowOutput",

computed: {
  // The `mapFields` function takes an array of
  // field names and generates corresponding
  // computed properties with getter and setter
  // functions for accessing the Vuex store.
  ...mapMultiRowFields(["form"]),

  ...mapFields(["form"]),
...mapGetters(["form"])
}
}
</script>

<style scoped>

</style>