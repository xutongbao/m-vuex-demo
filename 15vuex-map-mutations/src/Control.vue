<template>
	<div>
		<button @click="increment()">加</button>
	</div>
</template>

<script type="text/javascript">

import { mapMutations } from 'vuex'

export default {
	name: 'Control',
	methods: {
		...mapMutations(['increment'])
	}
}
</script>