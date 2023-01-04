<template>
  <div>

  <div class="smallWidthContainer">
    <div class="paymentFormBodyHeader">
<!--      <div class="donationSummary">-->
        <div class="summaryText">
          YOUR CONTRIBUTION
        </div>
        <span class="currencyPayFormat">
          <div class="currencyFormat">
             <span class="clientCurrency">
              {{ currencySymbol }}
            </span>
              <span class="donactedCurrency">
            {{ donationValueFormat(donationVal) }}
          </span>
          </div>

          <div>
            <div class="donationFormat">
                    <div class="successDonation">
              Donation
            </div>
            <div class="successSuccessful">
              Successful
            </div>

              <div class="formatSuccessLay">
                <img class="imageSuccessformat" :src="imageSuccessformat">
              </div>
              <p class="formatFootNOte">
Your contribution to this cause was successful

              </p>

            </div>


          </div>


          </span>




      </div>
    </div>
<!--  </div>-->

  <nav class="nav">

    <a
        class="nav__link donateButton" @click="webShare">
      <img class="submitIconFormat" :src="continueToForm">
    </a>

  </nav>


  </div>
</template>

<script>
import {mapFields} from "vuex-map-fields";
import {mapState} from "vuex";



export default {
  name: "NewPaymentFlowThree",
  data: () => ({

    continueToForm: require("@/assets/Share.svg"),
    imageSuccessformat: require("@/assets/done.gif"),
    isSupported : false,
    url : "https://kada.ng/",
    title:"Kada Donation cause",
    description: "This cause is to donate to the less privileged in the society",


  }),
  watchers: {
    // if this.donationVal is null or undefined, then router will be redirected to the landing page
    donationVall() {
      if (!this.donationVal === "" || this.donationVal === null || this.donationVal === undefined || this.donationVal === 0) {
        this.$router.go(-1)
      }
    },
  },


  computed: {
    ...mapState(['causeDetailInfo']),
    webShareApiSupported() {
      return navigator.share
    },

    // if currency is equal to Naira return ₦ else return $
    currencySymbol() {
      if (this.currency === "₦") {
        return "₦";
      } else {
        return "$";
      }
    },
    donationVal(){
      if(this.donationValue === null || this.donationValue === undefined || this.donationValue === ""){

        console.log("%c donation value is null", "color: gold; font-size: 20px");



        return 0;
      }
      const val = this.donationValue
        return val ;
    },

    ...mapFields(["amountDonation.donationValue", "amountDonation.options", "currency", "securityCode.length", "payCardDigit.value"]),
    // ...mapGetters(["amountDonation"])
  },

  methods: {

    isSupport() {
      if (navigator.share) {
        this.isSupported = true;
        alert("supported")
      }
    },
    webShare() {
      let self = this;
      navigator.share({
        title: self.title,
        text: self.description,
        url: self.url
      })
      alert("share now")
    },




    donationValueFormat(amount) {
      if (amount === null) {
        return this.$router.push("/paymentinfo");
      }

      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    methodBeginForm() {
      console.log("%c we are here", "color: green; font-size: 20px");

      // this.validateForm();

      if (!this.formIsValid) {
        console.log('unfilled input');

        this.isNextPage = false;
        return;
      }
      {

        // const pageOneData = {
        //   amountDonation: this.amountDonation.value,
        //   currency: this.currency,
        // };

        console.log('filled input ' + this.amountDonation + ' currency ' + this.currency);
        this.isNextPage = true;
        // this.$router.push('/paymentcard');
      }


    },
    checkDonationUnit() {
      if (this.donationVal === null || this.donationVal === "" || this.donationVal === 0) {

        console.log("$$$$$$ %c donation value is null" + this.donationVal , "color: gold; font-size: 20px");
console.log("$$$$$$ %c donation value is null" + this.donationValue , "color: gold; font-size: 20px");
        // redirect to google page
console.log("name me dey here")

       // return  this.$router.push("/home");
/// router using window.location = "/home"


// delay 5sec before redirecting
        setTimeout(() => {
          console.log("name me dey here")
          return window.location = "/causecontribution";
        }, 0);






        // return    window.location.href = "http://10.0.71.5:8080/home";   // rember to change this to the actual url of the landing page





      }
      console.log("$$$$$$ %c donation value is not null" + this.donationVal , "color: gold; font-size: 20px");




    },
  },

  created() {
    console.log("PaymentFlowTwo created");
    console.log("%c we outtta " + this.donationValue + " " + this.currency, 'color: purple');
    this.checkDonationUnit();
    this.isSupport();

  },
  afterMount() {
    console.log("PaymentFlowTwo mounted");
    this.checkDonationUnit();
  }
  ,
}

</script>

<style scoped>


.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 71px;
  box-shadow: 0 0 3px rgb(0 0 0 / 20%);
  background-color: #ffffff;
  display: flex;
  /*margin-left: -2.5rem;*/
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


.smallWidthContainer {
  margin: 0px auto;
  /* height: 50px; */
  width: 24.2rem;
  /*border: 1px solid black;*/
  /* padding: 1px; */
  position: relative;
}



.donateButton {
  height: 4.5rem;
  position: relative;
  /*margin-left: 1.5rem;*/
}

.formatFootNOte{
  opacity: 0.5;
  color: #010D1C;
  font-family: Inter;
  font-size: 14px;
  letter-spacing: 0;
  /* margin-left: 1.7rem; */
  width: 22rem;
  line-height: 17px;
  margin-left: 0.6rem;
}

.currencyFormat {
  position: relative;
  /* margin-left: 2.7rem; */
  width: 21rem;
  padding-left: 1.3rem;
  text-align: left;
}


img.submitIconFormat {
  width: 19.33rem;
  height: 3.4rem;
}

.formatSuccessLay {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.imageSuccessformat[data-v-4bf408a2] {
  width: 150px;
  height: 150px;
  margin-top: -17px;
  margin-left: 9px;
}

.donationFormat {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.successDonation {
  color: #60C56F;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
}

.successSuccessful {
  color: #60C56F;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
}


.currencyPayFormat {
  color: #010D1C;
  font-family: Inter;
  font-size: 25px;
  font-weight: 556;
  letter-spacing: 0;
  line-height: 33px;
}

.paymentFormBody {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto 0 2.3rem;

}


.paymentFormBodyHeader {
  color: #000000;
  font-family: "SF Pro Text";
  font-size: 14px;
  letter-spacing: 0;
  /* line-height: 32px; */
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  margin-left: 0.3rem;
}

.summaryText {
  margin-left: 0px;
  padding-top: 1.5rem;
  position: relative;
  top: 2px;
  color: #9E9E9E;
  font-family: "SF Pro Text";
  font-size: 14px;
}


.paymentFormBody {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
  margin-left: 2.3rem;

}

.validationAlert {
  color: red;
  font-size: 12px;
  margin-top: 5.1px;
  margin-left: 0.2rem;
  font-weight: 600;
}

.paymentFormBodyHeader {
  color: #000000;
  font-family: "SF Pro Text";
  font-size: 14px;
  letter-spacing: 0;
  /* line-height: 32px; */
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  margin-left: 0.3rem;
}

select {

  /* styling */
  background-color: white;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 17.4em 0.5em 1em;
  margin: 0;
  box-sizing: border-box;
  -webkit-appearance: none;
  width: 20.9rem;

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
}


select.minimal {
  /*background-image:*/
  /*    linear-gradient(45deg, transparent 50%, gray 50%),*/
  /*    linear-gradient(135deg, gray 50%, transparent 50%),*/
  /*    linear-gradient(to right, #ccc, #ccc);*/
  /*background-position:*/
  /*    calc(100% - 20px) calc(1em + 2px),*/
  /*    calc(100% - 15px) calc(1em + 2px),*/
  /*    calc(100% - 2.5em) 0.5em;*/
  /*background-size:*/
  /*    5px 5px,*/
  /*    5px 5px,*/
  /*    1px 1.5em;*/
  /*background-repeat: no-repeat;*/
}

select.minimal:focus {
  background-image: linear-gradient(45deg, #E6E6E6 50%, transparent 50%),
  linear-gradient(135deg, transparent 50%, #E6E6E6 50%),
  linear-gradient(to right, #E6E6E6, #E6E6E6);
  background-position: calc(100% - 15px) 1em,
  calc(100% - 20px) 1em,
  calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px,
  5px 5px,
  1px 1.5em;
  background-repeat: no-repeat;
  border-color: #E6E6E6;
  outline: 0;
  border: 1px solid #0070FF;
}


select:-moz-focusring {
  color: #E6E6E6;
  text-shadow: 0 0 0 #000;
}



.paymentFormBodyCardAmountText {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}

input.paymentFormBodyCardAmountInputField {
  width: 20.9rem;
  height: 2.5rem;
  border-color: #fcfcfc;
  background-color: white;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 1em;
  margin: 0;
  box-sizing: border-box;
  -webkit-appearance: none;
  margin: 0;
  box-sizing: border-box;
  -webkit-appearance: none;
}

input.paymentFormBodyCardAmountInputField [type=text]:focus {
  border: 3px solid #555;
}


input.paymentFormBodyCardAmountInputField:focus {

  background-position: calc(100% - 15px) 1em,
  calc(100% - 20px) 1em,
  calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px,
  5px 5px,
  1px 1.5em;
  background-repeat: no-repeat;
  border-color: #E6E6E6;
  outline: 0;

  border: 1px solid #0070FF;
}


.toggle {
  /*cursor: pointer;*/
  margin-left: -0.3rem;
  display: inline-block;
}

.toggle-switch {
  display: inline-block;
  background: #E8EAED;
  border-radius: 16px;
  width: 31px;
  height: 18px;
  position: relative;
  vertical-align: middle;
  margin-left: 0.3rem;
  transition: background 0.25s;
}

.toggle-switch:before, .toggle-switch:after {
  content: "";
}

.toggle-switch:before {
  display: block;
  background: linear-gradient(to bottom, #fff 0%, #eee 100%);
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 25%);
  width: 15px;
  height: 15px;
  position: absolute;
  top: 1px;
  left: 2px;
  transition: left 0.25s;
}

.toggle:hover .toggle-switch:before {
  background: linear-gradient(to bottom, #fff 0%, #fff 100%);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
}

.toggle-checkbox:checked + .toggle-switch {
  background: #0070FF;
}

.toggle-checkbox:checked + .toggle-switch:before {
  left: 14px;
}

.toggle-checkbox {
  position: absolute;
  visibility: hidden;
}

.toggle-label {
  margin-left: 5px;
  position: relative;
  top: 2px;
  color: #9E9E9E;

  font-family: "SF Pro Text";
  font-size: 14px;
}


.asterix:after {
  content: "*";
  color: red;
  font-size: 1rem;
  margin-left: 0.25rem;
}




.iosButton {
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



.nav__link:hover {
  /*background-color: #d02727;*/
}

.nav__link--active {
  color: #009578;
}

.nav__icon {
  font-size: 18px;
}

.iosIconFormat {
  width: 30rem;
  height: 3rem;
}




.invalid input,
.invalid textarea {
  border: 1px solid red;
}


span.span {
  display: flex;
  /*padding-top: 1rem;*/
}

input#amountDonation {
  width: 10rem;
}


.epxiryDateFormat {
  width: 10rem;
}

input#expiryDate {
  /* width: 9rem; */
  /* width: 159px; */
  /* height: 45px; */
  width: 168px;
}

.expiryDatePLace {
  margin-left: 0rem;
}

.paymentFormBodyCardAmount.cvvborderPositon {
  margin-left: 1rem;
}

.paymentFormBodyCardAmount.cvvborderPositon[data-v-5d6e0923] {
  margin-left: 1rem;
  height: 100%;
}

input#securityCode[data-v-5d6e0923] {
  width: 159px;
  height: 2.5rem;
  margin-left: 0rem;
  border-radius: 0.2rem;
  /* width: 20.9rem; */
  height: 2.5rem;
  border-color: #fcfcfc;
  background-color: white;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  /* padding: 1em; */
  margin: 0;
  box-sizing: border-box;
  -webkit-appearance: none;
  margin: 0;
  box-sizing: border-box;
  -webkit-appearance: none;
}

input::placeholder {
  position: relative;
  padding-left: 0.6rem;

}


element.style {
}

.paymentFormBodyHeader.saveCard {
  padding-top: 0.9rem;
}

.toggle-label[data-v-5d6e0923] {
  margin-left: -1px;
  position: relative;
  top: 2px;
  color: #9E9E9E;
  font-family: "SF Pro Text";
  font-size: 14px;
}

input#amountDonation[data-v-4506583d] {
  width: 20.9rem;
  /* position: relative; */
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input#securityCode[data-v-5d6e0923][data-v-5d6e0923]:focus {
  background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  /*border-color: #E6E6E6;*/
  outline: 0;
  border: 1px solid #0070FF;
  border: 1px solid #0070FF;
}

.paymentFormBodyCardAmount.cvv {
  padding-left: 0.5rem;
}

input[type=date] {
  /*color: transparent;*/
  /*color: transparent;*/
}


input[type=date]:focus::-webkit-datetime-edit {
  color: black !important;
}

input[type="date"]:before {
  content: attr(placeholder) !important;
  color: #aaa;
  margin-right: 0.5em;
}

input[type="date"]:focus:before,
input[type="date"]:valid:before {
  content: "";
}


input[type=date]::-webkit-datetime-edit-text {
  -webkit-appearance: none;
  /*display: none;*/
}

input[type=date]::-webkit-datetime-edit-month-field {
  -webkit-appearance: none;
  /*display: none;*/
}

input[type=date]::-webkit-datetime-edit-day-field {
  -webkit-appearance: none;
  /*display: none;*/
}

input[type=date]::-webkit-datetime-edit-year-field {
  -webkit-appearance: none;
  /*display: none;*/
}


span.donactedCurrency {
  padding-left: 0.3rem;
  font-family: Inter;
}


input[type="date"] {
  display: block;
  position: relative;
  padding: 1rem 3.5rem 1rem 0.75rem;

  font-size: 14px;
  font-family: monospace;

  /*border:1px solid #8292a2;*/
  border-radius: 0.25rem;
  background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' margin-top='1rem' viewBox='0 0 20 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23688EBB' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' transform='translate(1 1)'%3E%3Crect width='18' height='18' y='2' rx='2'/%3E%3Cpath d='M13 0L13 4M5 0L5 4M0 8L18 8'/%3E%3C/g%3E%3C/svg%3E") right 1rem center no-repeat;

  cursor: pointer;
}

input[type="date"]:focus {
  outline: none;
  border-color: #3acfff;
  box-shadow: 0 0 0 0.25rem rgba(0, 120, 250, 0.1);
}

::-webkit-datetime-edit {
}

::-webkit-datetime-edit-fields-wrapper {
}

::-webkit-datetime-edit-month-field:hover,
::-webkit-datetime-edit-day-field:hover,
::-webkit-datetime-edit-year-field:hover {
  background: rgba(0, 120, 250, 0.1);
}

::-webkit-datetime-edit-text {
  opacity: 0;
}

::-webkit-clear-button,
::-webkit-inner-spin-button {
  display: none;
}

::-webkit-calendar-picker-indicator {
  position: absolute;
  width: 2.5rem;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;

  opacity: 0;
  cursor: pointer;

  color: rgba(0, 120, 250, 1);
  background: rgba(0, 120, 250, 1);

}

input[type="date"]:hover::-webkit-calendar-picker-indicator {
  opacity: 0.05;
}

input[type="date"]:hover::-webkit-calendar-picker-indicator:hover {
  opacity: 0.15;
}


input#expiryDate[data-v-5d6e0923] {
  /* width: 9rem; */
  /* width: 159px; */
  color: #8292a2;
  /* height: 45px; */
  width: 168px;
}




.amountDonation .cardNumberFormat {
  width: 20.9rem;
}

.cardNUmberLayout {
  padding-top: 2rem;
}

.donationFormat {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;
  margin-right: 9rem;
}

.summaryText[data-v-4bf408a2] {
  margin-left: 0px;
  padding-top: 1.5rem;
  position: relative;
  top: 2px;
  color: hsl(0deg 0% 62%);
  font-family: "SF Pro Text";
  font-size: 14px;
  position: relative;
  /* margin-left: 2.7rem; */
  width: 21rem;
  padding-left: 1.3rem;
  text-align: left;
}
.formatFootNOte[data-v-4bf408a2] {
  opacity: 0.5;
  color: hsl(213deg 93% 6%);
  font-family: Inter;
  font-size: 14px;
  letter-spacing: 0;
  /* margin-left: 1.7rem; */
  width: 22rem;
  /* line-height: 17px; */
  /* margin-left: 0.6rem; */
  position: relative;
  /* margin-left: -0.3rem; */
  width: 21rem;
  padding-left: 1.4rem;
  text-align: ceter;
}

.donationFormat[data-v-4bf408a2] {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;
  /* margin-right: 9rem; */
  position: relative;
  /* margin-left: -1.55rem; */
  width: 100%;
  /* padding-left: 1.3rem; */
  /* text-align: left; */
}




  @media  screen and (max-width: 350px) {
    .smallWidthContainer {
      width: 18rem;
      /*background-color: #0070FF;*/
    }

    .paymentFormBodyHeader.donationFormat {
      padding-left: 0em;
    }

    img.submitIconFormat[data-v-4bf408a2] {
      width: 15.5rem;
      height: 3.4rem;
    }

    .formatFootNOte[data-v-4bf408a2][data-v-4bf408a2][data-v-4bf408a2] {
      opacity: 0.5;
      color: hsl(213deg 93% 6%);
      font-family: Inter;
      font-size: 14px;
      letter-spacing: 0;
      /* margin-left: 1.7rem; */
      /* width: 22rem; */
      /* line-height: 17px; */
      /* margin-left: -0.4rem; */
      position: relative;
      margin-left: -0.6rem;
      width: 16rem;
      /* padding-left: 1.4rem; */
      text-align: center;
    }

    .summaryText[data-v-4bf408a2][data-v-4bf408a2][data-v-4bf408a2] {
      margin-left: 0px;
      padding-top: 1.5rem;
      position: relative;
      top: 2px;
      color: hsl(0deg 0% 62%);
      font-family: "SF Pro Text";
      font-size: 14px;
      position: relative;
      margin-left: -1.55rem;
      width: 21rem;
      /* padding-left: 1.3rem; */
      text-align: left;
    }


    span.paymentFormBodyCardAmount[data-v-4506583d][data-v-4506583d] {
      position: relative;
      margin-left: 1.4rem;
      width: 100%;
      padding-left: 0rem;
    }

    .currencyFormat[data-v-4bf408a2] {
      position: relative;
      /* margin-left: 2.7rem; */
      width: 21rem;
      padding-left: 0rem;
      text-align: left;
    }


  }


</style>