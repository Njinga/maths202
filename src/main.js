import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import 'katex/dist/katex.min.css';

import VueKatex from 'vue-katex';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notify from 'mdbvue/lib/components/Notify'


Vue.config.productionTip = false
Vue.use(Notify)
Vue.use(VueKatex, {
  globalOptions: {
   
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
