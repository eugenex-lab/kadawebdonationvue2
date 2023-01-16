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


  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();



  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;

      if (this.screenWidth > 898) {

        this.$router.go(-1);

        // return  this.$router.push('/');      //<---  need this method
      }else{
        console.log("lower ");

      }
    },
  },

}
</script>

<style scoped>
.container {
  padding-top: 4rem;
}
</style>
