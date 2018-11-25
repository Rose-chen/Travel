<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-gallery></detail-gallery>
    <detail-list></detail-list>
    {{this.$route.params.id}}
  </div>
</template>

<script>
import DetailHeader from '@/views/detail/components/DetailHeader'
import DetailGallery from '@/views/detail/components/DetailGallery'
import DetailList from '@/views/detail/components/DetailList'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailGallery,
    DetailList
  }
}
</script>
