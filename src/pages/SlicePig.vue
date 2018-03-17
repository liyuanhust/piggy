<template>
  <div class="chekcPigForm">
    <md-field>
      <label>猪IDw</label>
      <md-input v-model="pigId"></md-input>
    </md-field>
    <md-field>
      <label>饲养场w</label>
      <md-input v-model="farm"></md-input>
    </md-field>
    <md-button class="md-raised md-primary">提交2</md-button>
  </div>
</template>

<style>
  .chekcPigForm {
    width: 50%;
  }

  button {
    width: 160px;
  }
</style>

<script>
  export default {
    name: 'TextFields',
    data: () => ({
      pigId: '001',
      farm: '海南农场'
    })
  }
</script>
