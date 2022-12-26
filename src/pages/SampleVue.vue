<template >
<div>
</div>
</template>

<script>
// import { mapFields } from "vuex-map-fields";
// import { mapGetters } from "vuex";
import { mapMultiRowFields } from "vuex-map-fields";


export default {
  name: "SampleVue",
  props: {
    placeholder: String,
  },
  data:() => ({
        countryCode: {
            value:"99"
        },
        phoneNumber:{
            value: "99"
        }

}
)
  ,
  computed: {

    ...mapMultiRowFields(["form"]),


    // ...mapFields({
    //   phoneNo: "phoneNumber.value",
    //   countryCd: "countryCode.value"
    // })
    //

    // ...mapGetters({
    //
    //   phoneNo: "phoneNumber.value",
    //   countryCd: "countryCode.value"
    //
    // })
  },
}
</script>

<style scoped>

</style>