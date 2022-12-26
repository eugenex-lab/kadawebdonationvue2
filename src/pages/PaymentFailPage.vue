
<template>
  <div>
    <div>
      <!--    <schoolInfoSection></schoolInfoSection>-->
      <FormRightHeader>


        <template v-slot:header>
          Payment UnSuccessful      </template>

        <template v-slot:subHeader>
          Your contribution to this cause was unsuccessful {{this.$store.state.causeId}}     </template>

      </FormRightHeader>
      <PaymentFail></PaymentFail>
    </div>
  </div>
</template>

<script>

import FormRightHeader from "@/components/layout/FormRightHeader";
import PaymentFail from "@/components/paymentFlow/PaymentFail.vue";

export default {
  name: "PaymentFailPage",
  components:{
    PaymentFail, FormRightHeader
  }
}
</script>

<style scoped>

</style>
