<template>
  <div id="app">
    <div>
    {{moduleA.moduleAChildModule.moduleAChildModuleCount}}, 
    {{muduleAChildModule}}, 
    {{moduleAChildModuleByMap}}</div>
    <Control></Control>
  </div>
</template>

<script>
import Control from './Control.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Control
  },
  computed: {
    ...mapState(['moduleA']),
    ...mapGetters({
      moduleAChildModuleByMap: 'moduleA/moduleAChildModule/moduleAChildModuleCount'
    }),
    muduleAChildModule() {
      return this.$store.getters['moduleA/moduleAChildModule/moduleAChildModuleCount']
    }
  }
}
</script>

<style lang="scss">
</style>
