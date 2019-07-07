<template>
	<div>
		<button @click="handleAdd({amount: 2})">加</button>
	</div>
</template>

<script type="text/javascript">
import { mapActions } from 'vuex'

export default {
	name: 'Control',
	methods: {
		...mapActions({
			handleAdd: 'increment'
		})
	}
}
</script>