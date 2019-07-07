<template>
  <div id="app">
    <li v-for="item in doneTodos" v-bind:key="item.id">
    	{{item.text}}
    </li>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  computed: {
  	doneTodos() {
  		return this.$store.getters.doneTodos
  	}
  },
}
</script>

<style lang="scss">
</style>
