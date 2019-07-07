<template>
  <div id="app">
    <div>{{count}},{{name}},{{job}}</div>
  </div>
</template>

<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  computed: {
  	job() {
  		return 'web'
  	},
  	...mapState(['count', 'name'])
  },
	// computed: mapState([
	//   'count'
	// ])    
}
</script>

<style lang="scss">
</style>
