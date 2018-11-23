<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(icons, index) of pages" :key="index">
        <div class="icons">
          <div class="icon" v-for="icon of icons" :key="icon.id">
            <div class="icon-img-wrapper">
              <img class="icon-img" :src="icon.imgUrl" />
            </div>
            <p class="iocn-title">{{icon.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
  	//list: Array
  },
  data () {
  	return {
  	  swiperOption: {
  	  	pagination: '.swiper-pagination',
  	  	loop: true
  	  },
  	  list: [
  	    {
  	      id: "0001",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
  	    },
  	    {
  	      id: "0002",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "武汉必游"
  	    },
  	    {
  	      id: "0003",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          desc: "游乐场"
  	    },
  	    {
  	      id: "0004",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
          desc: "滑雪季"
  	    },
  	    {
  	      id: "0005",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
          desc: "景点门票"
  	    },
  	    {
  	      id: "0006",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "滑雪季"
  	    },
  	    {
  	      id: "0007",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1811/1d/c46140e32fffa502.png",
          desc: "景点门票"
  	    },
  	    {
  	      id: "0008",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
          desc: "滑雪季"
  	    },
  	    {
  	      id: "0009",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
          desc: "景点门票"
  	    },
  	    {
  	      id: "0010",
          imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
          desc: "滑雪季"
  	    }
  	  ]
  	}
  },
  computed: {
  	pages () {
  	  var pages = [];
  	  for(var i in this.list){
  	  	const page = Math.floor(i/8)
  	  	if(!pages[page]){
  	  	  pages[page] = []
  	  	}
  	  	pages[page].push(this.list[i])
  	  }
  	  return pages
  	}
  }
}	
</script>

<style lang="stylus" scoped>
	.wrapper >>>.swiper-pagination-bullet-active
		background: #1badb6
	.wrapper
		.icons
			background: #fff
			overflow: hidden
			width: 100%
			height: 0
			padding-top: .1rem
			padding-bottom: 61%
			.icon
				float: left
				overflow: hidden
				width: 25%
				height: 0
				padding-bottom: 25%
				text-align: center
				position: relative
				.icon-img-wrapper
					position: absolute
					top: 0
					left: 0
					right: 0
					bottom: .44rem
					padding: .1rem
					.icon-img
						height: 100%
				.iocn-title
					position: absolute
					left: 0
					right: 0
					bottom: 0
					line-height: .44rem
					font-size: .28rem
					text-align: center
</style>