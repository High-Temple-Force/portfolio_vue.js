import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// definition
const store = new Vuex.Store({
    state: {
        message: '初期メッセージ'
    },
    getters: {
        // getter using message
        message(state) { return state.message }
    },
    mutations: {
        setMessage(state, payload) {
            state.message = payload.message
        }
    },
    actions: {
        doUpdate({ commit }, message ) {
            commit('setMessage', { message })
        }
    }
})

// export state
export default store