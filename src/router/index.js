// import Vue from 'vue '
// import VueRouter from 'vue-router'
import LandingPage from "@/pages/LandingPage.vue";
import FormPageOneWeb from "@/pages/FormPageOneWeb.vue";
import PaymentFailure from "@/pages/PaymentFailPage.vue";
import SuccessPage from "@/pages/SuccessPage.vue";
import ErrorPagePayment from "@/pages/ErrorPagePayment.vue";
import FormPageOne from "@/pages/FormPageOne.vue";
import FormPageTwo from "@/pages/FormPageTwo.vue";
import PaymentPageWeb from "@/pages/PaymentCompleteWeb.vue";
import FormPageThree from "@/pages/FormPageThree.vue";
import sample from "@/pages/SampleVue.vue";
import SampleOutput from "@/pages/SampleOutput.vue";
import PaymentFlowOne from "@/components/paymentFlow/PaymentFlowOne.vue";

export default  [


  { path: '/causecontribution/:id/' , component: LandingPage,    /// <--- WEB HOME PAGE

    children: [
      { path: '/causecontribution/:id/', component: FormPageOneWeb , name : 'home',
        // params: true,
      props: true},

        // // add to be a ble to route to a success page after payment
        // { path: '/causecontribution/:id/paymentfailure', component: PaymentPageWeb , name : 'PaymentFailure',
        // // params: true,
        // props: true},
        // { path: '/causecontribution/:id/paymentsuccess', component: ErrorPagePayment , name : 'SuccessPage',
        // // params: true,
        // props: true},



    ]
  },

  { path: '/causecontribution/:id/paymentfailure', component: PaymentFailure , name : 'PaymentFailure',  /// <--- WEB FAILURE Page
    // params: true,
    props: true},
  { path: '/causecontribution/:id/paymentsuccess', component: SuccessPage , name : 'SuccessPage',   /// <--- WEB Success Page
    // params: true,
    props: true},


  { path: '/causecontribution/:id/form', component: PaymentFlowOne , name : 'PaymentFlowOne',
    // params: true,
    props: true},



  { path: '/causecontribution/payment-error',
    name: 'error',
    component: ErrorPagePayment    , props: true}
  ,

  {path: '/causecontribution/form', component: FormPageOne,
    name: 'mobileform'
    , props: true
  },

  {
    path: '/causecontribution/success', component: FormPageTwo,
    name: 'mobilesucess'
    , props: true

  },


  {path: '/paymentinfoweb', component: PaymentPageWeb},
  {path: '/paymentinfo', component: FormPageTwo},
  {path: '/paymentcard', component: FormPageThree},
  { path: '/sample', component: sample },
  {path: '/output', component: SampleOutput},


  // { path: '/:notFound(.*)', component: ErrorPagePayment }
  // error page



  { path: '/:notFound(.*)', component: ErrorPagePayment },



]


