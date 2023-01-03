<template>
<div>

  <the-header></the-header>

    <div class="errorPage">
      <div class="errorIMageFormat">
        <img class="errorPageImage"
             :src='require(`@/assets/errorIMage.svg`)'
             alt="errorImage">

      </div>
      <div class="classMain">
        Cause donation Not Found
      </div>
      <div class="subText">
        <span class="oneLine">This cause may have ended.</span>

        <span class="oneLine"> Contact hello@kada.ng for more information</span>
      </div>
    </div>

  <the-footer></the-footer>

</div>

</template>

<script>
import TheFooter from "@/components/layout/TheFooter";
import TheHeader from "@/components/layout/TheHeader";

import image from "../assets/errorIMage.svg";
export default {
  name: "ErrorPagePayment",
  components: {
    TheFooter,
    TheHeader
  },



  errorPageIMage: image
}
</script>

<style scoped>

.errorPage{
  background-color: white;
  height: 48rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: #000;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;

}

.errorPageImage{
  width: 300px;
  height: 300px;
  z-index: 9999;
}

img.errorPageImage{
  width: 300px;
  height: 300px;
}

.errorIMageFormat{
  width: 300px;
  height: 301px;
  margin-top: -3rem;
}
.classMain {
  height: 50px;
  width: 368px;
  color: #010D1C;
  font-size: 48px;
  letter-spacing: 0;
  line-height: 50px;
}
.subText {
  height: 44px;
  width: 335px;
  opacity: 0.5;
  color: #010D1C;
  /* font-family: Inter; */
  font-size: 16px;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
  padding-top: 4rem;
  position: relative;
}

.oneLine{
  display: block;
  white-space: nowrap;
  /*overflow: hidden;*/
  text-overflow: ellipsis;
  width: 335px;
}

@media screen and (max-width: 900px) {

  .errorIMageFormat[data-v-18f6bf43] {
    width: 300px;
    height: 301px;
    margin-top: 3rem;
  }

}





</style>