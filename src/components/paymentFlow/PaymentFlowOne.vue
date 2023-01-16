<template>





  <div class="bodyFormat">

    <!--    {{this.showNGN}}-->
    <!--    {{this.minAmountValid}}-->


    <the-header></the-header>
<!--    {{this.payRef}}  -->
<!--    {{this.continueSTripePayment}}-->

    <div class="smallWidthContainer" v-cloak>
      <div   v-show="!showPayoutSummary">




<!--        </div>-->


        <div class="paymentFormBody"
             v-if="!enterStripCheckout"   >







          <div class="paymentFormBodyHeader">
            <div class="paymentFormBodyHeader asterix ">
              Please enter your names
            </div>
          </div>

          <div class="inputEMail">


            <input
                :class="{invalid: !firstNameValid}"
                id="alightText"
                name="payCardDigit"
                class=" paymentFormBodyCardAmountInputField inputEMail inputFirstName placeholder "
                v-model.trim="firstName"
                placeholder="First Name"
            />

            <span class="formatSPace">
              <input
                  :class="{invalid: !lastNameValid}"
                  name="payCardDigit"
                  class=" paymentFormBodyCardAmountInputField inputEMail inputFirstName secondName placeholder "
                  v-model.trim="lastName"
                  placeholder="Surname"
                  id="alightText"


              />
                 </span>

          </div>
          <div class="fixFOrmatError">
            <p v-if="!firstNameValid" class="validationAlert topFormFOrmat sideleftFormat">Enter your


              First Name</p>


            <p v-if="!lastNameValid" class="validationAlert topFormFOrmat leftFormat ">Enter your Last Name </p>


          </div>


          <div class="paymentFormBodyHeader asterix formatTop"> Enter your Email Address</div>

          <div class="inputEMail emialFOrmat">
            <input




                :class="{invalid: !emailValid}"
                name="payCardDigit"
                class=" paymentFormBodyCardAmountInputField inputEMail placeholder "
                v-model="emailInput"
                placeholder="username@email.com"
                id="alightText"
            />

          </div>
          <div v-if="!emailValid" class="validationAlert topFormFOrmat emailAlert "> Please enter valid email address
          </div>


          <div class="paymentFormBodyHeader asterix formatTop"> How much would you like to donate


          </div>
          <div class="paymentFormBodyCardAmount">
          <span class="paymentFormBodyCardAmountInput "
                :class="{invalid: !amountDonationValid}"
          >
            <span class="paymentFormBodyHeaderCurrencySelect">
              <select class="minimal" id="currency" v-model="currency">
                <option class="minimal"
                        v-for="option in options"
                        :value="option.currencySymbol"
                        :key="option.currencySymbol">
                  {{ option.currencySymbol }}
                </option>
              </select>


                <DebouncedCurrencyInput
                    v-model="amountDonationInput"
                    id="amountDonation"
                    class="paymentFormBodyCardAmountInputField inputValue numBoxFormat"
                    :placeholder="placeholder"
                    autocomplete="off"

                    :options="{
      currency: 'NGN',
      hideCurrencySymbolOnFocus: false,
        currencyDisplay: 'hidden',
      hideGroupingSeparatorOnFocus: false,
      hideNegligibleDecimalDigitsOnFocus: false,
    }"
                />



            </span>

          </span>
            <p v-if="leastAmountDonationValValid" class="validationAlert" :style="{ 'color':minAmountAlert  }">Minimum
              contribution {{ watchSelectedCurrency }}</p>


          </div>

          <div class="paymentFormBodyCardAmount">
            <div class="paymentFormBodyHeader donationFormat ">
              <label class="toggle">
                  <span class="toggle-label">Make donation

                    anonymous

                  </span>
                <input class="toggle-checkbox" type="checkbox">
                <div class="toggle-switch"></div>
              </label>
            </div>
          </div>


          <div class="webButtonContainer">


            <flutterwave-modal v-show="showNGN">
            </flutterwave-modal>

          </div>
<!--          <a class="nav__link donateButton webVersion " v-show="!showNGN" @click="validateTHIS">-->
          <a v-show="!showNGN" class="nav__link donateButton webVersion " @click="validateTHIS">
            <img class="submitIconFormat" :src="continueToForm">
          </a>

        </div>
      </div>







        <div class="paymentFormBody"  v-show="showPayoutSummary">

        

 <div   v-show="!this.showStripePayment">


          <div class="paymentFormBodyHeader">
            <div class="paymentFormBodyHeader asterix noAfterAsterix ">
              Your Names
            </div>
          </div>

          <div class="inputEMail">




               <div class="grey-box" @click="editPay">


                   <div class="grey-box__content__title">
                     {{firstName}} {{lastName}}
                   </div>


               </div>

          </div>
          <div class="fixFOrmatError">


          </div>


          <div class="paymentFormBodyHeader asterix formatTop noAfterAsterix"> Your Email Address</div>

          <div class="inputEMail">



            <div class="grey-box" @click="editPay">


              <div class="grey-box__content__title">
                {{emailInput}}
              </div>


            </div>




          </div>



          <div class="paymentFormBodyHeader asterix formatTop noAfterAsterix"> Donation Amount
            <div class="formatDOnationAMountBox">
            <div class="grey-box"  @click="editPay">

              <div class="grey-box__content__title">
                {{ this.displayCurrency }}
              </div>


            </div>
            </div>

          </div>




