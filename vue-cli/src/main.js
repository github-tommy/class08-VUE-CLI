import Vue from 'vue'
import App from './App.vue'

import Header from './components/header.vue'
import Body from './components/body.vue'
import Footer from './components/footer.vue'

Vue.component('app-header', Header)
Vue.component('app-body', Body)
Vue.component('app-footer', Footer)

// import VueRouter from 'vue-router';

// Vue.use(VueRouter);
// import {routes} from './components/router';
// const router = new VueRouter({
// routes,
// mode: 'history'
// })



new Vue({
el: '#app',
// router,
render: h => h(App)
})