<template>
  <div id="app">
    <div>
      <input type="input" v-model="goodsName"/>
      <button @click="handleAddGoods()">添加商品</button>
    </div>  
    <div v-for="item in cart.added" :key="item.id">
      <div>
        <input type="checkbox" v-model="item.checked" @click="handleChecked(item.id, $event)"/>
        <span>{{item.name}}</span>
      </div>
    </div>
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
  data() {
    return {
      goodsName: ''
    }
  },
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    handleChecked(id, ev) {
      console.log(ev.target.checked, id)
      this.$store.commit('changeChecked', {
        id,
        checked: ev.target.checked,
      })
    },
    handleAddGoods() {
      if (this.goodsName) {
        this.$store.dispatch('addGoods', {
          goodsName: this.goodsName, 
          callback: this.callback,
        })
      }
    },
    callback() {
      this.goodsName = ''
    }
  }
}
</script>

<style lang="scss">
</style>
