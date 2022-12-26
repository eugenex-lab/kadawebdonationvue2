<template>


  <div>


<!--    <schoolInfoSection></schoolInfoSection>-->
    <FormRightHeader>


      <template v-slot:header>
        {{ causeContributions }}  </template>

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
  computed:{
    ...mapFields(["causeContributions"]),

  }

}
</script>

<style scoped>







</style>
