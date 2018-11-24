<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities='hotCities' :cities='cities' :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '@/views/city/components/CityHeader'
import CitySearch from '@/views/city/components/CitySearch'
import CityList from '@/views/city/components/CityList'
import CityAlphabet from '@/views/city/components/CityAlphabet'
import Axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  mounted () {
    this.getCityData()
  },
  methods: {
    getCityData () {
      Axios.get('/api/city.json')
        .then((res) => {
          this.setCityData(res)
        })
        .catch(e => {
          console.log(e)
        })
    },
    setCityData (res) {
      let cityData = res.data.body
      this.hotCities = cityData.hotCities
      this.cities = cityData.cities
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>
