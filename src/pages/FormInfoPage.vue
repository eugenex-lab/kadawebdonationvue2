<template>
  <div class="smallWidthContainer">

    <div class="CauseMainDescription">
      {{ causeDetailInfo.description }}
    </div>
    <div class="formatNameOfDOnors">
      Donors ({{causeDetailInfo.donorCount }})
    </div>
    <div>
      <img class="formatDonorImage" :src="donorsImage">
    </div>


</div>
</template>

<script>
// import donorsImage from '@/assets/donorCircleImages.png';
// import {mapFields} from "vuex-map-fields";
import donorsImage from "@/assets/donorCircleImages.png";
// import {mapState} from "vuex";
// import {mapState} from "vuex";
export default {
  name: "FormInfoPage",

  data() {
    return {
      causeDescription: "Enim dolorem quae corporis. Ut natus aut atque quia quia minima. Qui et rem dolor quo a. Consequuntur sunt quis id. \n" +
          "Qui incidunt debitis sint digniss test ForIosimos quasi esse ut dolores.",
      numberOfDonors: 40,
      donorsImage: donorsImage,
      donationValue: 76,

    };
  },
  computed: {
    causeDetailInfo() {
      const indoData = this.$store.state.causeXData
      // check if dataresponse is not 200 return null
      if (indoData.responseCode !== 200) {
        return  "No data"
      }
      return indoData.responseContent
    },
    // ...mapFields(["amountDonation.donationValue" ]),
    // ...mapState(['causeDetailInfo']),
  },
  // methods: {
  //
  //
  // },




    // computed: {
    //
    //   totalPercentage: function () {
    //     return ((this.amountRaised / this.totalamountToRaise) * 100).toFixed(0)
    //   },
    //
    //   checkIfIos: function () {
    //     console.log(this.isIOS() + "we are here ");
    //     return this.testForIos();
    //   },
    // }
  }
</script>




<style scoped>


.smallWidthContainer {

  margin: 0px auto;
  /* height: 50px; */
  width: 24.2rem;
  /*border: 1px solid black;*/
  /* padding: 1px; */
  position: relative;


}



/* everything above is for layout only */





.formatStatsView {
  margin-top: 0.5rem;
}


.container[data-v-32679b52] {
  width: 400px;
  max-width: 600px;
  margin: 0 auto 0 -1.4rem;
}

.container .schoolDetails[data-v-32679b52] {
  display: flex;
  padding-top: 1rem;
  height: 5rem;
  margin-left: 2.5rem;
}

.schoolDetails .left {
  width: 20%;
}

.schoolDetails .right {
  width: 80%;
  margin-left: -0.9rem;
}

.schoolDetails .left .schoolLogo {
  width: 70%;
  height: 90%;
}

.right .schoolNameFormat {
  font-weight: 600;
  color: #0E223D;
  font-family: "SF Pro Text";
  font-size: 16px;
  width: 14rem;
  /* font-weight: 500; */
  letter-spacing: -0.33px;
  line-height: 17px;
  margin-top: 0.3rem;
}

.right .schoolLocationFormat {
  color: #9E9E9E;
  font-family: Inter;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 14px;
  padding-top: 0.1rem;
}

.causeDetails {
  padding-top: 0.6rem;
  margin-left: 2.7rem;
}

.causeContentTitleFormat {

  /*font-weight: 500;*/
  width: 20.5rem;
  color: #041427;
  font-family: "SF Pro Text";
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  line-height: 17px;
}

span.contributedAmountTextDescPercentAfter {
  color: #8F959B;
  font-family: Inter;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 15px;
  padding-left: 0.3rem;
}

span.TileHolderText {
  opacity: 0.4;
  color: #041427;
  font-family: "SF Pro Text";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 11px;
}

span.causeContentCreatorFormat {
  width: 107px;
  color: #003B88;
  font-family: "SF Pro Text";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 12px;
  margin-left: 0.1rem;
}

section.contributionGauge {
  color: #041427;
  font-family: "SF Pro Text";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 15px;
  padding-top: 1rem;
  width: 20.44rem;
  margin-left: 2.6rem;

}



