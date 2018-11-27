<template>
  <div class="header">
    <router-link to="/" tag="div" class="header-back" v-show="isShowBack">
      <span class="iconfont icon-back">&#xe60e;</span>
    </router-link>
    <div class="header-container" 
      v-show="!isShowBack"
      :style="opacityStyle"
    >
      <router-link to="/" tag="div" class="header-left">
        <span class="iconfont icon-back">&#xe60e;</span>
      </router-link>
      <h2 class="header-title">
        {{sightName}}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      isShowBack: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    showHeader () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        this.opacityStyle.opacity = top/140
        this.isShowBack = false
      }else{
        this.isShowBack = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showHeader)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.showHeader)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  .header
    height: $headerHeight
    position: fixed
    z-index: 2
    .header-back
      position: absolute
      top: .08rem
      left: .08rem
      width: .7rem
      height: .7rem
      line-height: .7rem
      text-align: center
      border-radius: .35rem
      background: rgba(0, 0, 0, .7)
      .icon-back
        color: #fff
        font-weight: bold
    .header-container
      height: $headerHeight
      line-height: $headerHeight
      position: fixed
      top: 0
      left: 0
      right: 0
      background: $bgColor
      color: #fff
      font-size:.28rem
      .header-left
        position: absolute
        left: .14rem
        width: .5rem
        .icon-back
          font-size: .36rem!important
      .header-title
        margin: 0 1rem
        text-align:center
        font-size: .32rem
        color: #fff
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap 
</style>
