<template>
  <div id="app">
      <mt-header fixed title="黑马程序员.vue项目"></mt-header>

      <transition>
        <router-view></router-view>
      </transition>

      <nav class="mui-bar mui-bar-tab" >
          <router-link class="mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </router-link>
          <router-link class="mui-tab-item" to="/member">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
          </router-link>
          <router-link class="mui-tab-item" to="/shopCar">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>        
            <span class="mui-tab-label">购物车</span>
          </router-link>
          <router-link class="mui-tab-item" to="/search">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
          </router-link>
      </nav>   
  </div>
</template>

<script>
  import Vue from 'vue'

  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);

  import { Swipe, SwipeItem } from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

 
 export default {
  name: 'App',
 
}

</script>

<!-- 脚手架配置好了less但是需要先下载包,然后build/webpack.base.conf.js下添加less配置 -->
<style lang="less">  
  #app {
    padding: 40px 0 50px 0;
    overflow-x: hidden;
    
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

</style>
