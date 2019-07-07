import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import mutationType from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    obj: { count: 0 }
  },
  getters: {  
  },
  mutations: {
    [mutationType.INCREMENT](state, payload) {
      let newCount = state.obj.count + payload.amount
      Vue.set(state.obj, 'count', newCount)
      Vue.set(state.obj, 'newProp', 'xu')
    },
    [mutationType.INCREMENTPLUS](state, payload) {
      let newCount = state.obj.count + payload.amount
      Vue.set(state.obj, 'count', newCount)
      Vue.set(state.obj, 'newProp', 'xu plus')
    }    
  },
  actions: {   
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
