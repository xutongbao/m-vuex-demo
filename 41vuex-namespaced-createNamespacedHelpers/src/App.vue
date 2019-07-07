<template>
  <div id="app">
    <div>{{count}}</div>
    <Control></Control>
  </div>
</template>

<script>
import Control from './Control.vue'
import { createNamespacedHelpers } from 'vuex'

const {mapState} = createNamespacedHelpers('moduleA/moduleAChildModule')

export default {
  components: {
    Control
  },
  computed: {   
    ...mapState({
      count: state => state.count
    }),
  }
}
</script>

<style lang="scss">
</style>
