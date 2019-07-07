<template>
	<div>
		<button @click="checkout()">提交订单</button>
		<button @click="clearCart()">清空购物车</button>
	</div>
</template>

<script type="text/javascript">
import { mapActions } from 'vuex'

export default {
	name: 'Control',
	methods: {
		...mapActions({
			checkout: 'checkout',
			clearCart: 'clearCart'
		})
	}
}
</script>