<!--          <a class="nav__link donateButton webVersion btnFormat" v-show="!showNGN" @click="pay">-->
<!--            <img class="submitIconFormat btn" id="pic" :src="payForm">-->
<!--          </a>-->

          <a class="nav__link donateButton webVersion btnFormat" v-show="showNGN">
            <flutterwave-modal >
            </flutterwave-modal>
          </a>

   <a class="nav__link donateButton webVersion btnFormat" v-show="!showNGN">
     <img class="submitIconFormat btn" id="pic" :src="payForm">
   </a>



          <a class="editBtn"   @click="editPay">
            Edit details
          </a>


</div>

<!--repeated flutterwave and payment button and edit button down here  -->

          <div  class="formatStripe showStripe" v-show="this.showStripePayment">

            <div class="stripeREcBox">

              <div class="stripeREcBoxHeader">

                <div class="summaryFormat">
                  SUMMARY
                </div>

                <div class="totalAmountFormat">
                  {{this.displayCurrency }}
                </div>

              </div>






            </div>

<div class="formatButtonStripe">

  <a class="nav__link donateButton webVersion btnFormat" v-show="showNGN">
    <img class="submitIconFormat btn" id="pic" :src="payForm">
    <flutterwave-modal>
    </flutterwave-modal>
  </a>

<!--  <a class="nav__link donateButton webVersion btnFormat" v-show="!showNGN" @click="pay">-->
<!--    <img class="submitIconFormat btn" id="pic" :src="payForm">-->
<!--  </a>-->


<!--  <a class="editBtn"   @click="cancelPay">-->
<!--    Cancel-->
<!--  </a>-->

</div>





          </div>



        </div>






  </div>

    <nav class="nav">

      <!--/// mobile button -->
      <a
          class="nav__link donateButton mobileVersion"  v-show="showNGN">
        <flutterwave-modal  class="submitIconFormat"  >
        </flutterwave-modal>
      </a>

      <a
          class="nav__link donateButton mobileVersion" v-show="!showNGN"  @click="validateTHIS" >
        <img class="submitIconFormatMobile"  :src="continueToForm">
      </a>


    </nav>


    </div>



</template>


<script>
// import {StripeElementPayment} from '@vue-stripe/vue-stripe';

import {mapFields} from "vuex-map-fields";
// import {mapMutations} from "vuex";
import 'vue-select/dist/vue-select.css';
import continueButoon from "@/assets/Continuebhevron.svg";
import paymetBtn from "@/assets/makePayment.svg";

import DebouncedCurrencyInput from "@/components/layout/DebouncedCurrencyInput.vue";
// remove check below
import FlutterwaveModal from "@/components/paymentFlow/FlutterwaveModal.vue";
// import { StripeCheckout } from '@vue-stripe/vue-stripe';
import {mapState} from "vuex";
import TheHeader from "@/components/layout/TheHeader";
// import axios from "axios";



