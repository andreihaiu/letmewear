import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

import Hotjar from 'vue-hotjar'

import axios from 'axios';

const firebaseConfig = {
  apiKey: "AIzaSyC_p5z2Zz-XQSr6W_vSQAnJFqme9ijVeF4",
  authDomain: "letmewear-8b6e5.firebaseapp.com",
  databaseURL: "https://letmewear-8b6e5.firebaseio.com",
  projectId: "letmewear-8b6e5",
  storageBucket: "letmewear-8b6e5.appspot.com",
  messagingSenderId: "155659867532",
  appId: "1:155659867532:web:f4c73f6012b9078362f2a9",
  measurementId: "G-HLMPX7MRG6"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const VueScrollTo = require('vue-scrollto');
Vue.config.productionTip = false;
Vue.prototype.$analytics = firebase.analytics();
Vue.use (Hotjar, {
  id: '2112824',
  isProduction: true
})
Vue.use(Argon);
Vue.use(VueScrollTo);
Vue.use(axios);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
