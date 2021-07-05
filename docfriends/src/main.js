import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import { GOOGLE_API_KEY } from "../config"
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLE_API_KEY,
    libraries: 'places', 
  },
})


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

