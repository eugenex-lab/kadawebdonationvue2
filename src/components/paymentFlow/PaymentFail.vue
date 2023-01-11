

<template>
  <div class="formatCompletePage">

    <div class="formatTopView">


      <div class="topSection">
        <div class="subHeading">
          YOUR CONTRIBUTION
        </div>
        <div class="priceDisplay">
             <span class="clientCurrency">
              {{ this.displayCurrency }}
            </span>

        </div>
      </div>

      <div class="topRightSection" @click="shareButton">
        <div class="shareButtonFormat">
          Share
        </div>
        <div class="priceDisplay">
          <img :src="shareIcon"
               class="shareIcon">
        </div>
        <div>

        </div>
      </div>



    </div>

    <div class="successTextFormat">

      <div class="textFormatAlignment red">
        Payment Failed
      </div>

      <div class="subHeading  widthFormat">
We encountered a problem processing your payment
        Confirm your details and lets give another try
      </div>

      <div class="formatSuccessLay">
        <img class="imageSuccessformat" :src="imageSuccessformat">
      </div>

      <div class="formatBtn" @click="restartPayment">
        <img class="successbtn" :src="buttonRetry">
      </div>




    </div>




  </div>


</template>


<script>
import shareIcon from "@/assets/shareWeb.png";
import {mapFields} from "vuex-map-fields";
import appleLinkStore from '@/assets/lotticeWhiteApple.gif';
import andriodLinkStore from "@/assets/lotticeAndriodWHite.gif";


