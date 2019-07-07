import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    a: 1
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
        moduleAChildModuleCount: 3
      },
      getters: {
        moduleAChildModuleCount(state) {
          return state.moduleAChildModuleCount
        }
      },
      mutations: {
        increment(state) {
          state.moduleAChildModuleCount++
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
  },
  actions: {
  }
}

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')