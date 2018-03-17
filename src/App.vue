<template>
  <div id="app">
    <div class="tabBar">
      <div class="container">
        <md-tabs md-sync-route>
          <md-tab id="tab-home" md-label="注册猪" to="/"></md-tab>
          <md-tab id="tab-pages" md-label="加工猪" to="/slicepig"></md-tab>
          <md-tab id="tab-posts" md-label="溯源" to="/search"></md-tab>
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
    background-color: white;
    margin-bottom: 20px;
  }
</style>
