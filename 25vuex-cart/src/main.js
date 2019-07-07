import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: {
      added: [{
        id: 1,
        checked: true,
        name: '手机'
      }, {
        id: 2,
        checked: true,
        name: '电脑'
      }, {
        id: 3,
        checked: true,
        name: '电视'
      }, ]
    }
  },
  getters: {},
  mutations: {
    addGoods(state, goodsName) {
      let added = [...state.cart.added]
      added.push({
        id: getID(6),
        checked: true,
        name: goodsName,
      })
      Vue.set(state.cart, 'added', added)
    },
    clearCart(state) {
      Vue.set(state.cart, 'added', [])
    },
    changeChecked(state, payload) {
      let added = [...state.cart.added]
      for (let i = 0; i < added.length; i++) {
        if (added[i].id === payload.id) {
          added[i].checked = payload.checked
        }
      }
      Vue.set(state.cart, 'added', added)
    },
    checkout(state) {
      let added = [...state.cart.added]
      added = added.filter(item => !item.checked)
      Vue.set(state.cart, 'added', added)
    },  
  },
  actions: {
    checkout({ commit, state }) {
      const savedCartItems = [...state.cart.added]
      console.log(savedCartItems)
      setTimeout(() => {
        commit('checkout')
      }, 1000)
    },
    clearCart({ commit }) {
      setTimeout(() => {
        commit('clearCart')
      }, 1000)
    },
    addGoods({commit}, payload) {
      setTimeout(() => {
        commit('addGoods', payload.goodsName)
        payload.callback()
      }, 1000)
    }
  }
})

function getID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')