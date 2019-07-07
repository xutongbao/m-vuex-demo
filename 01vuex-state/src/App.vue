<template>
  <div id="app">
    <div>{{count}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="scss">
</style>
