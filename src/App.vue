<template>
  <div id="app">
      <mt-header fixed title="黑马程序猿.vue项目"></mt-header>
      <router-view></router-view>

      <nav class="mui-bar mui-bar-tab">
          <a class="mui-tab-item mui-active" href="/#/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </a>
          <a class="mui-tab-item" href="/#/member">
            <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">消息</span>
          </a>
          <a class="mui-tab-item" href="/#/shopCar">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">通讯录</span>
          </a>
          <a class="mui-tab-item" href="/#/search">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">设置</span>
          </a>
        </nav>
   
  </div>
</template>

<script>
  import Vue from 'vue'

  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);

 
 export default {
  name: 'App',
 
}

</script>

<style>
  #app {
    padding: 40px 50px 0;
  }

</style>
