import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {  
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount
    }
  },
  actions: {
    increment({ commit }, payload) {
      setTimeout(() => {
        commit('increment', payload)
      }, 1000)
    }   
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
