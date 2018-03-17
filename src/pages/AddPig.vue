<template>
  <div class="addPigForm">
    <div style="width: 50%">
      <md-field>
        <label>猪ID</label>
        <md-input v-model="pigId" ></md-input>
      </md-field>
      <md-field>
        <label>饲养场</label>
        <md-input v-model="farm"></md-input>
      </md-field>
      <md-button v-on:click="addNewPig" class="md-raised md-primary">提交</md-button>
      <md-dialog-alert :md-active.sync="success" md-content="成功创建新的猪" md-confirm-text="Cool!" />
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
    margin-top: 8px;
    display: inline-flex;
    width: 24%;
    list-style-type: none;
  }

  .pigList li:not(:last-child) {
    margin-right: 1%;
  }

  button {
    width: 160px;
  }
</style>

<script>
  import axios from 'axios';
  import {uuid} from 'vue-uuid'

  const api = "http://10.30.92.108:3000/api/Pig";

  export default {
    name: 'TextFields',
    data: () => ({
      pigList: [],
      success: false,
      pigId: uuid.v4(),
      farm: '海南农场'
    }),
    methods: {
      addNewPig() {
        axios.post(api, {
          $class: "com.thoughtworks.Pig",
          assetId: this.pigId,
          farm: this.farm,
          checkedBy: "None",
          status: "None"
        })
          .then(response => {
            this.success = true;
            this.pigId = uuid.v4();
            this.getAllPig();
          })
          .catch(e => {
            console.log(e)
          })
      },
      getAllPig() {
        axios.get(api).then((response) => {
          this.pigList = response.data;
        }).catch(e => {
          console.log(e)
        })
      }
    },
    mounted: function () {
      this.getAllPig();
    }
  }
</script>
