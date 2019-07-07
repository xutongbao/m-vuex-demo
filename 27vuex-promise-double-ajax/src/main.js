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
      state.count += payload
    }
  },
  actions: {
    incrementBefore({ commit, state }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let count = state.count + 1
          resolve(count)
          console.log('第一次请求')
        }, 1000)
      })
    },
    increment({ dispatch, commit }) {
      return dispatch('incrementBefore').then((count) => {
        setTimeout(() => {
          count = count + 1
          commit('increment', count)
          console.log('第二次请求')
        }, 1000)
      })
    }   
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
