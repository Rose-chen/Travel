# travel

**基于vue-cli + vuex + axios + webpack + ES6 + stylus的移动端旅游项目**  

>**Home组件**:

**Home.vue**：为父组件，其他的为子组件，使用axios技术请求接口数据(通过mock模拟接口数据)，并使用props向子组件传值

 - HomeHeader.vue :首页header子组件，由返回按钮，搜索输入框和城市显示组成，返回按钮使用了iconfont，点击城市可以进入城市列表
 - HomeSwiper.vue :首页轮播图子组件，使用了vue-ansome-swiper插件
 - HomeIcons.vue :首页icons子组件，也使用了vue-ansome-swiper插件
 - HomeLocation.vue：定位子组件
 - HomeHot.vue：热门景点子组件
 - HomeRecommond.vue：猜你喜欢子组件
 - HomeWeekend.vue：周末游子组件


>**City组件(城市选择)**:

**City.vue**：城市选择父组件


>**List组件**:

**List.vue**：旅游列表父组件

 
>**Detail组件**:

**Detail.vue**：旅游详情父组件


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
