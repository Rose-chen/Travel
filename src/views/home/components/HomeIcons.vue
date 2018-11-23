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
  	list: Array
  },
  data () {
  	return {
  	  swiperOption: {
  	  	pagination: '.swiper-pagination',
  	  	loop: true
  	  }
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