<template>
  <div class="list-wrapper" ref="wrapper">
    <div class="content">
      <div class="hotCityList">
        <h2 class="hotCitytitle border-topbottom">当前城市</h2>
        <div class="hotCityBox">
          <div class="cityWrapper">
            <div class="locCity">
              {{this.city}}
            </div>
          </div>
        </div>
      </div>
      <div class="hotCityList">
        <h2 class="hotCitytitle border-topbottom">热门城市</h2>
        <div class="hotCityBox">
          <div class="cityWrapper" 
            v-for="item in hotCities" 
            :key="item.id" 
            @click="handelClick(item.name)"
          >
            <div class="hotCityItem" >
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="itemList" 
        v-for="(city, key) in cities" 
        :key="key"
      >
        <h2 class="item-title" :ref="key">{{key}}</h2>
        <div class="item-content" 
          v-for="item in city" 
          :key="item.id" 
          @click="handelClick(item.name)" 
          :ref="item.spell"
        >
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if(this.letter){
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handelClick (city) {
      //this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}  
</script>

<style lang='stylus' scoped>
  @import '~styles/common.styl'
  .list-wrapper
    position: absolute
    top: 1.7rem
    left: 0
    right: 0
    bottom: 0
    color: $color
    z-index: 2
    .content
      .hotCityList
        width: 100%
        .border-topbottom
          &:before  
            border-color: #ccc
          &:after
            border-color: #ccc
        .hotCitytitle
          box-sizing: border-box
          width: 100%
          line-height: .76rem
          padding-left: .2rem
          background: #efefef
        .hotCityBox
          padding: .1rem .5rem .1rem .1rem
          display: flex
          flex-wrap: wrap
          .cityWrapper
            width: 33.3%
            padding: 0
            .locCity
              padding: .16rem 0
              margin: .1rem  
              border: 1px solid $bgColor
              text-align:center
              color: $bgColor
            .hotCityItem
              padding: .16rem 0
              margin: .1rem  
              border: 1px solid #ccc
              text-align:center
      .itemList
        width: 100% 
        .item-title
          box-sizing: border-box
          width: 100%
          line-height: .76rem
          border-bottom: 1px solid #eee
          padding-left: .2rem
          background: #efefef
        .item-content
          box-sizing: border-box
          width: 100%
          line-height: .76rem
          border-bottom: 1px solid #eee
          padding-left: .2rem
</style>