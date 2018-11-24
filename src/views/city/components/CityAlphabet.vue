<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" @click="handleLetterClick">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    }
  }
} 
</script>

<style lang="stylus" scoped>
  @import '~styles/common.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.7rem
    right: 0
    bottom: 0
    width: .4rem
    z-index: 2 
    .item
      text-align: center
      line-height: .4rem
      color: $bgColor
</style>