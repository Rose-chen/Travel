<template>
	<div class="homeLocation clearfix">
		<div class="loc clearfix">
			<div class="location">定位失败</div>
			<div class="check">
				<router-link to="/city" class="goCity">线上验证</router-link>
			</div>
		</div>
		<div class="special">
			<div class="special-item first">
				<div class="left">
					<p class="special-title">门票特卖</p>
					<span class="special-info">天天好价1折起</span>
				</div>
				<div class="special-img-wrap">
					<img class="special-img" src="http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png" alt="">
				</div>
			</div>
			<div class="special-item">
				<div class="left">
					<p class="special-title">网红景点</p>
					<span class="special-info">全国top榜</span>
				</div>
				<div class="special-img-wrap">
					<img class="special-img" src="http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeLocation'
}
</script>

<style lang="stylus" scoped>
.homeLocation
	background: #f2f2f2
	height: 2.64rem
	.loc
		background: #fff
		height: .98rem
		line-height: .98rem
		display: flex
		text-align: center
		font-size: .26rem
		border-top: 1px solid #f2f2f2
		.location
			flex: 1
			border-right: 1px solid #f2f2f2
		.check
			flex: 1
			.goCity
				color: #333
	.special
		background: #fff
		margin: .2rem 0 
		display: flex
		.first
			border-right: 1px solid #f2f2f2
		.special-item
			flex: 1
			display: flex
			padding: .2rem .4rem
			.left
				flex: 1
				.special-title
					font-size: .26rem
					line-height: .50rem
					color: #e00
				.special-info
					font-size: .22rem
					color: #444	
			.special-img-wrap
				width: .86rem
				.special-img
					width: .78rem
					margin-top: .06rem

</style>