export default {
  name: "PaymentFail",
  data() {
    return {
      shareIcon: shareIcon,
      imageSuccessformat: require("@/assets/errorEndPage.webp"),
      buttonRetry: require("@/assets/rretry.svg"),
      appleLinkStore: appleLinkStore,
      andriodLinkStore: andriodLinkStore,
      kadaurlIOS: "https://apps.apple.com/ng/app/kada-alumni/id1528746717",
      kadaurlAndroid: "https://play.google.com/store/apps/details?id=ng.wealthtech.kada",

    };
  },
  computed: {
    amountEditPage: {

      get() {
        return this.$store.getters.amountDonation
      },

    },

    displayCurrency() {
      const newDonationValue = this.formatNumber(this.amountEditPage)
      return this.$store.getters.currency + ' '+ newDonationValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    idCause() {
      return this.$store.state.idCause;
    },
    //
    // // if currency is equal to Naira return ₦ else return $
    currencySymbol() {
      if (this.currency === "₦") {
        return "₦";
      } else {
        return "$";
      }
    },
    donationVal() {
      if (this.donationValue === null || this.donationValue === undefined || this.donationValue === "") {

        console.log("%c donation value is null", "color: gold; font-size: 20px");


        return 10;
      }
      const val = this.donationValue
      return val;
    },

    ...mapFields(["amountDonation.donationValue", "currency"]),

  },
  methods: {

    formatNumber (num) {
      return parseFloat(num).toFixed(2)
    },
    restartPayment() {


      const causeId = this.$store.state.idCause;


      // set set_first_name to null
      this.$store.commit("SET_FIRST_NAME", null);

      // set set_last_name to null
      this.$store.commit("SET_LAST_NAME", null);

      // set set_email to null
      this.$store.commit("SET_EMAIL", null);

      // set set_phone to null
      this.$store.commit("SET_AMOUNT", null);







      this.$router.push(`/causecontribution/${{causeId}}/`);



    },
    shareButton() {
      console.log("share button clicked");
    },
    donationValueFormat(amount) {
      if (amount === null) {
        // alert("amount is null")

        // return this.$router.push("/paymentinfo" );
        return 10;
      }

      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    methodBeginForm() {
      console.log("%c we are here", "color: green; font-size: 20px");

      // this.validateForm();

      if (!this.formIsValid) {
        // alert('unfilled input');

        this.isNextPage = true;  // changed
        return;
      }
      {

        // alert('filled input');

        // const pageOneData = {
        //   amountDonation: this.amountDonation.value,
        //   currency: this.currency,
        // };

        // alert('filled input ' + this.amountDonation + ' currency ' + this.currency);
        this.isNextPage = true;
        // this.$router.push('/paymentcard');
      }


    },
    // checkDonationUnit() {
    //
    //   const donationValue = this.$store.state.amountDonation.donationValue; //
    //
    //   console.log('donation XXXXXX in 175 Payment sucesss value --> ' + donationValue);
    //
    //   if (this.donationVal === null || this.donationVal === "" || this.donationVal === 0) {
    //
    //     // alert("donation value is null");
    //
    //     console.log("$$$$$$ %c donation value is null" + this.donationVal, "color: gold; font-size: 20px");
    //     console.log("$$$$$$ %c donation value is null" + this.donationValue, "color: gold; font-size: 20px");
    //     // redirect to google page
    //     console.log("name me dey here")
    //     setTimeout(() => {
    //       console.log("name me dey here")
    //       // return window.location = "/home";
    //     }, 0);
    //
    //   }
    //
    //   // alert("donation value is not null");
    //   console.log("$$$$$$ %c donation value is not null" + this.donationVal, "color: gold; font-size: 20px");
    //
    // },
  },

  created() {
    // alert("created success page");
    // alert("%c we outtta " + this.donationValue + " " + this.currency, 'color: purple');
    // this.checkDonationUnit();
  },
  afterMount() {
    console.log("PaymentFlowTwo mounted");
    // this.checkDonationUnit();
  }
  ,
}
</script>

<style scoped>

.subHeading {

  opacity: 0.5;
  color: #010D1C;
  font-family: Inter;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17px;
}


.shareIcon {
  Width: 20px;
  Height: 20px;
  float: right;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}

.priceDisplay {
  color: #010D1C;
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 33px;
}

.topSection {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.5rem;
  margin-left: 3.3rem;


}

.shareIcon {
  width: 1.1rem;
  height: 1.3rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}


.formatTopView {
  display: flex;
  justify-content: space-between;
}


.topRightSection {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding-top: 2.3rem;
  padding-right: 1rem;
}

span.donactedCurrency {
  margin-left: 0.4rem;
  color: #010D1C;
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 33px;
}

span.clientCurrency {
  color: #010D1C;
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 33px;
}

.shareButtonFormat {
  color: #043C83;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 16px;
  padding-top: 0.7rem;
  padding-right: 0.3rem;
}

.textFormatAlignment {
  color: #5BCA0D;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 26px;
  padding-top: 2.5rem;
}

.textFormatAlignment.red {
  color: #FF0000;
  padding-bottom: 1rem;
  padding-top: 2rem;

}


img.imageSuccessformat {
  height: 6rem;
  width: 6rem;
}

.formatSuccessLay {
  margin-top: 0.5rem;
}

.textFormatAlignment[data-v-20fb6730][data-v-20fb6730] {
  color: #5BCA0D;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 26px;
  padding-top: 0.5rem;
}
.textFormatBottom {
  color: #010D1C;
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
  padding-bottom: 0.5rem;
}

.footerTextFOrmat{
  opacity: 0.5;
  color: #010D1C;
  font-family: Inter;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17px;
  padding-top: 0.4rem;

}

.androidIconFormat {
  width: 8rem;
  height: 2.5rem;
}

.iosIconFormat{
  width: 8rem;
  height: 2.5rem;

}
.formatLogo{

  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 0.5rem;
}

successTextFormat {
  display: flex;
  align-content: stretch;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.subHeading.widthFormat[data-v-7ff64289] {
  width: 20rem;
  padding-bottom: 1.5rem;
  text-align: center;
  /* display: flex; */
}


.formatSuccessLay[data-v-7ff64289] {
  margin-top: 0rem;
}

.successTextFormat {
  display: flex;
  align-items: center;
  flex-direction: column;
}


.formatBtn {
  padding-top: 2.5rem;
}





@media screen and (min-width: 1399px) {

  .topRightSection[data-v-20fb6730] {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    padding-top: 2.3rem;
    padding-right: 2rem;
  }
}

  @media screen and (max-width: 1399px) {



    .subHeading.widthFormat[data-v-7ff64289][data-v-7ff64289] {
      width: 19rem;

    }



}








</style>
