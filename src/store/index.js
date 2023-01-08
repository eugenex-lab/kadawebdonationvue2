import Vue from 'vue'
import Vuex from 'vuex'
import {getField, updateField} from "vuex-map-fields";
import axios from "axios";
import {useRoute} from 'vue2-helpers/vue-router';
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex)

let initSecKey =  window.localStorage.getItem('initSecKey') ;

export default new Vuex.Store(
    {
        plugins: [createPersistedState({

            key: 'initSecKey',
paths: ['initSecKey'],




            }
        )],
        state: {
            showPayoutSummary: false,
            causeContributions: "Construction of Senate Building",
            formIsValid: true,
            initFlutterData: '',
            amountDonation: {
                donationValue: '',
                isValid: true,
                options: [
                    {text: 'Naira', value: 'Naira', placeholder: '₦ 0.00', currencySymbol: '₦', iso: 'NGN'},
                    {text: 'Dollar', value: 'Dollar', placeholder: '$ 0.00', currencySymbol: '$', iso: 'USD'},
                ]
            },
            firstName: {
                value: null,
                isValid: true,
            }
            ,
            lastName: {
                value: null,
                isValid: true,
            },
            email: {
                value: null,
                isValid: true,
            },


            minAmountAlert: "#003b88",
            // amountDonationValValid: true,
            currency: "₦",

            minimumDonation: 40000,
            nairaMithisnimumDonation: "₦80,000",
            dollarMinimumDonation: "$100",
            securityCode: {
                code: 1111,
                length: 4,
            },
            payCardDigit: {

                length: 16,
                value: 3,
            },

            causeDetails: [],
            loadingStatus: true,
            idCause: '',
            idd: 2,
            // causeDetailInfo: [],
            causeDetail: [],
            causeXData: '',
            currencyXData: '',
            clientId: 1,
            errorPage: false,
            flutterPaymentResponse: '',
            causeId: '',
            initStripeData: '',
            initSecKey: initSecKey ? JSON.parse(initSecKey) : '',
            // initSecKey: '',


            minAmountValidation: '',
            showStripePayment: false,


        },
        getters: {
            initSecKey: state => state.initSecKey,

            email: state => state.email.value,
            lastName: state => state.lastName.value,
            firstName: state => state.firstName.value,
            showStripePayment: state => state.showStripePayment,
            minAmountValidation: state => state.minAmountValidation,
            currency: state => state.currency,
            showPayoutSummary: state => state.showPayoutSummary,
            initStripeData: state => state.initStripeData,


            flutterPaymentResponse: state => state.flutterPaymentResponse,
            initFlutterData: state => state.initFlutterData,

            formIsValid: state => state.formIsValid,
            minAmountAlert: state => state.minAmountAlert,
            amountDonation: state => state.amountDonation.donationValue,
            getField,
            errorPage(state) {
                return state.errorPage;
            },
            causeXData(state) {
                return state.causeXData;
            }
            ,
            currencyXData(state) {
                return state.currencyXData;
            },

            gettingCauseDetails(state) {
                return state.causeInfo;
            },
            loadingStatus(state) {
                return state.loadingStatus;
            },
            causeId(state) {
                return state.causeId;
            }

        },
        mutations: {



            saveSecKey(state) {
                window.localStorage.setItem('initSecKey', JSON.stringify(state.initSecKey));
            }
            ,
            SET_INITSECTKEY(state, payload) {

                state.initSecKey = payload

            }
            ,


            SET_SHOW_STRIPE_PAYMENT(state, payload) {
                state.showStripePayment = payload;
            },


            SET_MIN_AMOUNT_VALIDATION(state, payload) {
                state.minAmountValidation = payload;
            },

            SET_SHOW_PAYOUT_SUMMARY(state, payload) {
                state.showPayoutSummary = payload;
            }
            ,
            SET_CAUSE_ID(state, payload) {
                const routeParams = useRoute();
                payload = routeParams.params.id;
                state.causeId = payload;
            },
            SET_INIT_STRIPE_PAYMENT_DATA(state, payload) {
                state.initStripeData = payload;

                // localStorage.setItem('initStripeData', payload); // set the data in local storage
            },

            SET_FLUTTERWAVE_RESPONSE(state, payload) {
                state.flutterPaymentResponse = payload;
            }
            ,
            SET_INIT_FLUTTERWAVE_PAYMENT(state, payload) {
                state.initFlutterData = payload;
            },

            SET_EMAIL(state, payload) {
                state.email.value = payload;
            },

            SET_EMAIL_VALID(state, payload) {
                state.email.isValid = payload;
            },

            SET_VALID_FORM(state, payload) {
                state.formIsValid = payload;
            },

            SET_LAST_NAME_VALID(state, payload) {
                state.lastName.isValid = payload;
            },

            SET_FIRST_NAME(state, payload) {
                state.firstName.value = payload;
            }
            ,
            SET_FIRST_NAME_VALID(state, payload) {
                state.firstName.isValid = payload;
            },

            SET_LAST_NAME(state, payload) {
                state.lastName.value = payload;
            },


            SET_AMOUNT_DONATION_VALID(state, payload) {

                state.amountDonation.isValid = payload;

            },

            SET_MIN_AMOUNT_ALERT(state, payload) {
                state.minAmountAlert = payload;

            },

            SET_AMOUNT(state, payload) {
                state.amountDonation.donationValue = payload;
            },


            SET_ERROR_PAGE(state, payload) {
                state.errorPage = payload;
            },

            SET_STATUS(state, status) {
                state.loadingStatus = status;
            }
            ,

            SET_CAUSE(state, cause) {
                state.causeXData = cause;
                console.log(state.causeXData.responseCode);
            },
            SET_CURRENCY_DETAILS(state, currency) {
                state.currencyXData = currency;
            },


            getDataInfo(state, payload) {
                state.causeDetailInfo = payload;
            },


            updateField,
            getCauseDetails(state, payload) {
                state.causeDetails = payload;
            },

            getCauseId(state, payload) {
                const routeParams = useRoute();
                payload = routeParams.params.id;
                state.causeId = payload;
            }
        }
        ,

        actions: {


            verifyPaymentFlutterWave({commit}, payload) {

                axios.post('https://api.paystack.co/transaction/verify/', {
                        "deviceId": "string",
                        "deviceName": "string",
                        "deviceOS": "string",
                        "osVersion": "string",
                        "paymentId": "4026170",
                        "paymentReference": "FLW-MOCK-16e181c0efd4ef53de94fdd01c005b4c",
                        "paymentChannel": "Flutterwave",
                    }
                ).then(response => {

                        console.log(response.data);
                        console.log(payload);


                        setTimeout(() => {
                                commit('SET_FLUTTERWAVE_RESPONSE', response.data);
                            }
                            , 2000);


                    }
                ).catch(error => {
                        console.log(error);
                        alert(' Error Occurred' + error);

                    }
                )


            },


            initializeStripePayment: function ({commit, state}) {
                console.log("%c response.data" + state.amountDonation.donationValue +
                    state.causeId + state.firstName.value + state.lastName.value + state.email.value);


                axios.post('https://kada.identity.stage.wealthtech.ng/transaction/donation/public/collection/initialization', {
                    "deviceId": "string",
                    "deviceName": "string",
                    "deviceOS": "string",
                    "osVersion": "string",
                    "donationAmount": state.amountDonation.donationValue,
                    "paymentChannel": "Stripe",
                    "currency": "USD",
                    "paymentType": "CAUSE",
                    "paymentTypeId": 1,
                    "schoolClassId": state.causeId,
                    "firstName": state.firstName.value,
                    "lastName": state.lastName.value,
                    "emailAddress": state.email.value,
                    "payAsAnonymous": false,  // Todo switch from input
                    "paymentFrequency": "NONE",
                    "paymentModeType": "ONE_OFF"

                })
                    .then(response => {


                        console.log("%c response.data", "color: #00ff00 " +
                            "; font-size: 20px  ; font-weight: bold " +
                            " ; background-color: #000000 " +
                            "; padding: 5px 10px 5px 10px", response.data.responseCode);

                        if (response.data.responseCode === 200) {

                            commit('SET_INIT_STRIPE_PAYMENT_DATA', response.data.responseContent);
                            commit('SET_INITSECTKEY', response.data.responseContent.gatewaySecretKey);
                            commit('ALLOW_STRIPE_PAYMENT', true);


                            commit('SET_STATUS', false);
                            commit('SET_ERROR_PAGE', false);
                            console.log("%c response.data", "color: #00ff00 " +
                                "; font-size: 20px  ; font-weight: bold " +
                                " ; background-color: pink " +
                                "; padding: 5px 10px 5px 10px", response.data);

                            this.commit('saveSecKey');
                        } else {
                            commit('SET_ERROR_PAGE', true);


                        }
                    })
                    .catch(error => {
                        console.log(error);
                        alert("error --->  " + error);
                        // implment error handling page here later
                    });


            },

            initializeFlutterwavePayment({commit, state}, payload) {

                axios.post('https://kada.identity.stage.wealthtech.ng/transaction/donation/public/collection/initialization', {


                    "deviceId": "string",
                    "deviceName": "string",
                    "deviceOS": "string",
                    "osVersion": "string",
                    "donationAmount": state.amountDonation.donationValue,
                    "paymentChannel": "Flutterwave",
                    "currency": "NGN",
                    "paymentType": "CAUSE",
                    "paymentTypeId": 1,
                    "schoolClassId": state.causeId,
                    "firstName": state.firstName.value,
                    "lastName": state.lastName.value,
                    "emailAddress": state.email.value,
                    "payAsAnonymous": false,
                    "paymentFrequency": "NONE",
                    "paymentModeType": "ONE_OFF"


                })
                    // , {
                    // headers: {
                    //     "Access-Control-Allow-Origin": "*",
                    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                    // "Content-Type": "application/json",
                    // }}
                    .then(response => {
                        console.log("%c response.data", "color: #00ff00 " +
                            "; font-size: 20px  ; font-weight: bold " +
                            " ; background-color: #000000 " +
                            "; padding: 5px 10px 5px 10px", response.data);
                        console.log("%c response.data", "color: #00ff00 " +
                            "; font-size: 20px  ; font-weight: bold " +
                            " ; background-color: #000000 " +
                            "; padding: 5px 10px 5px 10px", response.data.responseCode);

                        if (response.data.responseCode === 200) {
                            commit('SET_INIT_FLUTTERWAVE_PAYMENT', response.data.responseContent);
                            commit('SET_STATUS', false);
                            commit('SET_ERROR_PAGE', false);
                            console.log("%c response.data", "color: #00ff00 " +
                                "; font-size: 20px  ; font-weight: bold " +
                                " ; background-color: pink " +
                                "; padding: 5px 10px 5px 10px", response.data.responseContent);
                        } else {
                            /// SET error page to true and show error page

                        }

                    })
                    .catch(error => {
                        console.log(error);
                        alert("error --->  " + error);
                        // implment error handling page here later
                    });
                console.log(state.causeXData + " " + state + " " + payload + " " + commit);

            },


            getCauseXdata({commit}, causeId) {

                console.log("%c clientId An attempt to get param id from use route ", "color: red", causeId);
                axios.get(`https://kada.identity.stage.wealthtech.ng/school/cause/public/view/${causeId}/details`)

                    .then(response => {
                        console.log("%c Axios in the Vuex ----> ", "color: purple", response.data);
                        // log url 5531886652142950
                        console.log("%c Loading STATUS  ----> ", "color: purple ; background-color :  pink", this.loadingStatus);
                        console.log("%c here is the ---> url ", "color: green", response.config.url);
                        commit('SET_CAUSE', response.data);

                        console.log("%c Loading STATUS  ----> ", "color: purple ; background-color :  pink", this.loadingStatus);

                        // check if the response is successful and commit the data to the store
                        if (response.data.responseCode === 200) {
                            // commit('SET_STATUS', false);
                            commit('SET_ERROR_PAGE', false);
                            console.log("%c Errror STATUS @ 200----> ", "color: green ; background-color :  white ; font-size : 30px ", this.loadingStatus);
                        } else {
                            // commit('SET_STATUS', false);
                            commit('SET_ERROR_PAGE', false);
                            console.log("%c Errror STATUS @ not 200----> ", "color: orange ; background-color :  white ; font-size : 30px ", this.loadingStatus);


                        }
                    })

                    .catch(error => {
                            console.log(error);
                        }
                    )
                    .finally(() => {
                            console.log("%c finally in the axios store ", "color: green");
                            commit('SET_STATUS', false);

                            console.log("%c Loading STATUS  ----> ", "color: purple ; background-color :  pink", this.loadingStatus);
                            console.log("%c Errror STATUS @ not 200----> ", "color: orange ; background-color : blue ; font-size : 30px ", this.errorStatus);

                        }
                    )
            },

            getCurrencyXdata({commit}, causeId) {

                console.log("%c clientId An attempt for currency and related stuff in Vuex ", "color: red", causeId);
                axios.get(`https://kada.identity.stage.wealthtech.ng/transaction/paygateway/collection/supported/currencies/cause/${causeId}`)
                    // , {
                    // headers: {
                    // "Access-Control-Allow-Origin": "*",
                    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                    // "Content-Type": "application/json",
                    // }}
                    .then(response => {
                            console.log("%c Axios in the Vuex Currency and related stuff  ----> ", "color: purple", response.data);
                            // log url
                            console.log("%c here is the ---> url ", "color: green", response.config.url);
                            commit('SET_CURRENCY_DETAILS', response.data);
                        }
                    )
                    .catch(error => {
                            console.log("%c here is the ---> url ", "color: green", error);
                            console.log("%c Axios red alert in vuex here is the ---> url ", "color: red", error.response);

                        }
                    )
                    .finally(() => {
                            console.log("%c finally in the axios store ", "color: green");
                        }
                    )

            }
        }
    }
);