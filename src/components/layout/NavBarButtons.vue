<template>
  <div>

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <nav class="nav" >

    <a class="redirectUrlLayout">
    <a :href="kadaurlIOS" class="nav__link iosButton" v-show="testForIos" target="_blank">
<!--      <i class="material-icons nav__icon">-->
        <img class="iosIconFormat" :src="appleLinkStore">
<!--      </i>-->
<!--      <span class="nav__text">Dashboard</span>-->

    </a>

    <a :href="kadaurlAndroid" class="nav__link androidButton" v-show="!testForIos" target="_blank">
<!--      <i class="material-icons nav__icon">-->
        <img class="androidIconFormat" :src="andriodLinkStore">
<!--      </i>-->
<!--      <span class="nav__text">Dashboard</span>-->
    </a>
    </a>



    <a
       class="nav__link donateButton"  @click="methodBeginForm"  >
      <a  :href="kadaurl"  target="_blank"  >
        <img  :src="visitWebBUtton"   v-show="this.$store.getters.errorPage" class="submitIconFormat"  visitWebBUtton>
      </a>
      <img v-show="!this.$store.getters.errorPage" class="submitIconFormat" :src="continueToForm" >

    </a>




  </nav>
  </div>

</template>

<script>

import donateButton from "@/assets/donateButton.svg";
import appleLinkStore from '@/assets/lotticeWhiteApple.gif';
import andriodLinkStore from "@/assets/lotticeAndriodWHite.gif";
import webButton from "@/assets/buttonVisitONError.png";
// import {useRoute} from "vue-router";

export default {
  name: "NavBarButtons",

  data() {
    return {
      appleLinkStore: appleLinkStore,
      andriodLinkStore: andriodLinkStore,
      visitWebBUtton: webButton,
      kadaurl: "https://kada.ng",

      continueToForm: donateButton,
      kadaurlIOS: "https://apps.apple.com/ng/app/kada-alumni/id1528746717",
      kadaurlAndroid: "https://play.google.com/store/apps/details?id=ng.wealthtech.kada",
      testForIos: null,

    }
  },
  props: {
    // add props to add param to the component
    // add props to add param to the component

    id: {
      type: String,
      default: null
    },
  },
  methods: {
    methodBeginForm() {
      // alert("methodBeginForm")

      // return  window.location.href = '/causecontribution/form'  //
      // return this.$router.push({path : '/causecontribution/form' });

    },

    browserDetails(){


      var platform = ["Win32", "Android", "iOS" ,
        "Macbook", "Macintosh", "MacIntel", "MacPPC", "Mac68K",
        "IOS", "iPhone", "iPad",
        "Linux", "MacIntel", "MacPPC", "Mac68K", "X11", "Linux i686", "Linux x86_64",
      ];

      for (var i = 0; i < platform.length; i++) {

        if (navigator.platform.indexOf(platform[i]) >- 1) {

          return platform[i];
        }
      }

    },

    checkBrowser(){
      if (this.browserDetails() === "iOS" || this.browserDetails() === "MacPPC"
          || this.browserDetails() === "Mac68K" || this.browserDetails() === "iPhone"
          || this.browserDetails() === "iPad" || this.browserDetails() === "MacIntel"
          || this.browserDetails() === "Macintosh" || this.browserDetails() === "Macbook"
          || this.browserDetails() === "IOS"
      )
      {
        console.log("this is a linux machine")
        this.testForIos = true;


        return true
      }
      else{
        console.log("this is not a linux machine")
        this.testForIos = false;
      }
      console.log("this is an Ios device --> " + this.testForIos)
    }

  },
  beforeMount() {
    this.checkBrowser();
  }
}
</script>

<style scoped>

.nav[data-v-5eb0a53c][data-v-5eb0a53c] {

  position: fixed;
  bottom: 0;
  width: 100%;
  height: 71px;
  box-shadow: 0 0 3px rgb(0 0 0 / 20%);
  background-color: #ffffff;
  display: flex;
  margin-left: -0.9rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  z-index: 100;
  padding: 0 0.9rem;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%,-50%); */
  align-items: center;
  justify-content: center;


}

.donateButton {
margin-right: 2.9rem;
height: 4.5rem;
position: absolute;
/*margin-left: -14rem;*/
  top: 0.25rem;
}

a.nav__link.donateButton {

  top: 1.05rem;
  /* right: -1.3rem; */
  /* position: absolute; */
  /* padding-left: 8rem; */
  top: 0.2rem;
  /* left: 2.5rem; */
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  /*padding-left: 8rem;*/
  margin: auto auto auto 8rem;

}

.redirectUrlLayout {

  top: 1.09rem;
  left: 2.5rem;
  display: flex;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 9rem;
  padding-top: 0.1rem;

}


img.iosButton{
  width: 8rem;
  height: 2.5rem;
}

img.androidIconFormat {

  width: 8rem;
  height: 2.5rem;

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

  width: 8rem;
  height: 2.5rem;

}



img.submitIconFormat {
  width: 8rem;
  height: 2.5rem;
}

a.iosButton{
  padding-top: 0.8rem;
}


@media  screen and (min-width: 899px) {
  .nav[data-v-5eb0a53c][data-v-5eb0a53c] {
    display: none;
  }
}







</style>