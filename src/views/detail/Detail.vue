<template>
  <div class="detail">
    <detail-header :sightName="sightName"></detail-header>
    <detail-banner 
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryLen="getGallaryLen"
      @show="handleGallaryShow"
    >
    </detail-banner>
    <fade-animation>
      <gallary 
      :gallaryImgs="gallaryImgs" 
      v-if="isShowSwpier"
      @close="handleGallaryClose"
    ></gallary>
    </fade-animation>
    <detail-list :categoryList="categoryList"></detail-list>
  </div>
</template>

<script>
import DetailHeader from '@/views/detail/components/DetailHeader'
import DetailBanner from '@/views/detail/components/DetailBanner'
import FadeAnimation from '@/components/FadeAnimation'
import Gallary from '@/components/Gallary'
import DetailList from '@/views/detail/components/DetailList'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    Gallary,
    DetailList,
    FadeAnimation
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      isShowSwpier: false
    }
  },
  mounted () {
    this.getDetailData()
  },
  computed: {
    getGallaryLen () {
      return this.gallaryImgs.length
    }
  },
  methods: {
    getDetailData () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.setDetailData)
    },
    setDetailData (res) {
      if(res.data && res.data.ret) {
        const detailData = res.data.data
        this.sightName = detailData.sightName
        this.bannerImg = detailData.bannerImg
        this.gallaryImgs = detailData.gallaryImgs
        this.categoryList = detailData.categoryList
      }
    },
    handleGallaryShow () {
      this.isShowSwpier = true
    },
    handleGallaryClose () {
      this.isShowSwpier = false
    }
  }
}
</script>
