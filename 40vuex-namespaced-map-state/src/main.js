import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
  },
  getters: {},
  mutations: {
  },
  actions: {
  },
  modules: {
    moduleAChildModule: {
      namespaced: true, 
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
  }
}

const moduleB = {
  namespaced: true,
  state: {
  },
  getters: {},
  mutations: {
    increment(state) {
      state.b++
    }
  },
  actions: {   
  }
}

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
  },
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')