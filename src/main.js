import Vue from 'vue'
import App from './App'
import router from './router'
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  position: "bottom-center",
  duration: 1500,
  singleton: true
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
