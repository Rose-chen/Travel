<template>
  <header>
    <div class="header-left">
      <router-link to="/">
        <span class="iconfont icon-back"></span>
      </router-link>
    </div>
    城市选择
  </header>
</template>

<script>
export default {
  name: 'CityHeader'
} 
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  header
    line-height: .86rem
    background: $bgColor
    color: #fff
    font-size:.32rem
    text-align: center
    color: #fff
    position: relative
    z-index: 3
    .header-left
      position: absolute
      left: 0
      top: 0
      width: .64rem
      padding-left: .14rem
      box-sizing: border-box
      text-align: left
      .icon-back
        color: #fff
</style>