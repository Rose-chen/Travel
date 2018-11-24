<template>
  <div id="home">
  	<home-header :city='city'></home-header>
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
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeLocation from './components/HomeLocation'
import HomeHot from './components/HomeHot'
import HomeRecommond from './components/HomeRecommond'
import HomeWeekend from './components/HomeWeekend'
export default {
  name: 'Home',
  components: {
  	HomeHeader,
  	HomeSwiper,
  	HomeLocation,
  	HomeIcons,
  	HomeHot,
  	HomeRecommond,
  	HomeWeekend
  },
  data () {
  	return {
  		city: '武汉',
  		swiperList: [],
  		iconList: [],
  		hotList: [],
  		recommondList: [],
  		weekendList: []
  	}
  },
  methods: {
  	getHomeData () {
  		Axios.get('api/home.json')
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
  } 
}
</script>
