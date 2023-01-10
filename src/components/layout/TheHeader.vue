<template>
 <header class="mobileHeader">
  <div class="logo">
    <img class="kadaLogoHomePage" :src="kadaLogo" alt="logo">
    </div>
    <div v-show="!this.$store.getters.errorPage" class="mobileHeaderText">

        Let's Build Together
    </div>

    <div   v-show="this.$store.getters.errorPage" class="mobileHeaderError logoAdded"   >
      <div class="formatHeaderTextInfo" >
        Download App
      </div>
      <a class="clickPress"  href="https://apps.apple.com/ng/app/kada-alumni/id1528746717" target="_blank">
        <img class="appLOgo" :src="kadaLogoIOS" alt="logo">
      </a>
      <a class="clickPress"  href="https://play.google.com/store/apps/details?id=ng.wealthtech.kada" target="_blank">
        <img class="appLOgo" :src="kadaLogoAndriod" alt="logo">

      </a>
    </div>






  </header>

</template>

<script>
import kadaLogo from '@/assets/kadaLogo.svg';

import kadaLogoIOS from '@/assets/appStoreBadgeIos.webp';
import kadaLogoAndriod from '@/assets/appStoreBadgePlayStore.webp';
// import {useStore} from "vuex";
export default {
  name: "TheHeader",
  data() {
    return {
      kadaLogo: kadaLogo,
      kadaLogoAndriod: kadaLogoAndriod,
      kadaLogoIOS: kadaLogoIOS,


    }
  },

  computed: {

    payRef() {
      return this.$store.getters.initStripeData.paymentTransactionReference
    },

  },

  mounted() {

    // run a computed property to get the error status
    const errorStatus = this.$store.getters.errorStatus;
    console.log("c% &&$$$$ ZZZZZZZZZZ errorStatus is " + errorStatus, "color: red; font-size: 50px;");
    this.errorStatus = errorStatus;


    console.log("%c Header Mounted", "color: green; font-size: 20px" , this.errorStatus)


  },



  // beforeCreate: function (){
  //
  //   const store = useStore()
  //   // use store.commit to run any mutation. Below we are running the loadStore mutation
  //   store.commit('initializeStoreErorrStatus');
  //
  // }

}
</script>

<style scoped>

header {
  /*padding: 60px;*/
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}




.mobileHeader .kadaLogoHomePage {
  Width: 49px;
  Height: 18px;
  float: left;
  margin-left: 2rem;
  margin-top: 0.9rem;
}

.formatHeaderTextInfo{
  color: #010D1C;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
}


@media  screen and  (min-width: 899px) {


  .mobileHeaderError.logoAdded {
    padding-right: 3rem;
    /* opacity: 0.37; */
    color: hsl(213deg 93% 6%);
    font-family: "SF Pro Text";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    /*width: 27rem;*/
    line-height: 13px;
    position: absolute;
    /* bottom: 2px; */
    /* bottom: 2px; */
    right: 4px;
    /* margin-top: 3rem; */
    /* float: right; */
    /* margin-left: 8rem; */
    margin-top: 1.34rem;
    display: flex;
  }

  .mobileHeader[data-v-9778edae] {
    color: hsl(0deg 59% 17%);
    text-align: center;
    font-size: 20px;
    z-index: 20;
    padding-bottom: 3rem;
    padding-top: 1.5rem;
    background-color: hsl(212deg 100% 97%);
    /* position: relative; */
    top: 0px;
    position: relative;
    width: auto;
  }

  .mobileHeaderText[data-v-9778edae] {
    padding-right: 7rem;
    opacity: 0.37;
    color: hsl(213deg 93% 6%);
    font-family: "SF Pro Text";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 13px;
    position: absolute;
    /* bottom: 2px; */
    /* bottom: 2px; */
    right: 4px;
    margin-left: 1rem;
    margin-top: 1.34rem;
    position: absolute;
    top: 0.2em;
  }

  .mobileHeader .kadaLogoHomePage[data-v-9778edae][data-v-9778edae][data-v-9778edae] {
    Width: 10%;
    /* Height: 53%; */
    float: left;
    padding-left: 3.5rem;
    margin-top: 0.9rem;
  }

  .containLayout {
    background-color: #c9c4c4;
    width: 100%;
    height: 100%;
    /* z-index: -4; */
    /* position: absolute; */
  }




}

@media  screen and  (max-width: 899px) {

  body{}



  .mobileHeader[data-v-9778edae] {
    color: #461212;
    text-align: center;
    font-size: 20px;
    z-index: 20;
    padding-bottom: 0rem;    background-color: #F7fbff;
    /* position: relative; */
    position: sticky;
    top: 0px;
    /* position: fixed; */
    height: 2.5rem;
    display: flex;
    justify-content: space-around;
    align-content: flex-start;
    position: absolute;
    margin: 0;

  }




  .mobileHeaderError.logoAdded {
 visibility: hidden;
  }



  .mobileHeaderText.logoAdded {
    visibility: hidden;
  }

  .mobileHeaderText {
    padding-right: 2rem;
     opacity: 0.37;
    color: hsl(213deg 93% 6%);
    font-family: "SF Pro Text";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 13px;
    position: absolute;
    /* bottom: 2px; */
    /* bottom: 2px; */
    right: 4px;
    /* margin-top: 3rem; */
    /* float: right; */
    margin-left: 1rem;
    margin-top: -0.02rem;
  }

}

@media  screen and  (max-width: 899px) {
   .mobileHeader {
    color: hsl(0deg 59% 17%);
    text-align: center;
    font-size: 20px;
    z-index: 20;
    /*padding-bottom: 3rem;*/
    padding-top: 1.5rem;
    background-color: hsl(212deg 100% 97%);
    /* position: relative; */
    top: 0px;
    position: fixed;
    width: 100%;
  }

}

  .logo {
    width: 100%;
    position: absolute;
    top: 0.2em;

    /* display: flex; */
    /* flex-direction: row; */
    /* align-content: flex-start; */
    /* justify-content: flex-start; */

}


img.appLOgo {
  width: 9rem;
  height: 2.6rem;
  /* padding-bottom: 1rem; */
  padding-left: 0.7rem;
  position: relative;
  top: -0.5rem;
}

.mobileHeaderText.logoAdded {
  display: flex;
}


.mobileHeader{
  color: #461212;
  text-align: center;
  font-size: 20px;
  z-index: 20;
  padding-bottom: 3rem;
  background-color: #F7fbff;
  /*position: relative;*/
  position: sticky; /*(recomended)*/
  top: 0px;
  /*position: fixed;*/

}

.mobileHeaderError{

}

.clickPress{
  display: inline-block;

  background: #f7fbff;
  color: #461212;
  cursor: pointer;
  &:hover{
    background: #461212;
    color: #f7fbff;
  }
}



</style>
