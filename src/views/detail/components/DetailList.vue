<template>
  <div class="list">
    <div class="listItem" v-for="(item, index) of categoryList" :key="index">
      <div class="itemText">
        <span class="iconfont icon-search">&#xe615;</span>{{item.title}} 
      </div> 
      <div class="childrenList" v-if="item.children">
        <detail-list v-for="(item, index) of categoryList" :categoryList="item.children" :key="index"></detail-list>
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
  .list
    .listItem
      line-height: .66rem
      .itemText
        padding-left: .3rem
        line-height: .66rem
        border-bottom: 1px solid #ccc
      .childrenList
          padding-left: .3rem
</style>
