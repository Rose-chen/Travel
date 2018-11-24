<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <div class="content">
        <div class="search-item" 
          v-for="item in list" 
          @click="handelClick(item.name)"
        >{{item.name}}</div>
        <div class="search-item" v-show="!this.list.length">没有匹配的选项</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: []
    }
  },
  watch: {
    keyword () {
      this.list = []
      if(!this.keyword) {
        return false
      }
      for(let i in this.cities) {
        let city = this.cities[i]
        city.forEach((value) => {
          if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
            this.list.push(value)
          }
        })
      }
      return this.list
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  methods: {
    handelClick () {

    }
  }
}  
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  .search
    height: .84rem
    padding: .1rem .14rem
    background: $bgColor
    box-sizing: border-box
    position: relative
    z-index: 3
    .search-input
      background: #fff
      width: 100%
      box-sizing: border-box
      border-radius: 0.1rem
      color: #666
      line-height: .64rem
      font-size: .28rem
      padding: 0 .1rem
      text-align: center
  .search-content
    position: absolute
    z-index: 4
    top: 1.7rem
    left: 0
    bottom: 0
    right: 0
    background: #fff
    .content
      .search-item
        box-sizing: border-box
        width: 100%
        line-height: .76rem
        border-bottom: 1px solid #eee
        padding-left: .2rem

</style>