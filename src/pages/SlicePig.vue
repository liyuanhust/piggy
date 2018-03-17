<template>
  <div>

  <div class="header">
    <div class="slicePigForm">
      <md-field>
        <label for="pig">需要处理的猪</label>
        <md-select v-model="pigId" name="pig" id="pig">
          <md-option v-for="pig in pigList" :value="pig.assetId">{{pig.assetId}}</md-option>
        </md-select>
      </md-field>
      <md-field>
        <label>需要生成几个标签</label>
        <md-input v-model="slidePiece" type="number"></md-input>
      </md-field>
      <md-button v-on:click="goToSlicePig" class="md-raised md-primary">处理</md-button>
    </div>
    <pig-status v-if="pigInfo.assetId" :pig='pigInfo'/>
  </div>
  <div class="meatList">
    <li v-for="meat in meatList">
      <meat-status :meat='meat' v-on:changeView="getAllMeat"/>
    </li>
  </div>
  </div>

</template>

<style>

  .header {
    display: flex;

  }

  .slicePigForm {
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
  import {uuid} from 'vue-uuid'
  import PigStatus from '../component/PigStatus'
  import MeatStatus from '../component/MeatStatus'

  const apiSlice = "http://10.30.92.108:3000/api/Slice";
  const apiPig = "http://10.30.92.108:3000/api/Pig";
  const apiMeat = "http://10.30.92.108:3000/api/Meat";

  export default {
    name: 'TextFields',
    components: {
      PigStatus,
      MeatStatus
    },
    data: () => ({
      pigId: "",
      pigInfo: {},
      pigList: [],
      slidePiece: 0,
      meatIds: [],
      cutResult:[],
      meatList:[]
    }),
    methods: {
      getAllPig() {
        axios.get(apiPig+'?filter='+encodeURIComponent(JSON.stringify({"where":{"or":[{"status":"Permitted"},{"status":"Sliced"}]}}))).then((response) => {
          this.pigList = response.data;
        }).catch(e => {
          console.log(e)
        })
      },
      getAllMeat() {
        axios.get(apiMeat+'?filter='+encodeURIComponent(JSON.stringify({"where":{"pig":"resource:com.thoughtworks.Pig#"+this.pigId}}))).then((response) => {
          this.meatList = response.data;
        }).catch(e => {
          console.log(e)
        })
      },
      goToSlicePig() {
          axios.post(apiSlice, {
            $class: "com.thoughtworks.Slice",
            pig: "resource:com.thoughtworks.Pig#"+this.pigId,
            meats: this.meatIds
          })
            .then(response => {
              this.getAllMeat();
              console.log('success')
            })
            .catch(e => {
              console.log(e)
            })
      }
    },
    watch: {
      pigId: function (id) {
        axios.get(apiPig+'/'+id).then((response) => {
          this.pigInfo = response.data;
          this.getAllMeat(this.pigId);
        }).catch(e => {
          console.log(e)
        });
      },
      slidePiece: function (piece) {
        var meatIds = new Array(parseInt(piece)).fill().map(()=>{return "resource:com.thoughtworks.Meat#"+uuid.v4()})
        this.meatIds = meatIds;
      }
    },
    mounted: function () {
      this.getAllPig();
    },
  }
</script>
