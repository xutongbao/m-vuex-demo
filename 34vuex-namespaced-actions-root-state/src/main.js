import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    increment(state, step) {
      state.count = state.count + step
    }
  },
  actions: {
    increment({ state, commit, rootState }) {
      commit('increment', rootState.step)
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    count: 1
  },
  getters: {},
  mutations: {
    increment(state, step) {
      state.count = state.count + step
    }
  },
  actions: {
    increment({ state, commit, rootState }) {
      commit('increment', rootState.step)
    }
  }
}

const store = new Vuex.Store({
  state: {
    step: 3
  },
  modules: {
    moduleA,
    moduleB,
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')