export default ({
      name: "PaymentFlowOne",
      props: {
        // amountPicked: this.amountDonation,
        // currencyPicked: this.currency,
      },
      components: {
        FlutterwaveModal,
        DebouncedCurrencyInput,
        TheHeader,


      },
      setup() {
        return {


          startStripeSdk:false,   /// un-used


          publicKeyStripe: "pk_test_51J9qFaDUqvtd3qvsd5okYctfoVezKe8p3PYTDzbPCG8oNPPlGfvmU2tyb3OS3epgcHMobM7vuXAhz2B5CRczJpvA00eSzPLKZ3",
          enterStripCheckout: false,
          value: 12343434343,
          isNextPage: true,
          continueToForm: continueButoon,
          continueToFormDetails: continueButoon,
          payForm:paymetBtn,


          leastAmountDonationValValid: true,
          price: 123.45,
          // formIsValid: true,
          currencyAmt: "₦1,000,000",
          makeTextGreen: false,
          // minAmountValid: "#003b88",
          minimumDonationAnyCurrency: 0,

          isProduction: false,
          flwKey: "FLWPUBK_TEST-9ae5cc9e62a984b04ce8f3666d4e8225-X",  // flutterwave
          // amount: "amountDonation.donationValue",
          // currency: "NGN",
          country: "NG",
          customer: {
            name: "Kolapo Opeyemi",
            email: "kola.egen@gmail.com",
            price: 1000,
          },

          customizations: {
            title: "Sankore Cause Foundation",
            description: "Payment to rebuild Olumo Rock",
            logo: "http://dp76jxyzopnbo.cloudfront.net/kada/images/kada3x.png",
          },
          paymentMethod: "",
          formIsValid: true,
        }
      }
        ,

      watch: {

        showStripeElement: function (val) {

          val = this.$store.state.showStripeCheckout
          return val
        },

        amountDonationInput: function (val) {
          if (!val.length) {
            this.$store.commit("SET_MIN_AMOUNT_ALERT", '#003b88')

            this.$store.commit("SET_AMOUNT_DONATION_VALID", true);
          } else {
            // this.$store.commit("SET_AMOUNT_DONATION_VALID", true);
            // this.$store.commit("SET_MIN_AMOUNT_ALERT", '#003b88')
          }
        },


// just check we u typing text in the input field

        emailInput: function (val) {
          if (val.length > 0) {

            this.$store.commit("SET_EMAIL_VALID", true);
          } else {
            // this.$store.commit("SET_EMAIL_VALID", true);
          }
        },

        // just check we u typing text in the input field


        lastName: function (val) {
          if (val.length > 0) {


            this.$store.commit("SET_LAST_NAME_VALID", true);
          } else {
            this.$store.commit("SET_LAST_NAME_VALID", true);
          }
        },

        // just check we u typing text in the input field


        firstName: function (val) {

          if (val.length > 0) {


            this.$store.commit("SET_FIRST_NAME_VALID", true)

          } else {
            // this.$store.commit("SET_FIRST_NAME_VALID", false)
          }

        },


        amountDonation: function (val) {

          alert("greater than beep booping " + val + " " + newDonationValue)


          const newDonationValue = this.watchSelectedCurrency.replace(/,/g, '').replace(/₦/g, '').replace(/\$/g, '')

          console.log(newDonationValue)

          // console.log("%c Watch this currency change here ",
          //     "background: #222; color: pink ; font-size: 10px; font-weight: bold; padding: 5px; border-radius: 5px;"
          //     , this.watchSelectedCurrency, newDonationValue, this.donationValue)

          // alert("beep boop plus amout trackig  " + newDonationValue)


          this.$store.commit('amountDonation.donationValue', this.donationValue)   //
          // if (val >= newDonationValue) {
          if (val.length > 0) {
            alert("greater than beep booping " + val + " " + newDonationValue)

            // this.amountDonationValValid = true
            this.$store.commit("SET_AMOUNT", true);
            this.$store.commit("SET_MIN_AMOUNT_ALERT", "#003b88")
            this.$store.commit("SET_AMOUNT_DONATION_VALID", true)

            // return

            // }else if (val < newDonationValue) {
          } else {

            this.$store.commit("SET_MIN_AMOUNT_ALERT", "#003b88")
            this.$store.commit("SET_AMOUNT_DONATION_VALID", true)

            // alert("less than beep boop " + val + " " + newDonationValue)


            // this.amountDonationValValid = false
            // this.$store.commit("SET_MIN_AMOUNT_ALERT", 'pink')

            // return
          }
        },

        // firstName: function (val) {
        //   this.$store.commit('firstName', this.firstName)
        //   if (val.length >= 3) {
        //     this.firstNameValid = true
        //     return
        //   }else if (val.length < 3) {
        //     this.firstNameValid = false
        //     return
        //   }
        // },




      },
      computed: {


        ...mapFields(["emailInput", "firstName", "firstName.isValid", "email", "amountDonation.donationValue",
          "causeId",
          // ,"amountDonation.donationValue",
          "amountDonation.options", "currency", "minimumDonation", "dollarMinimumDonation", "minimumAMountNaira", "currencyXData"])
        ,

        ...mapState({}),

        continueSTripePayment() {
          return this.$store.getters.continueSTripePayment
        },

        payRef() {
          return this.$store.getters.initStripeData.paymentTransactionReference
        },


        showStripePayment() {


          return this.$store.state.showStripePayment
        },

        displayCurrency() {

          const newDonationValue = this.formatNumber(this.amountEditPage)


          return this.$store.getters.currency + ' '+ newDonationValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

          // add comma to the amount
          // return this.$store.getters.currency + ' '+ this.amountEditPage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")


        },

        minAmountValid() {

          // remove comma from the amount and naira sign
         const val = String(this.$store.getters.minAmountValidation).replace(/,/g, "").replace("₦", "") // remove comma from the amount and naira sign
          // remove comma from the amount

          return val


          // remove comma from the amount and naira sign



        },


        amountEditPage: {

          get() {
            return       this.$store.getters.amountDonation
          },

        },


        showPayoutSummary() {
          return this.$store.getters.showPayoutSummary
          // return false
        },

        initStripeDataSecretKey: function () {
          return this.$store.getters.initStripeData.gatewaySecretKey
          // return this.$store.getters.initSecKey
        },

        initStripePublicKey: function () {
          return this.$store.getters.initStripeData.gatewayPublicKey

        },

        stripeDataINfo: function () {
          return this.$store.getters.initStripeData
        },


        flutterPaymentResponse: {

          get() {

            const raw = this.flutterPaymentResponse;

            console.log("raw", raw);
            return raw;

          },
        }
        ,
        flutterwaveData: {
          get() {
            return this.$store.state.initFlutterData;
          }
        },
        showStripeCheckout: {
          get() {
            return this.$store.state.showStripeCheckout
          },
          set(value) {
            this.$store.commit('SET_SHOW_STRIPE_CHECKOUT', value);
          }


        },

        amountDonationInput: {
          get() {
            return this.$store.state.amountDonation.donationValue;
          },
          set(value) {
            this.$store.commit('SET_AMOUNT', value);
          }
        },

        minimumAMountDollar: {
          get() {
            return this.getCurrencyInfo.currencyList[1].minimumDonationAmount
          },
        },


        amountDonationValid: {
          get() {

            return this.$store.state.amountDonation.isValid

          },
          set(value) {
            this.$store.commit("SET_AMOUNT_DONATION_VALID", value);
          }
        },


        emailInput: {
          get() {
            return this.$store.state.email.value;
          },
          set(value) {
            this.$store.commit("SET_EMAIL", value);
          },
        },

        emailValid: {
          get() {
            return this.$store.state.email.isValid;
          },
          set(value) {
            this.$store.commit("SET_EMAIL_VALID", value);
          },
        },


        firstName: {


          get() {

            return this.$store.state.firstName.value
          },
          set(value) {
            this.$store.commit("SET_FIRST_NAME", value);
          }
        },

        firstNameValid: {
          get() {
            return this.$store.state.firstName.isValid
          },
          set(value) {
            this.$store.commit("SET_FIRST_NAME_VALID", value);
          }
        },

        lastName: {
          get() {
            return this.$store.state.lastName.value
          },
          set(value) {

            // alert("beep boop")
            this.$store.commit("SET_LAST_NAME", value);
          }
        },
        lastNameValid: {
          get() {

            return this.$store.state.lastName.isValid
          },
          set(value) {
            this.$store.commit("SET_LAST_NAME_VALID", value);
          }
        },

        donatedAmountString() {
          const indoData = this.$store.state.amountDonation.donationValue
          const indoDataString = indoData.toString()

          return indoDataString
        },


        showNGN() {
          return this.$store.state.currency === "₦";
        },

        amountDonationValValid() {
          return this.$store.state.amountDonationValValid
        },

        minAmountAlert: function () {
          return this.$store.state.minAmountAlert
        },

        reference() {
          let text = "";
          let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (let i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
        },


        causeDetailInfo() {
          const indoData = this.$store.state.causeXData
          // check if dataresponse is not 200 return null
          if (indoData.responseCode !== 200) {
            return "No data"
          }
          return indoData.responseContent
        }

        ,

        getCurrencyInfo() {
          const indoData = this.$store.state.currencyXData

          if (indoData.responseCode !== 200) {
            return "No data"
          }
          return indoData.responseContent
        },

        watchSelectedCurrency() {
          if (this.currency == "₦") {
            console.log("%c this shows wen u select Naira , the val of min naira is --->"
                ,
                "color: #003b88; font-size: 16px; font-weight: bold; background-color: #fff; padding: 5px; border-radius: 5px; border: 1px solid #003b88;"
                , this.causeDetailInfo.minimumAmountAllowed)




            // const minAmount = this.causeDetailInfo.minimumAmountAllowed.replace(/,/g, '').replace(/₦/g, '')

            // comment out this line to test the min amount alert
            this.$store.commit("SET_MIN_AMOUNT_VALIDATION", this.causeDetailInfo.minimumAmountAllowed)

            return this.causeDetailInfo.minimumAmountAllowed
          } else {
            const buzz = this.getCurrencyInfo.currencyList[1].unicode + this.getCurrencyInfo.currencyList[1].minimumDonationAmount

            console.log("%c this shows wen u select DOllar , the val of min naira is --->"
                ,
                "color: #003b88; font-size: 16px; font-weight: bold; background-color: #fff; padding: 5px; border-radius: 5px; border: 1px solid #003b88;"
                , buzz)


            this.$store.commit("SET_MIN_AMOUNT_VALIDATION", this.getCurrencyInfo.currencyList[1].minimumDonationAmount)

            return buzz
          }
        },
        getNairaINfo() {
          // get the first value of the array
          const buzz = this.getCurrencyInfo[1].currencyList.currencySymbol;
          return buzz
        }
        ,
        accAmt() {
          const ytt = this.currencyAmt;
          // convert to number removing the currency symbol and comma
          const ytt2 = ytt.replace(/[^0-9.-]+/g, ""); // this line is to
          // convert to number
          const ytt3 = Number(ytt2);
          console.log(ytt3);
          return ytt3;
        },


        placeholder() {
          let selected = this.options.find(o => o.currencySymbol === this.currency)
          return selected.placeholder
        },

        currencySymbol() {
          const selected = this.options.find(o => o.value === this.currency)
          const formatDonationValue = this.donationValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          alert(formatDonationValue + selected.currencySymbol)


          return selected.currencySymbol + ' ' + formatDonationValue
        },

        changeCurrency() {
          let selected = this.options.find(o => o.value === this.currency)
          let fo = "ZZR"
          console.log(selected.value)
          alert(selected.value)
          alert(fo)
          alert(this.currency)
          alert(selected)
          return fo
        },

      }

      ,
      methods: {

        formatNumber (num) {
          return parseFloat(num).toFixed(2)
        },

        // apiCallToGeneratePaymentIntent


        // async generatePaymentIntent() {
        //
        //
        //   // const paymentIntent = await apiCallToGeneratePaymentIntent(); // this is just a dummy, create your own API call
        //   // this.elementsOptions.clientSecret = "pi_3MKdIxDUqvtd3qvs2cVi9ZjA_secret_yarMeTe5RmhzkIZEoBbg1dD5j"
        //
        //
        //   this.elementsOptions.clientSecret = this.initStripeDataSecretKey
        //
        //   // make paymet callback to the server
        //
        //
        //
        // },


        validateForm() {    /// duplicated mthod one is playment flow andther in stripe Page

          this.$store.commit("SET_FIRST_NAME_VALID", true);
          this.$store.commit("SET_EMAIL_VALID", true);
          this.$store.commit("SET_LAST_NAME_VALID", true);
          this.$store.commit("SET_AMOUNT_DONATION_VALID", true);
          this.$store.commit("SET_MIN_AMOUNT_ALERT", "#003b88")

          this.formIsValid = true;

          // alert("here --> " + this.minimumAMountDollar)


          if (this.firstName === null || this.firstName.length < 1) {
            // alert("Please enter a valid first name");
            this.formIsValid = false;
            this.$store.commit("SET_FIRST_NAME_VALID", false);
          }

          if (this.lastName === null || this.lastName.length < 1) {
            // alert("Please enter a valid last name");
            this.formIsValid = false;
            this.$store.commit("SET_LAST_NAME_VALID", false);
          }

          // validate email address using regex
          const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (!emailRegex.test(this.emailInput)) {
            this.formIsValid = false;


            this.$store.commit("SET_EMAIL_VALID", false);
          }

          if (this.amountDonationInput === null || this.amountDonationInput < this.minAmountValid || this.amountDonationInput.length < 1) {

            this.$store.commit("SET_AMOUNT_DONATION_VALID", false);
            this.formIsValid = false;
            this.$store.commit("SET_MIN_AMOUNT_ALERT", 'red')


            // alert("try check am na  called " + this.minimumAMountNaira)


          }


          // alert("this meas amout dey ")


        },

          validateTHIS(){   /// duplicated mthod one is playment flow andther in stripe Page
          // alert("Clicked vlaidate button")

          this.validateForm()



            this.$store.commit("SET_SHOW_STRIPE_PAYMENT", false)


            if (this.formIsValid) {

              if(this.$store.getters.currency == "₦") {

                alert("naira")


              } else {

                this.$store.dispatch("initializeStripePayment")
                //
                this.$router.push({  name: 'stripPayment' })

               // this.$store.commit('SET_STATUS',true )

                // alert("dollar")
                this.$refs.paymentRef.submit();


              }






          } else {
            // alert("to check valiation " + this.formIsValid )

          }

        }
        ,
        editPay(){       // remove this method later

          this.$store.commit("SET_SHOW_PAYOUT_SUMMARY", false)
          this.$store.commit("SET_SHOW_STRIPE_PAYMENT", false)


          // this.$refs.paymentRef.clear() ;

        },


        cancelPay(){       // remove this method later

          console.log("cancel pay clicked")

          this.$store.commit("SET_SHOW_PAYOUT_SUMMARY", false)
          this.$store.commit("SET_SHOW_STRIPE_PAYMENT", false)

          this.$store.commit("SET_FIRST_NAME", null)
          this.$store.commit("SET_LAST_NAME", null)
          this.$store.commit("SET_EMAIL", null)
          this.$store.commit("SET_AMOUNT", null)


          this.$store.commit("SET_CURRENCY", "₦");








          // this.$mount();



        },




        submit() {


          alert("Hi hi Captain")

          this.validateForm()


//       if (this.donatedAmount === null || this.donatedAmount === undefined || this.donatedAmount < this.minimumAMountNaira) {
//
// alert("Please enter a valid amount" + this.minimumAMountNaira + " " + this.donatedAmount)
//         return  this.$store.commit("SET_MIN_AMOUNT_ALERT", 'red')  ,
//             this.$store.commit("SET_AMOUNT_DONATION_VALID", false)

//       }else if (this.donatedAmount >= this.minimumAMountNaira ||
//
          if (this.formIsValid) {

            alert("hi")


          }
        }
        ,

        makePaymentCallback(response) {
          alert("Payment callback", response)

        },

        async getNairaMin() {

          const buzz = this.getCurrencyInfo.currencyList[0];
          console.log("%c 🍎 buzz: ", "font-size:20px;background-color: #FCA650;color:#fff;", buzz)
          return buzz;


        },


        //
        runfirst() {
          const ytt = this.currencyAmt;

          const ytty = this.accAmt


          console.log("%c so here we started from " + ytt + " and we are now " + ytty + " ",
              "background: #222; color: red ; font-size: 50px; font-weight: bold; padding: 5px; border-radius: 5px;"
              , ytt, ytty)

        },


        formatPrice(value) {
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },


        methodBeginForm() {

          // alert("Hi")
          //
          //
          // alert("methodBeginForm")
          // console.log("methodBeginForm called")
          // console.log("%c methodBeginForm called, formIsValid is  -->" + this.currency, 'color: black ; font-size: 20px');
          //
          // // this.validateForm();
          // // if amount is empty, don't go to next page
          //
          //
          // console.log('filled input ' + this.amountDonation + ' currency ' + this.currency + ' minimum ' + this.minimumDonation);
          // // this.isNextPage = false;
          // // alert("methodAlert called")
          // window.location.href = '/causecontribution/success'
          // // the push without coming back
          // // this.$router.push('home/payment');  // replace is used to prevent the user from going back to the previous page
          //
          //
          // console.log("clicked continue to payment 2 page");

          // log the prop value
        }

        ,
        methodBeginFormWeb() {

          console.log("methodBeginForm called")
          console.log("%c methodBeginForm called, formIsValid is  -->" + this.currency, 'color: black ; font-size: 20px');
          this.$router.push('/causecontribution/paymentsuccess');
          // this.isNextPage = true;
          // this.validateForm();
          // if amount is empty, don't go to next page
          // if (!this.formIsValid) {
          //   console.log('unfilled input');
          //   this.isNextPage = true;
          //   // this.amountDonationValValid = false;
          //   return;
          // }
          // {
          //   console.log('filled input ' + this.amountDonation + ' currency ' + this.currency + ' minimum ' + this.minimumDonation);
          //   this.isNextPage = true;
          //   this.$router.push('/causecontribution/payment');
          //   // the push without coming back
          // }

          // console.log("clicked continue to payment 2 page");
          // log the prop value
        },
      },


      mounted() {
        // this.generatePaymentIntent();

        // alert("remouted")

        this.$store.commit("SET_SHOW_PAYOUT_SUMMARY", false)
        this.$store.commit("SET_SHOW_STRIPE_PAYMENT", false)

        this.$store.commit("SET_FIRST_NAME", null)
        this.$store.commit("SET_LAST_NAME", null)
        this.$store.commit("SET_EMAIL", null)
        this.$store.commit("SET_AMOUNT", null)


        this.$store.commit("SET_CURRENCY", "₦");

      },

      created() {
        // alert("cretaed ")

        // this.runfirst();
        // console.log("created here");


      }
      ,


    }
)

</script>

<style scoped>

option.minimal {
  text-align: justify;
}

.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 17px;
  box-shadow: 0 0 3px rgb(0 0 0 / 20%);
  background-color: #ffffff;
  display: flex;
  /* margin-left: -2.5rem; */
  overflow-x: hidden;
  display: flex;
  align-items: center;
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


.paymentFormBody {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
  /*margin-left: 3.3rem;*/
  position: relative;

}

select#currency {
  height: 3rem;
  height: 3rem;
  /*background-color: red;*/
}

