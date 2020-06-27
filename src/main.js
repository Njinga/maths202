import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'

import Vue from 'vue'
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Notify from 'mdbvue/lib/components/Notify'
Vue.use(Notify)

Vue.use(VueKatex, {
    globalOptions: {
        //... Define globally applied KaTeX options here
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')