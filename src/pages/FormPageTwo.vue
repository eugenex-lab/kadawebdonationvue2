<template>
  <div class="container">

      <schoolInfoSection></schoolInfoSection>
      <PaymentFlowOne></PaymentFlowOne>

    </div>
<!--  </div>-->
</template>

<script>
import SchoolInfoSection from "@/pages/SchoolInfoSection";
// import PaymentFlowTwo from "@/components/paymentFlow/NewPaymentFlowThree";
import PaymentFlowOne from "@/components/paymentFlow/PaymentFlowOne";
export default {
  name: "FormPageTwo",
  components: {PaymentFlowOne
    , SchoolInfoSection
  },
}
</script>

<style scoped>
.container {
  padding-top: 4rem;
}
</style>
