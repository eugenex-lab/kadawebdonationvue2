import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vSelect from 'vue-select';
// eslint-disable-next-line
import styles from './fonts/fonts.css';



Vue.config.productionTip = false


store.subscribe((mutation, state) => {
  // The code inside the curly brackets fires any time a mutation occurs.
  // When a mutation occurs, we'll stringify our entire state object - which
  // contains our todo list. We'll put it in the users localStorage, so that
  // their data will persist even if they refresh the page.
  localStorage.setItem('store', JSON.stringify(state));
})




new Vue({
  router,
  store,
  // add axios and vue-axios to the Vue instance
    axios,
    VueAxios,
    render: h => h(App
        .component('v-select', vSelect)
        .use(store)
        .use(router)
    )
}).$mount('#app')
