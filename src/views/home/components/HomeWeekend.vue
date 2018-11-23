<template>
	<div class="homeWeekend">
		<div class="homeWeekendTitle">
			周末去哪儿
		</div>
		<div class="weekendWrapper">
			<div class="scenicItem" v-for="item in list" :key="item.id">
				<img class="imgItem" :src="item.imgUrl" alt="">
				<div class="scenicTitle">{{item.title}}</div>
				<div class="scenicDesc">{{item.desc}}</div>
			</div>
		</div>
	</div>	
</template>

<script>
export default {
	name: 'HomeWeekend',
	props: {
		//list: Array
	},
	data () {
		return {
			list: [{
	        "id": "0001",
	        "imgUrl": "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
	        "title": "北京温泉排行榜",
	        "desc": "细数北京温泉，温暖你的冬天"
	      }, {
	        "id": "0002",
	        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
	        "title": "北京必游TOP10",
	        "desc": "来北京必去的景点非这些地方莫属"
	      }, {
	        "id": "0003",
	        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
	        "title": "寻找北京的皇城范儿",
	        "desc": "数百年的宫廷庙宇，至今依旧威严霸气"
	      }, {
	        "id": "0004",
	        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
	        "title": "学生最爱的博物馆",
	        "desc": "周末干嘛？北京很多博物馆已经免费开放啦"
	      }, {
	        "id": "0005",
	        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
	        "title": "儿童剧场，孩子的乐园",
	        "desc": "带宝贝观看演出，近距离体验艺术的无穷魅力"
	      }]
		}
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