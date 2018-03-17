<template>
  <div class="addPigForm">
    <div style="width: 50%">
      <md-field>
        <label>猪ID</label>
        <md-input v-model="pigId" disabled></md-input>
      </md-field>
      <md-field>
        <label>饲养场</label>
        <md-input v-model="farm"></md-input>
      </md-field>
      <md-button class="md-raised md-primary">提交</md-button>
    </div>
    <div class="pigList">
      <li v-for="pig in pigList">
        <md-card>
          <md-card-content>
            <p>猪ID：{{pig.assetId}}</p>
            <p>养殖场：{{pig.farm}}</p>
          </md-card-content>
        </md-card>
      </li>
    </div>
  </div>
</template>

<style>
  .addPigForm {
    display: flex;
    flex-direction: column;
  }

  .pigList{

  }

  .pigList li {
    display: inline-flex;
    width: 25%;
    list-style-type: none;
  }

  .pigList li:not(:last-child) {
    margin-right: 5px;
  }

  button {
    width: 160px;
  }
</style>

<script>
  import axios from 'axios';
  import {uuid}  from 'vue-uuid'

  export default {
    name: 'TextFields',
    data: () => ({
      pigList:[],
      pigId: uuid.v1(),
      farm: '海南农场'
    }),
    mounted: function () {
      axios.get("http://10.30.92.108:3000/api/Pig").then((response) => {
        this.pigList = response.data;
      }).catch(e => {
        console.log(e)
      })
    }
  }
</script>
