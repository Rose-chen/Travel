<template>
  <div id="home">
  	<home-header></home-header>
  	<home-swiper></home-swiper>
  	<home-icons></home-icons>
  	<home-location></home-location>
	<home-hot></home-hot>
  	<home-recommond></home-recommond>
  	<home-weekend></home-weekend>
  </div>
</template>

<script>
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
  }
}
</script>
