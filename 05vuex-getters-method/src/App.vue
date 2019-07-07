<template>
  <div id="app">
    <li v-for="item in getTodosById" v-bind:key="item.id">
    	{{item.text}}
    </li>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  computed: { 	
  	getTodosById() {
  		return this.$store.getters.getTodoById(2)
  	}
  },
}
</script>

<style lang="scss">
</style>
