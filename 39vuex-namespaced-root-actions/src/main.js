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
      },
      getters: {
      },
      mutations: {
      },
      actions: {
        increment({dispatch}) {
          dispatch('someAction', null, { root: true })
        }
      } 
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    b: 2
  },
  getters: {},
  mutations: {
    increment(state) {
      state.b++
    }
  },
  actions: {
    someAction: {
      root: true,
      handler({commit}, payload) {
        commit('increment')
      }
    },    
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