# travel

**基于vue-cli + vuex + vue-router + axios + webpack + ES6 + stylus的移动端旅游项目**  

>**Home组件**: 显示头部，banner轮播，icons显示分类，热门景点列表，推荐景点列表等

**Home.vue**：首页父组件，使用axios技术请求接口数据(通过mock模拟接口数据)，并使用props向子组件传值

 - HomeHeader.vue :首页header子组件，由返回按钮，搜索输入框和城市显示组成，返回按钮使用了iconfont，点击城市可以进入城市列表，城市值存储在vuex的state中
 - HomeSwiper.vue :首页轮播图子组件，使用了vue-ansome-swiper插件
 - HomeIcons.vue :首页icons子组件，也使用了vue-ansome-swiper插件
 - HomeLocation.vue：定位子组件
 - HomeHot.vue：热门景点子组件
 - HomeRecommond.vue：猜你喜欢子组件
 - HomeWeekend.vue：周末游子组件


>**City组件(城市选择)**: 城市父组件，显示了当前城市，热门城市，以及按照字母分类的城市列表，在搜索框里输入城市名或者拼音，可以滚动到相应的位置，点击城市列表，跳转到首页，同时首页的城市名变化

**City.vue**：城市选择父组件，其他的为子组件，使用axios技术请求接口数据(通过mock模拟接口数据)，并使用props向子组件传值

 - CityHeader.vue :城市列表头部组件，可以返回上一页
 - CitySearch.vue :可以输入城市名字或者拼音搜索，点击搜索结果中的任意城市名，vuex中的城市值改变，home中显示的城市也发生变化
 - CityList.vue :显示了当前城市，热门城市，以及按照字母分类的城市列表，其中当前城市的值存储在vuex中，点击任意一个城市时，vuex中的城市值改变，home中显示的城市也发生变化，另外页面的布局使用了better-scroll插件
 - CityAlphabet.vue :点击列表右侧的字母，可以滚动到指定的字母位置，也使用了better-scroll插件


>**List组件**:

**List.vue**：旅游列表父组件

 
>**Detail组件**: 显示景点的名称，返回信息，景点的主图片，点击主图会显示景点所有图片的画廊组件(公用组件)，还显示了景点的门票等其他信息

**Detail.vue**：旅游详情父组件，其他的为子组件，Gallary为公用组件，使用axios技术请求接口数据(通过mock模拟接口数据)，并使用props向子组件传值

 - DetailHeader.vue :景点详情头部组件，可以返回上一页
 - DetailBanner.vue :景点的主图片，点击主图会显示景点所有图片的画廊组件(公用组件)
 - FadeAnimation.vue :公用的渐隐渐现动画组件
 - Gallary.vue :公用的画廊组件，此处引用
 - DetailList.vue :用到了组件的递归调用


 >**公用组件**:

 - Gallary.vue :公用的画廊组件，在详情页和评价页面会调用
 - FadeAnimation.vue :公用的渐隐渐现动画组件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