.validationAlert {
  color: red;
  font-size: 11px;
  margin-top: 4.5px;
  text-align: left;
  margin-left: 1.5rem;
  font-weight: 500;
}

p.validationAlert.topFormFOrmat[data-v-4506583d] {
  /*position: absolute;*/
  top: 7.5em;
}

p.validationAlert.topFormFOrmat.leftFormat[data-v-4506583d] {
  left: 9.96rem;
  position: absolute;
  width: 9rem;
  top: 0rem;
}

.leastValidationAlert {
  color: hsl(214deg 100% 27%);
  font-size: 12px;
  /*margin-top: 5.1px;*/
  text-align: left;
}


.paymentFormBodyHeader {
  color: hsl(0deg 0% 0%);
  font-family: "SF Pro Text";
  font-size: 14px;
  letter-spacing: 0;

  /*padding-bottom: 0.5rem;*/
  /*padding-top: 1rem;*/

  text-align: left;
  width: 24rem;
  /*padding-left: -0.4rem;*/
}

.paymentFormBodyHeader.asterix {
  color: hsl(0deg 0% 0%);
  font-family: "SF Pro Text";
  font-size: 14px;
  letter-spacing: 0;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  text-align: left;
  width: 24rem;

  position: relative;
  /* margin-left: 2.7rem; */
  width: 21rem;
  padding-left: 1.5rem;
}

