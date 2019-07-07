<template>
	<div>
		<button @click="increment({amount: 2})">加</button>
	</div>
</template>

<script type="text/javascript">
import { mapActions } from 'vuex'

export default {
	name: 'Control',
	methods: {
		...mapActions(['increment'])
	}
}
</script>