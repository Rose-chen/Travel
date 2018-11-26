<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-gallery 
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </detail-gallery>
    <detail-list></detail-list>
    {{this.$route.params.id}}
  </div>
</template>

<script>
import DetailHeader from '@/views/detail/components/DetailHeader'
import DetailGallery from '@/views/detail/components/DetailGallery'
import DetailList from '@/views/detail/components/DetailList'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailGallery,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  mounted () {
    this.getDetailData()
  },
  methods: {
    getDetailData () {
      axios.get('/api/detail.json')
        .then(res => {
          this.setDetailData(res)}
          )
        .catch(e => {
          console.log(e)
        })
    },
    setDetailData (res) {
      if(res.data && res.data.ret) {
        const detailData = res.data.data
        this.sightName = detailData.sightName
        this.bannerImg = detailData.bannerImg
        this.gallaryImgs = detailData.gallaryImgs
      }
    }
  }
}
</script>
