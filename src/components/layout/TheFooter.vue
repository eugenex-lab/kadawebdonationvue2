<template>
<div class="theFooter">

<!--  <div class="row footer-container">-->
    <div class="column col1">

      <div class="topDescription">
        <a class="formatImageLogo" href="https://kada.ng" target="_blank">

          <img class="kadaLogoHomePage" :src="kadaLogo" alt="logo">

        </a>
        <div class="infoCompany">
          Kada is a product of WealthTech. The makers of Wealth.ng </div>

        <div class="copyRight">
          Kada. Copyright (C) 2020. All rights reserved
        </div>

      </div>

      <div class='divSocialMedia'>
        <a class='child inline-block-child' target="_blank" href="https://web.facebook.com/profile.php?id=100069224173525">
<img class="socialMedia"  src="https://dp76jxyzopnbo.cloudfront.net/kada/images/1384005.png" alt="">
        </a>
        <a class='child inline-block-child' target="_blank" href="https://twitter.com/kada_app">
          <img class="socialMedia" target="_blank" src="https://dp76jxyzopnbo.cloudfront.net/kada/images/1384017.png" alt="">
        </a>

        <a class='child inline-block-child' target="_blank" href="https://www.instagram.com/kada_app/">
          <img  class="socialMedia" target="_blank" src="https://dp76jxyzopnbo.cloudfront.net/kada/images/1384015.png" alt="">
        </a>
        <a class='child inline-block-child' target="_blank" href="https://www.linkedin.com/company/kada-app/">
          <img  class="socialMedia" target="_blank" src="https://dp76jxyzopnbo.cloudfront.net/kada/images/1384014.png" alt="">
        </a>

      </div>

    </div>
    <div class="column col2">


        <a class="row" href="https://kada.ng/How-it-works.html" target="_blank">How it works<a/>

        <a  class="row" href="https://kada.ng/Contact.html" target="_blank" >Contact Us</a>

        <a   class="row" href="https://kada.ng/FAQs.html" target="_blank">FAQs</a>

        </a>

    </div>

    <div class="column col3">

          <a class="row" href="https://kada.ng/index.html" target="_blank"
        >Register Your School</a>

          <a  class="row" href="https://dp76jxyzopnbo.cloudfront.net/kada/download/Kada%20Alumni%20Terms%20&%20Conditions.pdf" target="_blank" >Terms & Conditions</a>

          <a   class="row" href="https://dp76jxyzopnbo.cloudfront.net/kada/download/Privacy%20Statement%20-%20Kada.pdf" target="_blank">Privacy Policy</a >



    </div>
    <div class="column col4">
      
      <a class="positionIosLogo" target="_blank" href="https://apps.apple.com/ng/app/kada-alumni/id1528746717">
<!--        <img src="./src/assets/lotticeApple.gif" alt="w">-->
        <img class="imageLogoApple" :src=appleLogo alt="">
      </a>
      <a class="positionAndriodLogo" target="_blank" href="https://play.google.com/store/apps/details?id=ng.wealthtech.kada">
        <!--        <img src="./src/assets/lotticeApple.gif" alt="w">-->
        <img  class="imageLogoAndroid" :src=playStoreLogo alt="">
      </a>
      
    </div>
</div>


<!--</div>-->
</template>

<script>
import kadaLogo from "@/assets/kadaLogoW.webp";
import lotticeApple from "@/assets/lotticeApple.gif";
import appleLogo from "@/assets/lotticePlayStore.gif";

export default {
  name: "TheFooter",
  data() {
    return {
      kadaLogo: kadaLogo,
      appleLogo: lotticeApple,
      playStoreLogo: appleLogo,
    }
  }
}
</script>

<style scoped>

.positionAndriodLogo{
  /*position: absolute;*/
  cursor: pointer;

}

.positionIosLogo{
  /*position: absolute;*/

  margin-bottom: 4rem;
  cursor: pointer;

}

.col4{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
   width: 35rem;
  align-items: flex-start;
  /*flex-wrap: nowrap;*/
  /*position: relative;*/
}

.imageLogoApple{
  height: 43px;
  width: 95px;
}

.imageLogoAndroid{
  height: 40px;
  width: 95px;
  margin-top: 0.02rem;
  padding-left: 0.5rem;
}

.kadaLogoHomePage {
  height: 35px;
  width: 95px;
}

.formatImageLogo{
  text-align: left;
  /*padding-top: 4rem;*/
  padding-bottom: 0.7rem;
  padding-left: 2rem;

}

.infoCompany[data-v-d9ddb592] {
  width: 26em;
  color: hsl(0deg 0% 100%);
  font-family: Inter;
  font-weight: 500;
  /* letter-spacing: 0; */
  line-height: 17px;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  padding-top: 0.8rem;
}

.copyRight {
  text-align: left;
  padding-top: 1.5rem;
  color: #FFFFFF;

  letter-spacing: 0;
  line-height: 13px;
  /* text-align: center; */
  font-weight: 300;
  font-size: 0.6875rem;
  font-family: Inter;
  font-weight: 300;
}

.theFooter{
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 0 3px rgb(0 0 0 / 20%);
  /* background-color: #ff0000; */
  display: flex;
  height: 546px;
  /* transform: scaleY(-1); */
  /* background-color: #023B88; */
  /* margin-left: -0.9rem; */
  /* overflow-x: auto; */
  /* overflow-y: hidden; */
  /* white-space: nowrap; */
  -webkit-overflow-scrolling: touch;
  z-index: 100;
  /* padding: 0 0.9rem; */
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  /*transform: translate3d(0, 0, 0);*/
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%,-50%); */
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  padding-left: 7% ;
  background-color: #143c83;
  padding-top: 3em ;
}


