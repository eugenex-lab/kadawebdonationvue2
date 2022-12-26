<template>
  <form @submit.prevent="methodBeginForm">
    <div class="paymentFormBody">
      <div class="paymentFormBodyHeader">
        <div class="donationSummary">
          <div class="summaryText">
            SUMMARY HI

          </div>
          <span class="currencyPayFormat">
             <span class="clientCurrency">
              {{ currencySymbol }}
            </span>
              <span class="donactedCurrency">
            {{ donationValueFormat(donationValue) }}
          </span>
          </span>

          <div class="cardNUmberLayout">
            <div class="paymentFormBodyCardAmount">
              <div class="paymentFormBodyHeader asterix">Card Number</div>
              <div class="paymentFormBodyCardAmountInput "  :class="{invalid: !payCardDigitValid}">


                <input
                    name="payCardDigit"
                    class="form-control paymentFormBodyCardAmountInputField "
                    v-model="payCardDigit"

                />





                <p v-if="!payCardDigitValid"  class="validationAlert">Please enter card number</p>

              </div>
            </div>
          </div>


          <span class="span">

                    <div class="paymentFormBodyCardAmount">
        <div class="paymentFormBodyHeader asterix">Expiry Date</div>
        <div class="paymentFormBodyCardAmountInput expiryDatePLace" :class="{invalid: !expiryDateValid}">


    <input
           id="expiryDate"
           name="expiryDate"
           :placeholder="expiryDate.placeholder"
           class="paymentFormBodyCardAmountInputField epxiryDateFormat"
           v-model="expiryDate.value"
           min="2000-01-01" max="2050-01-01"
           >




          <p v-if="!expiryDateValid" class="validationAlert">Please enter donation amount</p>


        </div>
      </div>

              <div class="paymentFormBodyCardAmount cvv ">
        <div class="paymentFormBodyHeader asterix">Card CVV</div>
        <div class="paymentFormBodyCardAmountInput expiryDatePLace cvv" :class="{invalid: !payCardDigitValid}">
          <input

              id="securityCode"
              name="securityCode"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              type = "number"
              maxlength = "3"              class="paymentFormBodyCardAmountInputField epxiryDateFormat securityCodeFormat"
              v-model="securityCode"
              :placeholder="securityCodePlaceholder"
          />



            <p v-if="!securityCodeValid" class="validationAlert">Please enter Card CVV</p>


        </div>
      </div>


<div>



</div>

          </span>

          <div class="paymentFormBodyCardAmount">


<!--            <StripeElements-->
<!--                v-if="stripeLoaded"-->
<!--                v-slot="{ elements, instance }"-->
<!--            ref="elms"-->
<!--            :stripe-key="stripeKey"-->
<!--            :instance-options="instanceOptions"-->
<!--            :elements-options="elementsOptions"-->
<!--            >-->
<!--            <StripeElement-->
<!--                ref="card"-->
<!--                :elements="elements"-->
<!--                :options="cardOptions"-->
<!--            />-->
<!--            </StripeElements>-->
<!--            <button type="button" @click="pay">Pay</button>-->

          </div>



          <nav class="nav" >
            <a
                class="nav__link donateButton"  @click="methodBeginForm" >
              <img class="submitIconFormat" :src="continueToForm">
            </a>
          </nav>

        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {mapFields} from "vuex-map-fields";


// import { mapGetters } from "vuex";

//
// import { StripeElements, StripeElement } from 'vue-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
// import { defineComponent, ref, onBeforeMount } from 'vue'

