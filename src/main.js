import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';

Vue.use(VueKatex, {
  globalOptions: {
    //... Define globally applied KaTeX options here
  }
});

Vue.config.productionTip = false

import Notify from 'mdbvue/lib/components/Notify'
Vue.use(Notify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
