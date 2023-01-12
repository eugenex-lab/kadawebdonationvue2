<template>


  <div>


<!--    <schoolInfoSection></schoolInfoSection>-->
    <FormRightHeader>


      <template v-slot:header>
        {{ causeDetailInfo.name }}

      </template>

      <template v-slot:subHeader>
        Join to fulfill this cause </template>

    </FormRightHeader>

    <payment-flow-one></payment-flow-one>



  </div>

</template>

<script>
// import SchoolInfoSection from "@/pages/SchoolInfoSection";
import PaymentFlowOne from "@/components/paymentFlow/PaymentFlowOne";
import FormRightHeader from "@/components/layout/FormRightHeader";
import {mapFields} from "vuex-map-fields";

export default {
  name: "FormPageOneWeb.Vue",
  components: {FormRightHeader, PaymentFlowOne,
    // SchoolInfoSection
  },
  data() {
    return {
      headerText: "Let's get started",
      subText: "Please fill out the form below to get started",
    };
  },


  mounted() {
    console.log("FormPageOne.vue mounted");
  },
  computed: {
    causeDetailInfo() {
      const indoData = this.$store.state.causeXData
      // check if dataresponse is not 200 return null
      if (indoData.responseCode !== 200) {
        return "No data"
      }
      return indoData.responseContent
    },
    ...mapFields(["causeContributions"]),


  }

}
</script>

<style scoped>







</style>
