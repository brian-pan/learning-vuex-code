import axios from 'axios'

//create: state; getters; actions; mutations
// boilerplate for a Vuex module
const state = {
    todos: [
        {
            id: 1,
            title: 'Todo one'
        },
        {
            id: 2,
            title: 'Todo two'
        }
    ]
}

const getters = {
    allTodos: state => state.todos
}

const actions = {}
const mutations = {}

export default {
    // state: state
    state,
    getters,
    actions,
    mutations
}