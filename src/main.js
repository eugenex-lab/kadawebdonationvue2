import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Routes from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter   from "vue-router";
import device from 'vue-device-detector-js'
import SkeletonCards from 'vue-ultimate-skeleton-cards'





Vue.config.productionTip = true


// store.subscribe((mutation, state) => {
//   // The code inside the curly brackets fires any time a mutation occurs.
//   // When a mutation occurs, we'll stringify our entire state object - which
//   // contains our todo list. We'll put it in the users localStorage, so that
//   // their data will persist even if they refresh the page.
//   localStorage.setItem('store', JSON.stringify(state));
// })


Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(device)
Vue.use(SkeletonCards)


const router = new VueRouter({
    mode: 'history',
    routes: Routes

}
)


new Vue({
    store,
    router : router,
    render: h => h(App)
}).$mount('#app')


