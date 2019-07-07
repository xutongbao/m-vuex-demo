import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
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
    increment({commit}) {
      commit('increment')
    }
  }
}

const moduleB = {
  state: {
    count: 1
  },
  getters: {

  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({commit}) {
      commit('increment')
    }    
  }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
