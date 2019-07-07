<template>
	<div>
		<button @click="handleAddModuleA()">加(moduleA)</button>
		<button @click="handleAddModuleB()">加(moduleB)</button>
	</div>
</template>

<script type="text/javascript">

export default {
	name: 'Control',
	methods: {
		handleAddModuleA() {
			this.$store.commit('moduleA/increment')
			//this.$store.dispatch('increment')
		},
		handleAddModuleB() {
			this.$store.commit('moduleB/increment')
			//this.$store.dispatch('increment')
		}		
	}
}
</script>