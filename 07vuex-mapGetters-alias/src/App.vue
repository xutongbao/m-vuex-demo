<template>
  <div id="app">
    <div>{{aliasDoneTodosCount}}</div>
    <li v-for="item in aliasDoneTodos" v-bind:key="item.id">
    	{{item.text}}
    </li>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      aliasDoneTodos: 'doneTodos', 
      aliasDoneTodosCount: 'doneTodosCount'
    })
  },
}
</script>

<style lang="scss">
</style>