span.contributedAmount {
  color: #000000;
  font-family: Inter;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 15px;
  font-weight: 600;
  margin-left: 0.1rem;
}

span.contributedAmountTextDesc {
  color: #8F959B;
  font-family: Inter;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 15px;
  padding-left: 0.1rem;

}

span.totalAmountContributed{

  width: 101px;
  opacity: 0.87;
  color: #010D1C;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 19px;
  text-align: right;
  float: right;
}





span.dateCloseContribution{
  width: 68px;
  text-align: right;
  /* float: right; */
  color: #010D1C;
  font-family: "SF Pro Text";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  padding-right: 0.3rem;
  line-height: 17px;
  margin-left: 0.3rem;


}

span.dateCloseText{
  width: 101px;
  text-align: right;
  /*float: right;*/

  color: #8F959B;
  font-family: "SF Pro Text";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 17px;
  /*margin-left: 0.3rem;*/

}


div.formatTopGUage {
  width: 14rem;
}

span.formatDayText {
  width: 68px;

  text-align: right;
  /* float: right; */
  color: #010D1C;
  font-family: "SF Pro Text";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  padding-right: 0.3rem;
  line-height: 17px;
  margin-left: 0.3rem;
}


.np-progress-container {
  width: 336px;
  height: 10px;
  border-radius: 6px;
  background-color: #E8EAED;
  position: relative;
  margin-top: 0.5rem;
}


.np-progress-loader {
  border-radius: 6px;
  background-color: #60C56F;
  /*background: linear-gradient(0deg, #251db0 0%, #227cb8 50%, #00d4ff 100%);*/
  height: 10px;
  width: 0%;
  max-width: 100%;
  min-width: 0%;
  overflow: hidden;
}

.centerIMage {
  margin-left: 2.7rem;
}

.formatCausePicture {
  width: 20.8rem;
  height: 8rem;
  border-radius: 0.3rem;
  margin-top: 0.3rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(128, 140, 140, 0.96);

}

.pullToRight{
  /*margin-top: 0.5rem;*/
  text-align: right;
  float: right;
}



.CauseMainDescription[data-v-dc166936] {
  color: hsl(213deg 81% 8%);
  font-family: "SF Pro Text";
  font-size: 11px;
  letter-spacing: 0;
  padding-top: 1.4rem;
  /* line-height: 15px; */
  width: 20.5rem;
  /* max-width: 35rem; */
  /* margin-left: 2.6rem; */
  text-align: left;
  padding-left: 1.6rem;
}

.formatNameOfDOnors {
  color: hsl(213deg 93% 6%);
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 13px;
  padding-top: 1rem;
  /* margin-left: 2.6rem; */
  width: 21.21rem;
  /* max-width: 31rem; */
  /* margin-left: 2.6rem; */
  text-align: left;
  width: 20.5rem;
  /* max-width: 35rem; */
  /* margin-left: 2.6rem; */
  text-align: left;
  padding-left: 1.6rem;
}

.formatDonorImage{
  width: 88%;
  height: 88%;
  padding-top: 0.6rem;
  padding-bottom: 3.5rem;
}

.descContainer{
width: 26.21rem;
max-width: 31rem;
max-width: 31rem;

}



@media  screen and (max-width: 350px) {

  .smallWidthContainer{
    width: 18rem;
    /*background-color: #0070FF;*/
  }

  .CauseMainDescription[data-v-dc166936][data-v-dc166936] {

    width: 100%;
    position: relative;
    margin-left: -1.5rem;

  }

  .formatNameOfDOnors[data-v-dc166936] {
    width: 100%;
    position: relative;
    margin-left: -1.5rem;
  }


  .formatDonorImage[data-v-dc166936] {
    height: 1%;
    padding-top: 0.6rem;
    margin-left: -0.9rem;
    width: 100%;
    position: relative;
    margin-left: 0.05rem;
  }


}


@media  screen and (max-width: 900px) {
  .smallWidthContainer{     /*   <----  web    */
    /*display: none;*/
  }

}


</style>