export default {

  name: "PaymentFlowTwo",
  components: {
    // StripeElements,
    // StripeElement
  },


  data: () => ({
    expiryDatePlaceHolder: "MM/YY",
    securityCodePlaceholder: "000",
    expiryDateValid: true,
    securityCodeValid: true,
    payCardDigitValid: true,
    placeholderCardNUmber: "0000-0000-0000-0000",


    expiryDate:{
      value: null,
      isValid: true,
      placeholder:"12/2023"
    },
    continueToForm: require("@/assets/makePayment.svg"),



  }),


  computed: {

    // if currency is equal to Naira return ₦ else return $
    currencySymbol() {
      if (this.currency === "Naira") {
        return "₦";
      } else {
        return "$";
      }
    },


    ...mapFields(["amountDonation.donationValue", "amountDonation.options", "currency","securityCode.length","payCardDigit.value"]),
    // ...mapGetters(["amountDonation"])
  },

  methods: {
    paymentIntent () {
      if (this.isLoggedIn) {
        this.$store.dispatch('paymentIntent')
            .catch((_err) => {
              console.log(_err)
              this.loading = false
              const show = true
              const color = 'red darken-3'
              const text = 'Server Error, try again later!'
              this.$store.commit('cartSnack', {
                show, color, text
              })
            })
      } else {
        this.$router.push('/pre-checkout')
      }
    }
    ,

    donationValueFormat(amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    methodBeginForm(){

      // this.validateForm();

      if (!this.formIsValid) {
        console.log('unfilled input');

        this.isNextPage = false;
        return;
      }{

        // const pageOneData = {
        //   amountDonation: this.amountDonation.value,
        //   currency: this.currency,
        // };

        console.log('filled input ' + this.amountDonation + ' currency ' + this.currency);
        this.isNextPage = true;
        this.$router.push('/paymentcard');
      }



    }

  },

  created() {
    console.log("PaymentFlowTwo created");
    console.log("%c we outtta " + this.donationValue + " " + this.currency, 'color: purple');

  }

}

</script>

<style scoped>


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
  margin: 0 auto;
  margin-left: 3.3rem;

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
  margin-left: 3.3rem;

}

.validationAlert {
  color: red;
  font-size: 12px;
  margin-top: 5.1px;
  margin-left: 0.2rem;
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


.nav {
  position: fixed;
  bottom: 0;
  width: 105%;
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

.iosIconFormat {
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
    /*overflow-x: auto;*/
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


input,
input::placeholder {
  font-size: 20px ;
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
input[type=date]::-webkit-datetime-edit-month-field{
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
}



input[type="date"] {
  display:block;
  position:relative;
  padding:1rem 3.5rem 1rem 0.75rem;

  font-size:14px;
  font-family:monospace;

  /*border:1px solid #8292a2;*/
  border-radius:0.25rem;
  background:
      white
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' margin-top='1rem' viewBox='0 0 20 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23688EBB' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' transform='translate(1 1)'%3E%3Crect width='18' height='18' y='2' rx='2'/%3E%3Cpath d='M13 0L13 4M5 0L5 4M0 8L18 8'/%3E%3C/g%3E%3C/svg%3E")
      right 1rem
      center
      no-repeat;

  cursor:pointer;
}
input[type="date"]:focus {
  outline:none;
  border-color:#3acfff;
  box-shadow:0 0 0 0.25rem rgba(0, 120, 250, 0.1);
}

::-webkit-datetime-edit {}
::-webkit-datetime-edit-fields-wrapper {}
::-webkit-datetime-edit-month-field:hover,
::-webkit-datetime-edit-day-field:hover,
::-webkit-datetime-edit-year-field:hover {
  background:rgba(0, 120, 250, 0.1);
}
::-webkit-datetime-edit-text {
  opacity:0;
}
::-webkit-clear-button,
::-webkit-inner-spin-button {
  display:none;
}
::-webkit-calendar-picker-indicator {
  position:absolute;
  width:2.5rem;
  height:100%;
  top:0;
  right:0;
  bottom:0;

  opacity:0;
  cursor:pointer;

  color:rgba(0, 120, 250, 1);
  background:rgba(0, 120, 250, 1);

}

input[type="date"]:hover::-webkit-calendar-picker-indicator { opacity:0.05; }
input[type="date"]:hover::-webkit-calendar-picker-indicator:hover { opacity:0.15; }



input#expiryDate[data-v-5d6e0923] {
  /* width: 9rem; */
  /* width: 159px; */
  color: #8292a2;
  /* height: 45px; */
  width: 168px;
}

.nav {
  position: fixed;
  bottom: 0;
  width: 118%;
  height: 71px;
  box-shadow: 0 0 3px rgb(0 0 0 / 20%);
  background-color: #ffffff;
  display: flex;
  margin-left: -4.9rem;
  overflow-x: auto;
}
.donateButton[data-v-5d6e0923] {
  height: 4.5rem;
  position: relative;
  margin-left: -4rem;
}


.amountDonation .cardNumberFormat{
  width: 20.9rem;
}
.cardNUmberLayout {
  padding-top: 2rem;
}






</style>