import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
import PaymentPageWeb from './pages/PaymentCompleteWeb.vue';
// import FormInfoPage from './pages/FormInfoPage.vue';
import FormPageOne from './pages/FormPageOne.vue';
import FormPageTwo from './pages/FormPageTwo.vue';
import FormPageThree from './pages/FormPageThree.vue';
import sample from './pages/SampleVue.vue';
import SampleOutput from "@/pages/SampleOutput";
import PaymentFailure from "@/pages/PaymentFailPage.vue";
import FormPageOneWeb from "@/pages/FormPageOneWeb";
import ErrorPagePayment from "@/pages/ErrorPagePayment.vue";
// import LoadingScreen from "@/components/layout/LoadingScreen.vue";
// import ErrorPage from "@/pages/ErrorPage";
// import PaymentFlowTwo from "@/components/paymentFlow/PaymentFlowTwo.vue";
import SuccessPage from "@/pages/SuccessPage.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [

    { path: '/causecontribution/:id/' , component: LandingPage,

        children: [
            { path: '/causecontribution/:id/', component: FormPageOneWeb , name : 'home',
                params: true

            , props: true},
            { path: '/causecontribution/paymentfailure', component: PaymentFailure
                ,
                name: 'PaymentFailure'
                , props: true
            }
            ,{ path: '/causecontribution/paymentsuccess', component: SuccessPage , props: true},
        ]
    },
    { path: '/causecontribution/payment-error',
        name: 'error',
        component: ErrorPagePayment    , props: true},

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



      { path: '/:notFound(.*)', component: ErrorPagePayment }






      // add 404 page

      // { path: '/:notFound(.*)', component: ErrorPage }


  ]
});




export default router;
