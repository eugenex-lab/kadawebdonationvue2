<template>
    <div class="smallWidthContainer" >


      <section class="schoolDetails" >
              <span class="formatLogoSchoolNameSection">
        <img class="schoolLogo" :src="avatarDetailInfo" alt="logo">

      </span>
        <span class="alignRight">
        <div class="schoolNameFormat">{{ causeDetailInfo.schoolName }}</div>
        <div class="schoolLocationFormat">{{ causeDetailInfo.schoolCountry}}, {{ causeDetailInfo.schoolState }}</div>
      </span>
        <!--      </span>-->
      </section>
      <section>

        <div class="centerIMage">
          <slot name="schoolInfoCauseIMage">
<!--                      <img  class="formatCausePicture" :src="causeImage"-->
<!--                      alt="cause image">-->


          </slot>
        </div>

      </section>

      <section class="causeDetails">
        <div class="causeContentTitleFormat">
          {{ causeDetailInfo.name }}
        </div>
        <div class="formatCreatedBy">
          <span class="TileHolderText">Created by</span>
          <span class="causeContentCreatorFormat">{{  causeDetailInfo.createdByUserName }} </span>
        </div>
      </section>

      <section class="contributionGauge">
        <span class="formatTopGUage">
          <span class="amountRaisedFormat">
               <span class="contributedAmount">{{ causeDetailInfo.amountRaised }}</span>
          <span class="contributedAmountTextDesc">Raised</span>
          </span>
                        <span class="totalAmountContributed">/ {{ causeDetailInfo.targetAmount }}</span>


        </span>

        <div class="np-progress-container">
          <div
              class="np-progress-loader"
              v-bind:style="'width:' + causeDetailInfo.percentageRaised "
          >
          </div>
        </div>

        <div class="formatStatsView">
         <span class="formatDownGUage">
          <span class="contributedAmount percentage">{{ causeDetailInfo.percentageRaised }}</span>
          <span class="contributedAmountTextDescPercentAfter">Raised</span>

        </span>

          <span class="pullToRight">
                  <span class="formatDayText" > {{  causeDetailInfo.numberOfDaysLeft  }}</span>

    <span class="dateCloseText">Days left. Closes</span>
                     <span class="dateCloseContribution">{{ causeDetailInfo.deadLine  }}</span>
           </span>
        </div>
      </section>

    </div>


</template>

<script>
import schoolLogo from "@/assets/schoolLogo.svg";
import causeImage from "@/assets/projectIMage.png";
// import { mapState} from 'vuex';
// import {useRoute} from "vue-router";
import {useRoute} from 'vue2-helpers/vue-router';

