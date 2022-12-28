<template>
  <!--  <div class="flw">-->


  <a class="button" @click="makePayment">
    <img class="submitIconFormat" :src="continueToForm">
  </a>

  <!--  </div>-->


</template>

<script>
import {mapFields} from "vuex-map-fields";
import {mapState} from "vuex";
import continueButoon from "@/assets/makePayment.svg";
 import axios from "axios";



export default {
  name: "FlutterwaveModal",
  data: () => ({
    continueToForm: continueButoon,
    paymentResponse : '',
  }),

  created() {
    const script = document.createElement("script");
    script.src = !this.isProduction
        ? "https://ravemodal-dev.herokuapp.com/v3.js"
        : "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);

  },


  computed: {

    // display the payment response
    responseINI() {
      return this.paymentResponse;
    },



    ...mapFields(["causeXData", "lastName", "email", "amountDonation.donationValue", "amountDonation.options", "currency", "minimumDonation", "dollarMinimumDonation", "nairaMinimumDonation", "currencyXData"])
    ,
    flutterwaveData: {
      get() {
        return this.$store.state.initFlutterData;
      }
    },

    formIsValid: {
      get() {
        return this.$store.state.formIsValid;
      },
      set(value) {
        this.$store.commit("SET_VALID_FORM", value);
      }
    },
    emailInput: {
      get() {
        return this.$store.state.email.value
      },
      set(value) {
        this.$store.commit("SET_EMAIL", value)
      }

    },

    emailValid: {
      get() {
        return this.$store.state.email.isValid
      },
      set(value) {
        this.$store.commit("SET_EMAIL_VALID", value)
      }
    }


    , firstName: {
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
        this.$store.commit("SET_LAST_NAME", value);
      }
    },


    minimumAMountNaira() {

      // check if dataresponse is not 200 return null
      if (this.causeXData.responseCode !== 200) {
        return "No data"
      }
      const amount = this.causeXData.responseContent.minimumAmountAllowed.replace(/,/g, "").replace("₦", "")
      // alert("%c amount", "color: #00ff00 ; font-size: 200px", amount)
      return amount
    },
    ...mapFields(["causeXData"]),
    ...mapState(['amountDonation']),


    donatedAmount() {
      const indoData = this.$store.state.amountDonation.donationValue
      return indoData
    },


  },


  methods: {
    validateFormvalidateForm() {

      this.formIsValid = true;

      if (this.firstName.value === "" || this.firstName.length < 3 || this.firstName.length === null || this.firstName.value === null || this.firstName.value === undefined) {
        this.formIsValid = false;
        alert("Please enter a valid first name");
      }
      if (this.lastName.value === "" || this.lastName.length < 3 || this.lastName.length === null || this.lastName.value === null || this.lastName.value === undefined) {
        this.formIsValid = false;
        alert("Please enter a valid last name");
      }


    },


    validateForm() {

      this.$store.commit("SET_FIRST_NAME_VALID", true);
      this.$store.commit("SET_EMAIL_VALID", true);
      this.$store.commit("SET_LAST_NAME_VALID", true);

      this.formIsValid = true;

      if (this.firstName === null || this.firstName.length < 1 || !this.firstName) {
        // alert("Please enter a valid first name");
        this.formIsValid = false;
        this.$store.commit("SET_FIRST_NAME_VALID", false);
      }

      if (this.lastName === null || this.lastName.length < 1 || !this.lastName) {
        // alert("Please enter a valid last name");
        this.formIsValid = false;
        this.$store.commit("SET_LAST_NAME_VALID", false);
      }

      // validate email address using regex
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailRegex.test(this.emailInput)) {
        // alert("Please enter a valid email address");
        this.formIsValid = false;
        this.$store.commit("SET_EMAIL_VALID", false);
      }





    }

    ,
    makePayment() {

// alert("initial click  ---->>>>  "  + this.donatedAmount   )

      this.validateForm();


      // ckeck if amount is not null or undefined
      if (this.donatedAmount === null || this.donatedAmount === undefined || this.donatedAmount < this.minimumAMountNaira) {
        // alert("Please enter a valid amount" + this.minimumAMountNaira + " " + this.donatedAmount);


        return this.$store.commit("SET_MIN_AMOUNT_ALERT", 'red')  , this.$store.commit("SET_AMOUNT_DONATION_VALID", false) ,
            this.$store.commit("SET_AMOUNT_DONATION_VALID", false)

      } else if (this.donatedAmount >= this.minimumAMountNaira && this.formIsValid) {

        //run an action in the store to make api call to get the payment link

        this.$store.dispatch("initializeFlutterwavePayment")


        setTimeout(() => {
          const FlutterwaveCheckout = window.FlutterwaveCheckout;
          FlutterwaveCheckout({
            public_key: this.flutterwaveData.gatewayPublicKey,
            tx_ref: this.flutterwaveData.paymentTransactionReference,
            amount: this.flutterwaveData.paymentAmount,
            currency: this.flutterwaveData.currency,
            payment_options: this.payment_method,
            customer: {
              name: this.flutterwaveData.customerName,
              email: this.flutterwaveData.emailAddress,
            },
            customizations: {
              title: this.custom_title,
              description: this.flutterwaveData.narration,
              logo: this.flutterwaveData.logo,
            },
            onclose: function () {

              // this.$store.commit("SET_AMOUNT", null)
              // this.$store.commit("SET_FIRST_NAME", null)
              // this.$store.commit("SET_LAST_NAME", null)
              // this.$store.commit("SET_EMAIL", null)
            },
            callback(response){


              this.paymentResponse = response

              // send the response to the server

              try {

                /// send axios request to the server
                axios.post("https://kada.identity.stage.wealthtech.ng/transaction/donation/public/collection/verification", {
                  "deviceId": "string",
                  "deviceName": "string",
                  "deviceOS": "string",
                  "osVersion": "string",
                  "paymentId": response.transaction_id,
                  // "paymentId": "232322",
                  "paymentReference": response.flw_ref,
                  "paymentChannel": "Flutterwave",
                })
                  .then(response => {
                    console.log("%c axios response ", response.data.responseMessage , "%c color: #00ff00 ; font-size: 200px")
1
                    if(response.data.responseMessage === "Payment Completed!")
                    {
                      // window.location.href = '/causecontribution/paymentsuccess'
                      this.$router.push('/causecontribution/paymentsuccess')
                    }
                    else
                    {
                      // window.location.href = '/causecontribution/paymentfailure'

                      this.$router.push('/causecontribution/paymentfailure')

                    }

                  })
                  .catch(error => {
                    // window.location.href = '/causecontribution/paymentfailure'
                    this.$router.push('/causecontribution/paymentfailure')

                    console.log(error);
                  });

              } catch (e) {
                console.log(e)
                this.$router.push('/causecontribution/paymentfailure')
              }

            }


});
        }, 1000);

      }

    }



    ,

    processPaymentResponse() {
      alert("callback payment")
      console.log(this.paymentResponse)
    }

  },

  watch:{

    responseIN(){
      alert("responsex")

      const data  =  this.paymentResponse

      console.log(data)

      return data

    }


  }
      ,
  props: {
    isProduction: {
      type: Boolean,
      required: false,
      default: false //set to true if you are going live
    },
    email: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    flwKey: {
      type: String,
      required: true
    },
    callback: {
      type: Function,
      required: true,

      // eslint-disable-next-line
      default: (response) => {

      }
    },
    close: {
      type: Function,
      required: true,
      default: () => {
      }
    },
    currency: {
      type: String,
      default: "NGN"
    },
    country: {
      type: String,
      default: "NG"
    },
    custom_title: {
      type: String,
      default: ""
    },
    custom_logo: {
      type: String,
      default: ""
    },
    reference: {
      type: String,
      default: ""
    },
    payment_method: {
      type: String,
      default: "card,mobilemoney,ussd"
    }
  },

}
</script>

<style scoped>


img.submitIconFormat[data-v-4506583d] {
  width: 19.5rem;
  height: 3.4rem;
}


@media screen and (max-width: 375px) {


  img.submitIconFormat[data-v-4506583d] {
    width: 14.5rem;
    height: 2.4rem;
  }


}

img.submitIconFormat {
  width: 19.3rem;
}

a.button {
  display: flex;
  padding-left: 1.3rem;
  padding-top: 1.4rem;
}

</style>