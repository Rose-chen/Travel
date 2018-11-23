<template>
	<div class="hot">
		<dt>
			<span class="hotTitle">
				本周热门榜单
			</span>
			<span class="hotMore">
				<router-link to="/list">
					全部榜单 >
				</router-link>
			</span>
		</dt>
		<dd>
			<ul class="listWrapper">
				<li class="listItem" v-for="item of list">
					<img class="listImg" :src="item.imgUrl">
					<div class="title">{{item.title}}</div>
					<div class="price"><span class="orange">￥{{item.price}}</span>起</div>
				</li>
			</ul>
		</dd>
	</div>
</template>

<script>
export default {
	name: "HomeHot",
	props: {
		list: Array
	}
}
</script>

<style lang="stylus">
	.hot
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 52%
		background: #fff
		dt
			margin: .26rem
			.hotTitle
				font-size: .32rem
			.hotMore
				a
					float: right
					font-size: .24rem
					color: #666
		dd
			margin-top: .08rem
			padding-bottom: .04rem
			.listWrapper
				overflow-x: scroll
				white-space: nowrap
				padding: 0 .2rem .1rem
				.listItem
					    position: relative
					    display: inline-block
					    width: 2rem
					    margin: 0 .1rem 0 0
					    text-align: center
					.listImg
						width: 2rem
						height: 2rem
					.title
						width: 2rem
						margin-top: .08rem
						height: .28rem
						line-height: .36rem
						font-size: .24rem
					.price
						font-size: .24rem
						margin-top: .08rem
						margin-bottom: 0.08rem
						line-height: .36rem
						.orange
							color: #ff8300



</style>