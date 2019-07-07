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
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }   
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