.paymentFormBodyHeader.asterix.formatTop {
  padding-top: 1.5em;
}

select {
  background-color: white;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.65em 0.4em 0.7em 0.6em;
  /* margin: 0; */
  margin-right: 0rem;
  box-sizing: border-box;
  -webkit-appearance: none;
  width: 2.9rem;
  /* margin: 0; */
  text-indent: 0.59rem;
  box-sizing: border-box;
  /* -webkit-appearance: none; */
  -moz-appearance: none;

  font-family: "SF Pro Text";
}


.paymentFormBodyHeader.asterix.noAfterAsterix:after {
  content: "";
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
  text-indent: 0.59rem;
}


select:-moz-focusring {
  color: #E6E6E6;
  text-shadow: 0 0 0 #000;
  text-indent: 0.59rem;
}

.paymentFormBodyCardAmountText {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}

input.paymentFormBodyCardAmountInputField {
  width: 19.25rem;
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
  text-align: left;
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
  margin-top: 0.2rem;
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
  background: #003b88;
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

.donateButton {
  height: auto;
  position: relative;
  overflow-x: hidden;
  margin-left: -4rem;
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

.cvvborderPositon {
  margin-left: 1.5rem;
}

.paymentFormBodyHeader.donationFormat {
  padding-left: 1.4rem;
  padding-top: 0.1rem;
}

span.paymentFormBodyCardAmount {
  position: relative;
  /* margin-left: 2.7rem; */
  width: 21rem;
  padding-left: 1.5rem;
}

.webButtonContainer {
  display: none;
}


@media screen and (max-width: 350px) {

  .smallWidthContainer {
    width: 18rem;
    /*background-color: #0070FF;*/
  }

  .paymentFormBodyHeader.asterix[data-v-4506583d][data-v-4506583d] {
    /*!* color: hsl(0deg 0% 0%); *!*/
    /*!* font-family: "SF Pro Text"; *!*/
    /*!* font-size: 14px; *!*/
    /*!* letter-spacing: 0; *!*/
    /*!* padding-bottom: 0.5rem; *!*/
    /*!* padding-top: 1rem; *!*/
    /*!* text-align: left; *!*/
    /*!* width: 24rem; *!*/
    /*!* position: relative; *!*/
    /*!* margin-left: 2.7rem; *!*/
    /*!* width: 21rem; *!*/
    /*padding-left: -1.5rem;*/
    padding-left: 0rem;
  }

  .paymentFormBodyHeader.donationFormat {
    padding-left: 0em;
  }

  span.paymentFormBodyCardAmount[data-v-4506583d][data-v-4506583d][data-v-4506583d] {
    position: relative;
    /* margin-left: 1.4rem; */
    width: 100%;
    padding-left: 0rem;
  }

  input#amountDonation[data-v-4506583d][data-v-4506583d][data-v-4506583d] {
    width: 14.9rem;
    position: absolute;
    margin-left: 0.3rem;
    margin-top: 0rem;
    height: 3rem;

    font-family: "SF Pro Text";
  }

  .validationAlert[data-v-4506583d] {
    color: hsl(0deg 100% 50%);
    font-size: 12px;
    margin-top: 5.1px;
    text-align: left;
    /* margin-left: 1.5rem; */
    font-weight: 600;
    margin-left: 0rem;
  }


}


.minimalOptionFormat {
  margin-left: 7em;
  position: relative;
  right: 1px; /* Amount you want it moved by */
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}


input.invalid.paymentFormBodyCardAmountInputField.inputEMail.inputFirstName.placeholder {
  border: 1px solid red;
}

input.invalid.paymentFormBodyCardAmountInputField.inputEMail.placeholder {
  border: 1px solid red;
}

input#amountDonation[data-v-4506583d] {
  width: 17.7rem;
  position: absolute;
  margin-left: 0.3rem;
  margin-top: 0rem;
  height: 3rem;
  font-family: "SF Pro Text";
  text-align: left;
}

