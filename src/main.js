import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from 'aos'
import 'aos/dist/aos.css'
import jQuery from 'jquery'
global.jQuery = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;

new Vue({
  created (){
    AOS.init ();
  },
  router,
  render: h => h(App)
}).$mount("#app");
