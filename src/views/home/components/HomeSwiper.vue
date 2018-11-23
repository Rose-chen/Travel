<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    //list: Array
  },
  data() {
    return {
      swiperOption: {
      	pagination: '.swiper-pagination',
        autoplay: 3000,
      	loop: true
      },
      list: [
        {
      	  id: '0001',
      	  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'
        },
        {
      	  id: '0002',
      	  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/4d/6706bf772c05ce02.jpg_750x200_773e75f0.jpg'
        },
        {
      	  id: '0003',
      	  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
        },
        {
      	  id: '0004',
      	  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/2d/0d7dc3400a50b502.jpg_750x200_4ca95dd4.jpg'
        },
        {
      	  id: '0005',
      	  imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/15/898d6d74e9b06202.jpg_750x200_89b4509e.jpg'
        }		
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
	.wrapper >>>.swiper-pagination-bullet-active
		background: #fff
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 26.67%
		background: #eee
		.swiper-img
			width: 100%
</style>
