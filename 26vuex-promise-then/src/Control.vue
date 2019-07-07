<template>
	<div>
		<button @click="handleAdd()">加</button>
	</div>
</template>

<script type="text/javascript">

export default {
	name: 'Control',
	methods: {
		handleAdd() {
			//this.$store.commit('increment')
			this.$store.dispatch('increment').then(() => {
				console.log('Action 通常是异步的，那么如何知道 action 什么时候结束呢?')
			})
		}
	}
}
</script>