a.row {
  color: hsl(0deg 0% 100%);
  text-decoration-line: none;
}


.row{
  /*// remove the list style*/
  list-style: none;
  padding-bottom: 1.7rem;
  text-align: left;
  color: white;
  cursor: pointer;

  /*// give div properties of a link*/
  display: block;

}

.row:hover
{
opacity: 80%;


}

ul.formatList {
  padding-top: 3.5rem;
}

.displayInline{
  display: inline-block;
   display: flex;
  flex-direction: row
}

.column.col2 {
  padding-top: 1.5rem;
}

.column.col3 {
  padding-top: .8rem;
}


.inline-block-child {
  display: inline-block;
}




.divSocialMedia {
  /* padding: 1rem; */
  width: 16rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding-top: 2rem;
}

.child {
  /*    border: 1px solid indigo; */
  padding-right: 1rem
}

img.socialMedia {
  object-fit: contain;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

}

@media screen and (max-width: 899px) {

  .theFooter {
display: none;
  }
}

@media screen and (min-width: 899px) {


  .col4[data-v-d9ddb592] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* width: 35rem; */
    align-items: flex-start;
    /* flex-wrap: nowrap; */
    /* position: relative;

     */
  }

  .theFooter[data-v-d9ddb592] {
    position: relative;
    bottom: 0;
    width: 100%;
    box-shadow: 0 0 3px rgb(0 0 0 / 20%);
    /* background-color: #ff0000; */
    display: flex;
    height: 400px;
    /* transform: scaleY(-1); */
    /* background-color: #023B88; */
    /* margin-left: -0.9rem; */
    /* overflow-x: auto; */
    /* overflow-y: hidden; */
    /* white-space: nowrap; */
    -webkit-overflow-scrolling: touch;
    /* z-index: 100; */
     padding: 0 0.9rem;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    /* transform: translate3d(0, 0, 0); */
    /* -webkit-backface-visibility: hidden; */
    -moz-backface-visibility: hidden;
    transform: translate3d(1,0, 0);
    /* top: 50%; */
    /* left: 50%; */
    /* transform: translate(-50%,-50%); */
    flex-direction: row;
    justify-content: center;
    /* padding-left: 7%; */
    background-color: #143c83;
    padding-top: 3em;
    flex-wrap: nowrap;
    align-content: start;
    align-items: stretch;
  }

  .column.col1 .column.col4 {
    width: 23%;
  }


  .col4[data-v-d9ddb592][data-v-d9ddb592][data-v-d9ddb592][data-v-d9ddb592] {
    display: flex;
    flex-direction: column;
    justify-content: right;
    width: 24rem;
    width: 16%;
    align-items: flex-start;
    /* flex-wrap: nowrap; */
    /* position: relative; */
    padding-top: 5.6rem;
  }

  .column.col1 {
    width: 29%;
    padding-top: 2rem
  }

  .column.col2[data-v-d9ddb592] {
    padding-top: 6.5rem;
    width: 16%;
  }

  .column.col3[data-v-d9ddb592][data-v-d9ddb592] {
    padding-top: 6.5rem;
    width: 14%;
    padding-right: 2rem;
  }

  .positionAndriodLogo[data-v-d9ddb592] {
    /* position: absolute; */
    cursor: pointer;
    margin-left: 2.5%;
  }

  .imageLogoApple[data-v-d9ddb592] {
    height: 50px;
    width: 131px;
  }

  .imageLogoAndroid[data-v-d9ddb592] {
    height: 47px;
    width: 131px;
  }





  .positionAndriodLogo[data-v-d9ddb592][data-v-d9ddb592] {
    /* position: absolute; */
    cursor: pointer;
    margin-left: -5.5%;
  }

  .infoCompany[data-v-d9ddb592][data-v-d9ddb592] {
    width: 26em;
    color: hsl(0deg 0% 100%);
    font-family: Inter;
    font-weight: 500;
    /* letter-spacing: 0; */
    line-height: 17px;
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    padding-top: 1.8rem;
    width: 81%;
  }

  .divSocialMedia[data-v-d9ddb592] {
    /* padding: 1rem; */
    width: 16rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding-top: 4.5rem;
  }



}

@media screen and (min-width: 999px) {

  .col4[data-v-d9ddb592][data-v-d9ddb592][data-v-d9ddb592][data-v-d9ddb592][data-v-d9ddb592] {
    display: flex;
    justify-content: flex-start;
    width: 24rem;
    width: 25%;
    align-items: flex-start;
    flex-wrap: nowrap;
    /* position: relative; */
    padding-top: 5.6rem;
    flex-direction: row;
  }

  .theFooter[data-v-d9ddb592] {
    /*background-color: #1abc9c;*/
  }

  .positionAndriodLogo[data-v-d9ddb592][data-v-d9ddb592][data-v-d9ddb592] {
    /* position: absolute; */
    cursor: pointer;
    margin-left: 1.5%;
  }

}

.formatImageLogo[data-v-d9ddb592][data-v-d9ddb592] {
  text-align: left;
  /* padding-top: 4rem; */
  padding-bottom: 0.7rem;
  /* padding-left: 2rem; */
  display: table-row-group;
  align-content: flex-start;
}

.positionIosLogo[data-v-d9ddb592] {
  /* position: absolute; */
  margin-bottom: 0.9rem;
  cursor: pointer;
}


</style>