span.span[data-v-5d6e0923] {
  display: flex;
  /* float: left; */
  /* width: 100%; */
  padding-top: 1.1rem;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


::placeholder {
  text-align: left;
}

/* or, for legacy browsers */

::-webkit-input-placeholder {
  text-align: left;
}

:-moz-placeholder { /* Firefox 18- */
  text-align: left;
}

::-moz-placeholder { /* Firefox 19+ */
  text-align: left;
}

:-ms-input-placeholder {
  text-align: left;
}


@media screen and (max-width: 375px) {


  /*span.paymentFormBodyCardAmount[data-v-4506583d][data-v-4506583d] {*/
  /*  position: relative;*/
  /*  margin-left: 1.4rem;*/
  /*  width: 100%;*/
  /*  padding-left: 0rem;*/
  /*}*/
  input#amountDonation[data-v-4506583d][data-v-4506583d] {
    width: 18rem;
    position: absolute;
    margin-left: 0.3rem;
    margin-top: 0rem;
    height: 3rem;
  }

  img.submitIconFormat[data-v-4506583d] {
    width: 14.5rem;
    height: 2.4rem;
  }


}




@media screen and (min-width: 899px) {

  header.mobileHeader {
    display: none;
  }
  .nav[data-v-4506583d] {

    display: none;

  }

  .webButtonContainer {
    display: block;
  }

  input#amountDonation[data-v-4506583d][data-v-4506583d] {
    width: 14.7rem;
    position: absolute;
    margin-left: 0.3rem;
    margin-top: 0rem;
    height: 3rem;
    font-family: "SF Pro Text";
    text-align: left;
  }

  .donateButton[data-v-4506583d] {
    /* height: 4.5rem; */
    position: relative;

    margin-left: -2.1rem;
    padding-top: 0.2rem;
    cursor: pointer;
  }

  img.submitIconFormat[data-v-4506583d] {
    width: 19.5rem;
    height: 3.4rem;
  }

  input#amountDonation[data-v-4506583d][data-v-4506583d][data-v-4506583d] {
    width: 16.1rem;
    position: absolute;
    margin-left: 0.3rem;
    margin-top: 0rem;
    height: 3rem;
    font-family: "SF Pro Text";
    text-align: left;
  }



}


