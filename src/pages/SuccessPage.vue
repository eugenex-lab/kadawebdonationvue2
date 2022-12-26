<template>
<div>
  <div>
<!--        <schoolInfoSection></schoolInfoSection>-->
    <SchoolInfoSection  class="formatTopInfoSch">
      <slot name="schoolInfoSection"></slot>
    </SchoolInfoSection>
    <FormRightHeader>


      <template v-slot:header>
        Payment Successful      </template>

      <template v-slot:subHeader>
        Your contribution to this cause was successful      </template>

    </FormRightHeader>
    <PaymentSuccess></PaymentSuccess>
</div>
</div>
</template>

<script>

import PaymentSuccess from "@/components/paymentFlow/PaymentSuccess";
import FormRightHeader from "@/components/layout/FormRightHeader";
import SchoolInfoSection from "@/pages/SchoolInfoSection.vue";

export default {
  name: "TextView",
   components:{
     SchoolInfoSection,
     PaymentSuccess, FormRightHeader,
   }
}
</script>

<style scoped>


@media (min-width: 901px) {
  .formatTopInfoSch {
    display: none;

  }

}

</style>
