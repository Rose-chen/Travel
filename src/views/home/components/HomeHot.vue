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

	},
	data() {
      return {
      	list: [
      		{
      			id: '00001',
      			imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/af/af648beb7239c330a3.img.png_150x150_0dd7ede9.png',
      			title: '武汉花博会',
      			price: 20
      		},
      		{
      			id: '00002',
      			imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_150x150_c2dcbac7.jpg',
      			title: '武汉花博会',
      			price: 56
      		},
      		{
      			id: '00003',
      			imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_150x150_bb2a2635.jpg',
      			title: '武汉花博会',
      			price: 76
      		},
      		{
      			id: '00004',
      			imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/f8/f8413365ed3e77ab.water.jpg_150x150_995c8ba9.jpg',
      			title: '武汉花博会',
      			price: 45
      		},
      		{
      			id: '00005',
      			imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/af/af648beb7239c330a3.img.png_150x150_0dd7ede9.png',
      			title: '武汉花博会',
      			price: 23
      		},
      		{
      			id: '00006',
      			imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_150x150_bb2a2635.jpg',
      			title: '武汉花博会',
      			price: 73
      		},
      		{
      			id: '00007',
      			imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/af/af648beb7239c330a3.img.png_150x150_0dd7ede9.png',
      			title: '武汉花博会',
      			price: 83
      		},
      		{
      			id: '00008',
      			imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_150x150_bb2a2635.jpg',
      			title: '武汉花博会',
      			price: 67
      		}
      	]
      }
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