<template>
	<div class="homeRecommond">
		<div class="homeRecommondTitle">
			猜你喜欢
		</div>
		<div class="itemList">
			<div class="cityItem" v-for="scenic in list">
				<img class="cityImg" :src="scenic.imgUrl">
				<div class="itemContent">
					<div class="title">{{scenic.title}}</div>
					<!-- <div class="desc">{{scenic.desc}}</div> -->
					<div class="comment">{{scenic.comment}}条评论</div>
					<div class="price"><span class="orange">￥<span class="fnt-40">{{scenic.price}}</span></span> 起 <span class="right">{{scenic.city}}</span></div>
					<div v-if="scenic.tips" class="tips">{{scenic.tips}}</div>
					<div v-if="scenic.desc" class="desc">{{scenic.desc}}</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
export default {
	name: 'HomeRecommond',
	props: {
      //list: Array
    },
	data () {
		return {
	        list: [{
				"id": "0001",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg",
				"title": "北京国际鲜花港",
				"comment": 1928,
				"price": "19.9",
				"city": "朝阳区",
				"desc": ""
			},{
				"id": "0002",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg",
				"title": "远去的恐龙",
				"comment": 430,
				"price": "140",
				"city": "顺义区",
				"desc": "来试试中国最高的弹射过山车吧~"
			},{
				"id": "0003",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg",
				"title": "远去的恐龙",
				"comment": 55623,
				"price": "180",
				"city": "海淀区",
				"desc": ""
			},{
				"id": "0002",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg",
				"title": "远去的恐龙",
				"comment": 430,
				"price": "140",
				"city": "顺义区",
				"desc": "在“海底两万里”鱼你共舞"
			},{
				"id": "0003",
				"imgUrl": "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg",
				"title": "远去的恐龙",
				"comment": 55623,
				"price": "180",
				"city": "海淀区",
				"desc": ""
			}]
		}
	}
}	
</script>

<style lang="stylus" scoped>
	.homeRecommond
		background: #fff
		.homeRecommondTitle
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
					.desc
						font-size: .28rem
						line-height: .40rem
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
							color: #ff8300
							.fnt-40
								font-size: .40rem
						.right
							position: absolute
							bottom: 0
							right: .3rem
					.tips
						background: #fff9f9
						color: #f55
						font-size: .24rem
						margin-top: .4rem
						display: inline-block
						padding: .08rem
					.desc
						font-size: .24rem
						color: #f55
						margin-top: .4rem
						display: inline-block
						background: #fff9f9
						padding: .04rem .12rem
</style>