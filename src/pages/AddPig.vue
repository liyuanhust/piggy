<template>
  <div class="addPigForm">
    <md-field>
      <label>猪ID</label>
      <md-input v-model="pigId"></md-input>
    </md-field>
    <md-field>
      <label>饲养场</label>
      <md-input v-model="farm"></md-input>
    </md-field>
    <md-button class="md-raised md-primary">提交</md-button>
  </div>
</template>

<style>
  .addPigForm {
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
