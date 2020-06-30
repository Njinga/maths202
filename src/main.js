import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import 'katex/dist/katex.min.css';

import VueKatex from 'vue-katex';
import Vue from 'vue'
import katex from 'vue-katex'
import 'katex/dist/katex.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Notify from 'mdbvue/lib/components/Notify'

 

import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';

Vue.use(VueKatex, {
  globalOptions: {
    //... Define globally applied KaTeX options here
  }
});


Vue.config.productionTip = false
Vue.use(VueKatex, {
  globalOptions: {
    //... Define globally applied KaTeX options here
  }
});



Vue.use(katex)


Vue.config.productionTip = false
Vue.use(VueKatex, {
  globalOptions: {
   
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
