<template>
  <div id="app">
  <div class="tabBar">
    <div class="container">
      <md-tabs md-sync-route>
        <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
        <md-tab id="tab-pages" md-label="Pages" to="/components/tabs/pages"></md-tab>
        <md-tab id="tab-posts" md-label="Posts" to="/components/tabs/posts"></md-tab>
        <md-tab id="tab-settings" md-label="Settings" to="/components/tabs/settings"></md-tab>
        <md-tab id="tab-disabled" md-label="Disabled" md-disabled></md-tab>
      </md-tabs>
    </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
.container {
   width: 70%;
   margin: 0 auto;
 }

 .tabBar {
   background-color: white;
   margin-bottom: 20px;
 }
</style>