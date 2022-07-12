// entry point to vuex

import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
    modules: { // any modules we have add here
        todos
    }
})

// for this file to work bring it to main.js