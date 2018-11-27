<template>
  <div class="header">
    <div class="header-left">
  	  <span class="iconfont icon-back">&#xe60e;</span>
  	</div>
  	<div class="header-input">
  	  <span class="iconfont icon-search">&#xe615;</span>输入城市/景点/游玩主题
  	</div>
  	<div class="header-right">
  	  <router-link to="/city" class="city">{{this.currentCity}}
  	    <span class="iconfont icon-arrow">&#xe6aa;</span>
  	  </router-link>
  	</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  .header
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    font-size:.28rem
    display: flex
    .header-left
      width: .64rem
      padding-left: .14rem
      box-sizing: border-box
      .icon-back
        font-size: .36rem!important
    .header-input 
      flex: 1 
      margin: 0.12rem 0
      background: #fff
      border-radius: 0.1rem
      color: #ccc
      line-height: .62rem
      font-size: .28rem
      padding-left: .16rem
    .header-right
      min-width: 1rem
      padding: 0 .12rem
      text-align: center
      font-size: .28rem
      .city
        color: #fff
        .icon-arrow
          margin-left: -.06rem
</style>
