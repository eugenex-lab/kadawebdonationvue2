<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <nav class="nav" >
    <a
        class="nav__link donateButton"  @click="methodBeginForm" >
      <img class="submitIconFormat" :src="continueToForm">
    </a>
  </nav>



</template>

<script>
import continueButoon from "@/assets/Continuebhevron.svg";
import {mapFields} from "vuex-map-fields";

export default {
  name: "NavContinueButton",
  /* eslint-disable */
  props:['amountDonation','currency'],

  data() {
    return {
      continueToForm: continueButoon,

    }
  },
  methods: {
    methodBeginForm() {
      console.log("clicked continue to payment 2 page");
      this.$router.push('/paymentinfo');

      // log the prop value
      console.log("we outtta " + this.amountDonation, this.currency);




    },
  },
  computed: {
    // computed property for form validation
    // isValid() {
    //   return this.amountDonation > 0;
    // },
    ...mapFields(["amountDonation.donationValue", "amountDonation.options", "currency", "minimumDonation" , "dollarMinimumDonation", "nairaMinimumDonation" ])


  },

  }
</script   >

<style scoped>

.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 71px;
  box-shadow: 0 0 3px rgb(0 0 0 / 20%);
  background-color: #ffffff;
  display: flex;
  margin-left: -2.5rem;
  overflow-x: auto;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-family: sans-serif;
  font-size: 13px;
  color: #444444;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out;
}

.iosButton{
  margin-left: 1.9rem;
  height: 4.5rem;
  position: relative;
}

img.androidIconFormat {
  width: 52rem;
  height: 3rem;
  /* border: 36rem; */
  border-radius: 25rem;
}

.donateButton {
  height: 4.5rem;
  position: relative;
  margin-left: 2rem;
}



.nav__link:hover {
  /*background-color: #d02727;*/
}

.nav__link--active {
  color: #009578;
}

.nav__icon {
  font-size: 18px;
}

.iosIconFormat{
  width: 30rem;
  height: 3rem;
}



img.submitIconFormat {
  width: 20.5rem;
  height: 3.4rem
}

@media  screen and (max-width: 415px) {

  .nav {
    position: fixed;
    bottom: 0;
    width: 105%;
    height: 71px;
    box-shadow: 0 0 3px rgb(0 0 0 / 20%);
    background-color: #ffffff;
    display: flex;
    margin-left: 0.1rem;
    overflow-x: auto;
  }

  .donateButton {
    /* margin-right: 3.9rem; */
    height: 4.5rem;
    position: relative;
    margin-left: 3rem;
  }

}

@media  screen and (max-width: 375px) {

  .donateButton {
    margin-right: 3.9rem;
    height: 4.5rem;
    position: relative;
    margin-left: 0rem;
  }

}
</style>