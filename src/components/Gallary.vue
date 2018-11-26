<template>
  <div class="gallery">
    <div class="swiper-container" 
      @click="handleGallaryClick"
    >
      <div class="swiper-wrapper">
        <swiper :options="swiperOption" >
          <swiper-slide 
            v-for="(item, index) of gallaryImgs"
            :key="index"
          >
            <img class="swiper-img" :src="item" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGallery',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      isShowSwpier: false,
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer:true,
        observeParents:true,
      }
    }
  },
  methods: {
    handleGallaryClick () {
      //this.isShowSwpier = true
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallery >>> .swiper-pagination
    color: #fff
  .gallery
    .gallery-container
      position: fixed
      top: 0
      left: 0
      right: 0
      height: 0
      padding-bottom: 55%
      .gallery-img
        width: 100%
      .gallery-info
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .76rem
        display: flex
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5))
        .gallery-text
          flex: 1
          padding-left: .2rem
          line-height: .76rem
          font-size: .32rem
          color: #fff
        .gallery-count
          margin-top: .2rem
          margin-right: .1rem
          width: 1rem
          height: .44rem
          color: #fff
          text-align: center
          border-radius: .4rem
          background: rgba(0, 0, 0, .7)
    .swiper-container
      background: #000
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: 3
      display: flex
      flex-direction: column
      justify-content: center
      .swiper-wrapper
        width: 100%
        height: 0
        padding-bottom: 100%
        .swiper-img
          width: 100%

</style>
