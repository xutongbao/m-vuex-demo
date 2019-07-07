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
			this.$store.commit({
				type:'increment',  
				amount: 2
			})
		}
	}
}
</script>