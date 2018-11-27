<template>
  <div class="list">
    <div class="listItem" v-for="(item, index) of categoryList" :key="index">
      <div class="itemText">
        <span class="iconfont icon-ticket"></span>{{item.title}} 
      </div> 
      <div class="childrenList" v-if="item.children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>     
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  }
}
</script>

<style  lang="stylus" scoped>
  @import '~styles/common.styl'
  .list
    .listItem
      line-height: .66rem
      .itemText
        padding-left: .3rem
        line-height: .66rem
        border-bottom: 1px solid #ccc
        .icon-ticket
          margin-right: .06rem
          color: $bgColor
      .childrenList
          padding-left: .3rem
</style>
