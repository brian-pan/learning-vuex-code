// main.js is application stating point

// notice this tutorial is pulished in 2019 ... 

import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

// Vue.config.productionTip = false

createApp(App).use(store).mount('#app')

// new Vue({
//     store,
//     render: h => h(App)
// }).$mount('#app')
