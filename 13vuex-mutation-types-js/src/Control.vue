<template>
	<div>
		<button @click="handleAdd()">加</button>
		<button @click="handleAddPlus()">加 plus</button>
	</div>
</template>

<script type="text/javascript">

export default {
	name: 'Control',
	methods: {
		handleAdd() {
			this.$store.commit({
				type:'INCREMENT',  
				amount: 1
			})
		},
		handleAddPlus() {
			this.$store.commit({
				type:'INCREMENTPLUS',  
				amount: 2
			})			
		}
	}
}
</script>