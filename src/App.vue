<template>
  <div id="app">
    <div class="tabBar">
      <div class="container" style="display: flex; align-items: center">
        <img src="./assets/pig.png" style="width: 50px;height: 50px;margin-right: 10px" alt="Avatar">
        <img src="./assets/logo.png" style="width: 150px;height: 30px;margin-right: 10px" alt="Avatar">
        <md-tabs class="md-primary" md-alignment="right"  md-sync-route>
          <md-tab id="tab-home" md-label="注册佩奇" to="/"></md-tab>
          <md-tab id="tab-pages" md-label="加工佩奇" to="/slicepig"></md-tab>
          <md-tab id="tab-posts" md-label="切片溯源" to="/search"></md-tab>
        </md-tabs>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .container {
    width: 70%;
    margin: 0 auto;
  }
  .tabBar {
    background-color: #448aff;
    margin-bottom: 20px;
  }

  .md-button-content {
    font-size: 16px !important;
  }
</style>
