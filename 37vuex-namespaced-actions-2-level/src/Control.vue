<template>
	<div>
		<button @click="handleAddModuleA()">加(moduleA)</button>
	</div>
</template>

<script type="text/javascript">

export default {
	name: 'Control',
	methods: {
		handleAddModuleA() {
			//this.$store.commit('moduleA/moduleAChildModule/increment')
			this.$store.dispatch('moduleA/moduleAChildModule/increment')
		}	
	}
}
</script>