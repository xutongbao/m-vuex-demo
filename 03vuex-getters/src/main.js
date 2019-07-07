import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '看书', done: true },
      { id: 2, text: '打游戏', done: false },
      { id: 3, text: '看电视', done: true },
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
  },
  actions: {   
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
