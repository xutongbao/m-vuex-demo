<template>
  <div id="app">
    <div>{{obj.count}},{{obj.newProp}}</div>
    <Control></Control>
  </div>
</template>

<script>
import Control from './Control.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Control
  },
  computed: {
    ...mapState(['obj'])
  },
}
</script>

<style lang="scss">
</style>
