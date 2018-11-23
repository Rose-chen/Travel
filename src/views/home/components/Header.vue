/* eslint-disable */
<template>
  <div class="header">
    <div class="header-left">
	  <span class="iconfont icon-back">&#xe60e;</span>
	</div>
	<div class="header-input">
	  <span class="iconfont icon-search">&#xe615;</span>输入城市/景点/游玩主题
	</div>
	<div class="header-right">
	  <router-link to="/city" class="city">北京
	    <span class="iconfont icon-arrow">&#xe6aa;</span>
	  </router-link>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  .header
    line-height: .86rem
    background: #1badb6
    color: #fff
    font-size:.28rem
    display: flex
    .header-left
      width: .64rem
      padding-left: .14rem
      box-sizing: border-box
    .header-input 
      flex: 1 
      margin: 0.1rem 0
      background: #fff
      border-radius: 0.1rem
      color: #ccc
      line-height: .66rem
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
