<template>
  <div id="home">
  	<home-header></home-header>
  	<home-swiper :list='swiperList'></home-swiper>
  	<home-icons :list='iconList'></home-icons>
  	<home-location></home-location>
	  <home-hot :list='hotList'></home-hot>
  	<home-recommond :list='recommondList'></home-recommond>
  	<home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script>
import Axios from 'axios'
import { mapState } from 'vuex'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeLocation from './components/HomeLocation'
import HomeHot from './components/HomeHot'
import HomeRecommond from './components/HomeRecommond'
import HomeWeekend from './components/HomeWeekend'
export default {
  name: 'Home',
  components: {
  	HomeHeader: () => import('./components/HomeHeader'),
  	HomeSwiper,
  	HomeLocation,
  	HomeIcons,
  	HomeHot,
  	HomeRecommond,
  	HomeWeekend
  },
  data () {
  	return {
  		swiperList: [],
  		iconList: [],
  		hotList: [],
  		recommondList: [],
  		weekendList: [],
      lastCity: ''
  	}
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
  	getHomeData () {
  		Axios.get('/api/home.json', {
        params: {
          city: this.city
        }
      })
  		.then((res) => {
  			this.setHomeData(res)
  		})
  		.catch(e => {
  			console.log(e)
  		})
  	},
  	setHomeData (res) {
  		let homeData = res.data.body
  		this.swiperList = homeData.swiperList
  		this.iconList = homeData.iconList
  		this.hotList = homeData.hotList
  		this.recommondList = homeData.recommondList
  		this.weekendList = homeData.weekendList
  	}
  },
  mounted () {
  	this.getHomeData()
    this.lastCity = this.city
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getHomeData()
      this.lastCity = this.city
    }
  }
}
</script>
