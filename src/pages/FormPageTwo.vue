<template>
<!--  <div class="container">-->
    <div>
      <schoolInfoSection></schoolInfoSection>
      <payment-flow-two></payment-flow-two>

    </div>
<!--  </div>-->
</template>

<script>
import SchoolInfoSection from "@/pages/SchoolInfoSection";
import PaymentFlowTwo from "@/components/paymentFlow/NewPaymentFlowThree";
export default {
  name: "FormPageTwo",
  components: {PaymentFlowTwo
    , SchoolInfoSection
  },
}
</script>

<style scoped>
.container {
  width: 400px;
  max-width: 600px;
  margin: 0 auto 0 1.8rem;
}
</style>
