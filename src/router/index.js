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
import StripePage from "@/pages/StripePage.vue";
// import LoadingScreen from "@/components/layout/LoadingScreen.vue";
// import StripePayment from "@/components/paymentFlow/StripePayment.vue";
// import PaymentFlowOne from "@/components/paymentFlow/PaymentFlowOne.vue";

export default  [


  { path: '/causecontribution/:id/' , component: LandingPage, name : 'home' ,   /// <--- WEB HOME PAGE

    children: [
      { path: '/causecontribution/:id/', component: FormPageOneWeb ,
        // params: true,
      props: true},

    ]
  },

    { path: '/causecontribution/:id/paymentrestart', component: PaymentFailure ,
      name : 'paymentrestart',

  },


    { path: '/causecontribution/:id/payment', component: StripePage , name : 'stripPayment'
    },

  { path: '/causecontribution/:id/paymentfailure', component: PaymentFailure , name : 'PaymentFailure',  /// <--- WEB FAILURE Page
    // params: true,
    props: true},
  { path: '/paymentsuccess', component: SuccessPage , name : 'SuccessPage'},


  { path: '/causecontribution/:id/form', component: FormPageTwo , name : 'FormPageTwo',
    // params: true,
    props: true},



  { path: '/causecontribution/payment-error',
    name: 'error',
    component: ErrorPagePayment    , props: true}
  ,

  {path: '/causecontribution/form', component: FormPageOne,
    name: 'mobileform'
    , props: true
  }
  // ,

  // {
  //   path: '/causecontribution/success', component: FormPageTwo,
  //   name: 'mobilesucess'
  //   , props: true
  //
  // }
  ,


  {path: '/paymentinfoweb', component: PaymentPageWeb},
  // {path: '/', component: StripePage},
  {path: '/xyz', component: FormPageThree},    /// <--- comement xyz route
  { path: '/sample', component: sample },
  {path: '/output', component: SampleOutput},


  // { path: '/:notFound(.*)', component: ErrorPagePayment }
  // error page



  { path: '/:notFound(.*)', component: ErrorPagePayment },



]