@media screen and (max-width: 900px) {




  input.paymentFormBodyCardAmountInputField.inputEMail.inputFirstName[data-v-4506583d] {
    width: 10.15rem;
  }

  input.paymentFormBodyCardAmountInputField[data-v-4506583d] {
    width: 21.1rem;
  }

  p.validationAlert.topFormFOrmat.leftFormat[data-v-4506583d][data-v-4506583d][data-v-4506583d] {
    left: 10.5rem;
  }


  .bodyFormat{
    overflow-x: hidden;
    display: block;
  }

  a.nav__link.donateButton.mobileVersion {
    display: flex;
  }


  .submitIconFormat {
    margin-left: -0.7rem;
  }


}


@media screen and (min-width: 1039px) {

  .smallWidthContainer {
    margin: 0px auto;
    /* height: 50px
px
; */
    width: 24.2rem;
    /* border: 1px solid black; */
    /* padding: 1px; */
    position: relative;
    margin-left: 2rem;
    float: left;
  }


}


.inputEMail[data-v-4506583d] {
  display: flex;
  padding-left: 0.8rem;
  padding-bottom: -0.7em;
  left: 4rem;
  position: initial;
  margin-left: 0.3em;
}

.inputEMail.emialFOrmat {
  display: flex;
  flex-direction: column;
}


