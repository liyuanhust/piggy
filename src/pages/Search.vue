<template>
  <div>
    <div class="searchForm">
      <md-field>
        <label>溯源切片ID</label>
        <md-input v-model="meatId" type="text"></md-input>
      </md-field>
      <md-button v-on:click="goToSearch" class="md-raised md-primary">溯源</md-button>
    </div>
    <div style="display: flex; justify-content: space-between" >
      <meat-status style="width: 49%" v-if="meatInfo.assetId" :meat='meatInfo' :readOnly=true />
      <pig-status style="width: 49%" v-if="pigInfo.assetId" :pig='pigInfo' :readOnly=true />
    </div>

  </div>

</template>

<style>

  .header {
    display: flex;

  }

  .searchForm {
    width: 50%;
    padding-right: 10%;
  }

  .meatList li {
    margin-top: 8px;
    display: inline-flex;
    width: 24%;
    list-style-type: none;
  }

  .meatList li:not(:last-child) {
    margin-right: 1%;
  }

  button {
    width: 160px;
  }
</style>

<script>
  import axios from 'axios';
  import {uuid} from 'vue-uuid';
  import PigStatus from '../component/PigStatus'
  import MeatStatus from '../component/MeatStatus'

  const apiSlice = "http://10.30.92.108:3000/api/Slice";
  const apiPig = "http://10.30.92.108:3000/api/Pig";
  const apiMeat = "http://10.30.92.108:3000/api/Meat";

  export default {
    name: 'TextFields',
    components: {
      PigStatus,
      MeatStatus,
    },
    data: () => ({
      pigId: "",
      pigInfo: {},
      meatId: "",
      meatInfo: {},
      cutResult: [],
      meatList: []
    }),
    methods: {
      goToSearch() {
        axios.get(apiMeat + '/' + this.meatId).then((response) => {
          this.meatInfo = response.data;
          this.goToSearchPig(response.data.pig.split("#")[1])
        }).catch(e => {
          console.log(e)
        });
      },
      goToSearchPig(pigId) {
        axios.get(apiPig + '/' + pigId).then((response) => {
          this.pigInfo = response.data;

        }).catch(e => {
          console.log(e)
        });
      }
    },
    watch: {},
    mounted: function () {

    },
  }
</script>
