import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'



import Vue from 'vue'
import katex from 'vue-katex'
import 'katex/dist/katex.min.css'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.use(katex)


Vue.config.productionTip = false
Vue.use(katex, {
  globalOptions: {
   
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