input.paymentFormBodyCardAmountInputField.inputEMail.inputFirstName {
  width: 9.2rem;
}

span.formatSPace {
  padding-left: 0.5rem;
}

.placeholder::placeholder {
  font-size: 14px;
  position: relative;
  /*top: -0.3rem ;*/


  /*height: 17px;*/
  opacity: 0.5;
  color: rgba(1, 13, 28, 0.8);

  margin-top: 3rem;
}

span.paymentFormBodyCardAmountInput {
  display: flex;
  margin-left: 1.5rem;
}


input.paymentFormBodyCardAmountInputField.inputEMail.placeholder::placeholder {
  position: relative;
  top: -0.3rem;
}

/*inside input format*/


input#alightText::placeholder {
  position: relative;
  top: -0.3px;
  left: 0.4rem;

}

.fixFOrmatError {
  display: flex;
  position: absolute;
  top: 5.2em;
}


p.validationAlert.topFormFOrmat.leftFormat[data-v-4506583d][data-v-4506583d] {
  left: 9.8rem;
  position: absolute;
  width: 9rem;
  top: 0rem;
}

p.validationAlert.topFormFOrmat.sideleftFormat {
  margin-left: 1.4rem;
}

.validationAlert.topFormFOrmat.emailAlert {
  position: absolute;
}


.formatStripe {
  position: relative;
  margin-left: -1.6rem;
  width: auto;
  height: 24.5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}


@media screen and (max-width: 900px) {
.smallWidthContainer{
  padding-top: 0.5em;
  display: flex;
  flex-direction: column;
  display: block;

}

  .donateButton[data-v-4506583d] {
    display: none;
  }

  select#currency[data-v-4506583d] {
    color: black;
    /* font-size: larger; */

  }


}

/* Section for details Page */



.grey-box{
  height: 45px;
  width: 307px;
  background-color: #F9F9F9;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  cursor: grab;
}

.formatDOnationAMountBox {
  display: flex;
  /* padding-left: 0.8rem; */
  padding-bottom: -0.7em;
  left: 4rem;
  /*position: initial;*/
  padding-top: 0.5rem;
  margin-left: -0.5em;
}

.grey-box__content__title{
  color: rgba(1,13,28,0.8);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.29px;
  line-height: 17px;
  padding-left: 1.1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}


img#pic {
  width: 19.5rem;
}
a.nav__link.donateButton.webVersion.btnFormat {
  margin-left: -3.3rem;
}

a.editBtn {
  opacity: 0.5;
  color: #010D1C;
  /* font-family: Inter; */
  font-size: 14px;
  letter-spacing: 0;
  margin-left: -3rem;
  /* line-height: 20px; */
  cursor: grab;
  width: 100%;
}

.paymentFormBody.stripeFOmrat {
  padding-top: 2.8rem;
  width: 21rem;
}

/* Stripe format  */


.stripeREcBox {
  display: block;
  height: 20rem;
  width: 19.5rem;
}

.formatButtonStripe {
  padding-left: 3rem;
  padding-top: 1.2rem;
}

.summaryFormat{
  opacity: 0.5;
  color: #010D1C;
  font-family: Inter;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17px;
}

.totalAmountFormat{
  color: #010D1C;
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 36px;
  margin-top: -0.7rem;
}

.stripeREcBox[data-v-4506583d] {
  display: block;
  height: 20rem;
  width: 19.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}


.stripeREcBoxHeader {
  display: flex;
   width: 100%;
  justify-content: space-between;
  padding-bottom: 1em;

}


/*input[type=text] {*/
/*  font-family: Inter;*/
/*  color: #1abc9c;*/
/*}*/



/*input#alightText[type=email] {*/
/*  background-color: blue;*/
/*  color: red;*/
/*}*/


</style>
