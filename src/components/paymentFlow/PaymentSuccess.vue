<template>
  <div class="formatCompletePage">

    <div class="formatTopView">


      <div class="topSection">
        <div class="subHeading">
          YOUR CONTRIBUTION
        </div>
        <div class="priceDisplay">
             <span class="clientCurrency">

              {{ this.displayCurrency  }}
            </span>
<!--          <span class="donactedCurrency">-->
<!--            {{ donationValueFormat(donationVal) }}-->
<!--          </span></div>-->
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

      <div class="textFormatAlignment">
        Successful
      </div>

      <div class="formatSuccessLay">
        <img class="imageSuccessformat" :src="imageSuccessformat">
      </div>

      <div class="textFormatBottom">
        Download App
      </div>
      <div class="formatLogo">
        <div>
          <a :href="kadaurlIOS" class="nav__link iosButton"  target="_blank">
            <!--      <i class="material-icons nav__icon">-->
            <img class="iosIconFormat" :src="appleLinkStore">
            <!--      </i>-->
            <!--      <span class="nav__text">Dashboard</span>-->

          </a>
        </div>
        <div>
          <a :href="kadaurlAndroid" class="nav__link androidButton"  target="_blank">
            <!--      <i class="material-icons nav__icon">-->
            <img class="androidIconFormat" :src="andriodLinkStore">
            <!--      </i>-->
            <!--      <span class="nav__text">Dashboard</span>-->
          </a>
        </div>
      </div>
      <div class="footerTextFOrmat">
        and remain connected
      </div>


    </div>




  </div>


</template>


<script>
import shareIcon from "@/assets/shareWeb.png";
// import {mapFields} from "vuex-map-fields";
import appleLinkStore from '@/assets/lotticeWhiteApple.gif';
import andriodLinkStore from "@/assets/lotticeAndriodWHite.gif";


export default {
  name: "PaymentSuccess",
  data() {
    return {
      shareIcon: shareIcon,
      imageSuccessformat: require("@/assets/done.webp"),
      appleLinkStore: appleLinkStore,
      andriodLinkStore: andriodLinkStore,
      kadaurlIOS: "https://apps.apple.com/ng/app/kada-alumni/id1528746717",
      kadaurlAndroid: "https://play.google.com/store/apps/details?id=ng.wealthtech.kada",

    };
  },
  watch: {



  },
  computed: {
    displayCurrency() {
      const newDonationValue = this.formatNumber(this.amountEditPage)
      return this.$store.getters.currency + ' '+ newDonationValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },


    amountEditPage: {

      get() {
        return this.$store.getters.amountDonation
      },

    },
    // if currency is equal to Naira return ₦ else return $
    currencySymbol() {
      if (this.currency === "₦") {
        return "₦";
      } else {
        return "$";
      }
    },
    // donationVal() {
    //   if (this.donationValue === null || this.donationValue === undefined || this.donationValue === "") {
    //
    //     console.log("%c donation value is null", "color: gold; font-size: 20px");
    //
    //
    //     return 10;
    //   }
    //   const val = this.donationValue
    //   return val;
    // },

    // ...mapFields(["amountDonation.donationValue", "currency"]),

  },
  methods: {

    checkingAmount() {
      if(this.amountEditPage){
        alert("Please enter amount" + this.amountDonation.donationValue)
      }
      else {
      alert("Please " )
        return this.amountDonation.donationValue

      }
    },
    formatNumber (num) {
      return parseFloat(num).toFixed(2)
    },

    shareButton() {
      console.log("share button clicked");
    },
    // donationValueFormat(amount) {
    //   if (amount === null) {
    //     alert("amount is null")
    //
    //     // return this.$router.push("/paymentinfo" );
    //     return 10;
    //   }
    //
    //   return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // },
    methodBeginForm() {
      console.log("%c we are here", "color: green; font-size: 20px");

      // this.validateForm();

      if (!this.formIsValid) {
        alert('unfilled input');

        this.isNextPage = true;  // changed
        return;
      }
      {

        alert('filled input');

        // const pageOneData = {
        //   amountDonation: this.amountDonation.value,
        //   currency: this.currency,
        // };

        alert('filled input ' + this.amountDonation + ' currency ' + this.currency);
        this.isNextPage = true;
        // this.$router.push('/paymentcard');
      }


    },
    checkDonationUnit() {

      // const donationValue = this.$store.state.amountDonation.donationValue; //

      // alert('donation XXXXXX in 175 Payment sucesss value --> ' + donationValue);

      if (this.donationVal === null || this.donationVal === "" || this.donationVal === 0) {

        // alert("donation value is null");

        console.log("$$$$$$ %c donation value is null" + this.donationVal, "color: gold; font-size: 20px");
        console.log("$$$$$$ %c donation value is null" + this.donationValue, "color: gold; font-size: 20px");
        // redirect to google page
        console.log("name me dey here")
        setTimeout(() => {
          console.log("name me dey here")
          // return window.location = "/home";
        }, 0);

      }

      // alert("donation value is not null");
      console.log("$$$$$$ %c donation value is not null" + this.donationVal, "color: gold; font-size: 20px");

    },

    checkCurrency(){
      if(this.currency === "$"){
        return "$";
      }
      else{
        // alert("currency is not $");
      }

    }
  },


  created() {
    // alert("created success page");
    // alert("%c we outtta " + this.donationValue + " " + this.currency, 'color: purple');
    // this.checkDonationUnit();

    this.checkCurrency();

    // alert("created success page" + this.currency);

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
  color: #60C56F;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 26px;
  padding-top: 2.5rem;
}

img.imageSuccessformat {
  height: 13rem;
  width: 13rem;
}

.formatSuccessLay {
  margin-top: 0rem;
}

.textFormatAlignment[data-v-20fb6730][data-v-20fb6730] {
  color: #60C56F;
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
@media screen and (min-width: 1399px) {

  .topRightSection[data-v-20fb6730] {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    padding-top: 2.3rem;
    padding-right: 2rem;
  }
}
</style>