export default {
  name: "SchoolInfoSection",
  data() {
    return {
      message: "Hello Vue!",
      schoolLogos: schoolLogo,
      schoolName: "Massachus etts Institute of Technology",
      universityLocation: "Cambridge, MA",
      donationCause: "Construction of Senate Building",
      donationAdminName: "Odion Okafor",
      amountRaised: "4250000",
      currency: "₦",
      totalamountToRaise: "5000000",
      loadedPercentage: "60",
      daysLeft: '23 Aug 2024',
      numDaysLeft: 21,
      causeImage: causeImage,
      totalPer: 23,


    };
  },
  methods: {
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    ,
  },

  computed: {
    causeDetailInfo() {
      const indoData = this.$store.state.causeXData
      if (indoData.responseCode !== 200) {
        return  "No data"
      }
return indoData.responseContent
    },
    avatarDetailInfo() {
      const indoData = this.$store.state.causeXData
      // check if dataresponse is not 200 return null
      if (indoData.responseContent.schoolAvatar === null || indoData.responseContent.schoolAvatar === undefined
          || indoData.responseContent.schoolAvatar === "") {
        return this.schoolLogos
      }
      return indoData.responseContent.schoolAvatar
    }
    }
    ,

    totalPercentage: function () {
      return ((this.amountRaised / this.totalamountToRaise) * 100).toFixed(0)
    },

    checkIfIos: function () {
      console.log(this.isIOS() + "we are here ");
      return this.testForIos();
    },





  mounted() {

    const route = useRoute()
    //  generate id from url  and set it to id
    const id = route.params.id


// alert("mounted again" + id)

    // push to vuex store to get data
    this.$store.dispatch('getSingleCause', id)

    console.log("c% &&$$$$ ZZZZZZZZZZ id is " + id, "color: pink; font-size: 200px;");
    this.$store.dispatch("getCauseXdata", id);

    this.$store.commit("SET_CAUSE_ID", id);

    this.$store.dispatch("getCurrencyXdata", id);

    this.$store.commit("SET_FIRST_NAME_VALID", true);
    this.$store.commit("SET_EMAIL_VALID", true);
    this.$store.commit("SET_LAST_NAME_VALID", true);
    this.$store.commit("SET_AMOUNT_DONATION_VALID", true);
    this.$store.commit("SET_MIN_AMOUNT_ALERT", "#003b88")

  }


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

span.alignLeft {
  display: inline-block;
  width: 20%;
  margin-left: -1rem;
}

img.schoolLogo {
  width: 3.5rem;
  height: 3.5rem;
  /*border-radius: 50%;*/

}

span.alignRight {
  /* float: right; */
  /* display: inline-block; */
  width: 80%;
  /* padding-top: 0rem; */
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
}






span.left {
  display: inline-block;
  width: 212px;
  border: 2px solid;
}



.formatStatsView {
  margin-top: 0.5rem;
}


.container[data-v-32679b52][data-v-32679b52] {
  width: 400px;
  max-width: 600px;
  margin: 0 auto;
  margin-left: 0.3rem;
}

.container .schoolDetails{
  display: flex;
  padding-top: 1rem;
  height: 5rem;
  /*margin-left: 2.5rem;*/
}

.schoolDetails .left {
  width: 20%;
}

.schoolDetails .right {
  width: 80%;
  margin-left: -0.5rem;
}

.schoolDetails .left .schoolLogo {
  width: 70%;
  height: 90%;
}

 .schoolNameFormat {
   font-weight: 600;
   color: hsl(214deg 63% 15%);
   font-family: "SF Pro Text";
   font-size: 16px;
   width: 14rem;
   /* font-weight: 500; */
   /* letter-spacing: -0.33px; */
   line-height: 17px;
   /* justify-content: flex-start; */
   /* display: flex; */
   /* align-items: self-start; */
   /* flex-direction: column; */
   text-align: left;
   /* padding-left: 0.5rem; */

}

.schoolLocationFormat {
  color: hsl(0deg 0% 62%);
  font-family: Inter;
  font-size: 12px;
  position: relative;
  left: -4.9rem;
  top: -0.9rem;
  line-height: 14px;
  padding-top: 0.1rem;
  position: relative;
  left: 0rem;
  top: -0.1rem;
  text-align: left;
}

.causeDetails {
 padding-top: 0.6rem;
 /* margin-left: 2.7rem; */
  position: relative;
  /* margin-left: 2.7rem; */
  width: 21rem;
  padding-left: 1.6rem;
}

.causeContentTitleFormat {

 /*font-weight: 500;*/
  width: 20rem;
  color: #041427;
  font-family: "SF Pro Text";
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  line-height: 17px;
  text-align: left;
}

.amountRaisedFormat {
  /* padding-left: 0rem; */
  width: 100%;
  /* margin-left: -7.2rem; */
  display: flex;
}


span.formatDownGUage {
  width: 100%;
  /* text-align: left; */
  display: flex;
  /* margin-left: -5.1rem; */
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
color: hsl(213deg 81% 8%);
font-family: "SF Pro Text";
font-size: 12px;
letter-spacing: 0;
line-height: 15px;
padding-top: 1rem;
/* width: 20.44rem; */
  /* margin-left: 2.6rem; */
  width: 21rem;
  /* padding-left: 1.6rem; */
  position: relative;
  /* margin-left: 2.7rem; */
  width: 21rem;
  padding-left: 1.6rem;

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

  display: block;
  font-variant: no-discretionary-ligatures;
  display: block;
  font-variant: discretionary-ligatures;
  display: block;
  font-variant: discretionary-ligatures;
  line-height: 0rem;
  /* width: 100%; */
  /* height: 3rem; */
  opacity: 0.87;
  height: -2rem;
  color: #010D1C;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  /* line-height: 19px; */
  /* text-align: right; */
  display: flex;
  float: right;
  top: -0.5rem;
  position: relative;
  padding-bottom: 0.7rem;
}





span.dateCloseContribution{
  width: 100%;
  text-align: right;
  color: #010D1C;
  font-family: "SF Pro Text";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 17px;
  display: block;

}

span.dateCloseText{
  width: 100%;
  text-align: right;
  /* float: right; */
  color: #8F959B;
  font-family: "SF Pro Text";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 17px;
  margin-right: -2rem;

}


div.formatTopGUage {
  width: 14rem;
}

span.formatDayText {
  width: inherit;
  text-align: right;
  /* float: right; */
  color: #010D1C;
  font-family: "SF Pro Text";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 17px;
  position: relative;
  left: 10% !important;
}

span.formatTopGUage {
padding-bottom: 11rem;
position: unset;
}

.np-progress-container {
width: 100%;
height: 10px;
border-radius: 6px;
background-color: #E8EAED;
/* position: absolute; */
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
  /*overflow: hidden;*/
}

.centerIMage[data-v-5cc1e262] {
  /* margin-left: 2.7rem; */
  padding-top: 0.5rem;
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
  display: flex;
  margin-top: -1.05rem;
  /* padding-left: 1rem; */
  width: 99%;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  flex-wrap: nowrap;
}

.CauseMainDescription {
  color: #041427;
  font-family: "SF Pro Text";
  font-size: 11px;
  letter-spacing: 0;
  padding-top: 1.4rem;
  line-height: 15px;
  width: 21.21rem;
  /* max-width: 31rem; */
  margin-left: 2.6rem;
}

.formatNameOfDOnors {
  color: #010D1C;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 13px;
  padding-top: 1rem;
  margin-left: 2.6rem;
  width: 21.21rem;
  /* max-width: 31rem; */
  margin-left: 2.6rem;
}
.formatDonorImage{
  width: 90%;
  height: 3rem;
  padding-top: 0.6rem;
  /* margin-left: 2.5rem; */
  padding-left: 1rem;
}

section.schoolDetails {
  width: 21rem;
  height: 3rem;
  padding-top: 2rem;
  padding-left: 1.9rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

span.formatLogoSchoolNameSection {
  /*width: 300px;*/
  /*margin: auto;*/
  display: flex;
  border-radius: 50%;

}

.formatCreatedBy{
  color: hsl(213deg 81% 8%);
  font-family: "SF Pro Text";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 15px;
  padding-top: 0.2rem;
  /* margin-left: 2.6rem; */
  /* width: 21.21rem; */
  /* max-width: 31rem; */
  text-align: left;
}


@media  screen and (max-width: 350px) {

  .smallWidthContainer[data-v-5cc1e262] {
    width: 18rem;
    /*background-color: #0070FF;*/
  }

  section.schoolDetails{
    margin-left: -1.7rem;
  }

  .causeDetails[data-v-5cc1e262] {
    padding-top: 0.6rem;
    position: relative;
    margin-left: -1.6rem;
    padding-left: -0.4rem;
  }

  section.contributionGauge {

    width: 16.3rem;
  }

  span.contributedAmount[data-v-5cc1e262] {
    color: hsl(0deg 0% 0%);
    font-family: Inter;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 15px;
    font-weight: 600;
    margin-left: 0.1rem;
  }

  span.formatDownGUage[data-v-5cc1e262] {
    width: 100%;
    /* text-align: left; */
    margin-left: -5.6em;
  }

  .np-progress-container[data-v-5cc1e262] {
    width: 253px;
    margin-left: -1.6rem;
  }

  .causeContentTitleFormat[data-v-5cc1e262] {
    /* font-weight: 500; */
    width: 18rem;

  }

}

@media  screen and  (min-width: 899px) {

  .smallWidthContainer{
    /*display: none;*/
  }

}

@media  screen and  (max-width: 899px) {

  /*.smallWidthContainer {*/


  /*  padding-top: 4rem;*/


  /*}*/
}



</style>
