<template>
	<div class="homeWeekend">
		<div class="homeWeekendTitle">
			周末去哪儿
		</div>
		<div class="weekendWrapper">
			<router-link :to="'/detail/'+item.id" tag="div" class="scenicItem" v-for="item in list" :key="item.id">
				<img class="imgItem" :src="item.imgUrl" alt="">
				<div class="scenicTitle">{{item.title}}</div>
				<div class="scenicDesc">{{item.desc}}</div>
			</router-link>
		</div>
	</div>	
</template>

<script>
export default {
	name: 'HomeWeekend',
	props: {
		list: Array
	}
}	
</script>

<style lang="stylus" scoped>
	.homeWeekend
		background: #fff
		margin-top: .1rem
		.homeWeekendTitle
			line-height: .70rem
			padding-left: .30rem
			font-size: .30rem
			background: #eee
		.itemList
			padding-left: .2rem
			padding-bottom: .3rem
			.cityItem
				padding: .2rem 0
				border-bottom: 1px solid #eee
				display: flex
				.cityImg
					width: 2rem
					height: 2rem
				.itemContent
					padding-left: .2rem
					flex-grow: 1
					.title
						line-height: .7rem
						font-size: .32rem
					.comment
						line-height: .50rem
						font-size: .24rem
						color: #666
					.price
						position:relative
						margin-top: .20rem
						font-size: .24rem
						color: #666
						.orange
							font-size: .40rem
							color: #ff8300
						.right
							position: absolute
							bottom: 0
							right: .2rem
		.weekendWrapper
			.scenicItem
				overflow: hidden
				height: 0
				padding-bottom: 4rem
				.imgItem
					width: 100%
				.scenicTitle
					padding-left: .2rem
					padding-top: .2rem
					line-height: .46rem
				.scenicDesc
					padding-left: .2rem
					line-height: .40rem
					font-size: .24rem
					color: #666
</style>