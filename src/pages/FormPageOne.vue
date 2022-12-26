<template>

<div>
  <schoolInfoSection></schoolInfoSection>
<!--  <FormRightHeader>-->


<!--    <template v-slot:header>-->
<!--      Cause Contribution    </template>-->

<!--    <template v-slot:subHeader>-->
<!--      Join to fulfill this cause-->
<!--    </template>-->

<!--  </FormRightHeader>-->

  <payment-flow-one></payment-flow-one>

</div>

</template>

<script>
import SchoolInfoSection from "@/pages/SchoolInfoSection";
import PaymentFlowOne from "@/components/paymentFlow/PaymentFlowOne";
// import FormRightHeader from "@/components/layout/FormRightHeader";

export default {
  name: "FormPageOne.Vue",
  components: {
    // FormRightHeader,
    PaymentFlowOne,
    SchoolInfoSection
  },
  data() {
    return {
      headerText: "Let's get started",
      subText: "Please fill out the form below to get started",
      screenWidth: 0,
    };
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

      if (this.screenWidth > 899) {
        console.log("higer ");

        return  this.$router.push('/');


      }else{
        console.log("lower ");
        
      }
    },
  },
};
</script>

<style scoped>






</style>
