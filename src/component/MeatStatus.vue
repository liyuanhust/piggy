<template>
  <md-card md-with-hover :class="meat.status != 'Permitted' ? 'notPermitted' : 'permitted'">
    <md-card-content>
      <p>切片ID：{{meat.assetId}}</p>
      <md-field>
        <label>检疫员</label>
        <md-input v-if="!readOnly && meat.status != 'Permitted'" v-model="checker" v-on:keyup.enter="addTask(meat.assetId, checker)"></md-input>
        <md-input v-else v-model="meat.checkedBy" disabled></md-input>
      </md-field>
      <md-card-actions>
        <qrcode-vue :value="meat.assetId" size="60" level="L"></qrcode-vue>
        <md-button  style="margin-left: 10px">打印</md-button>
      </md-card-actions>
    </md-card-content>
  </md-card>
</template>


<style>
  .notPermitted {
    background-color: #a6ccff !important;
  }

  .permitted {
    background-color: #95e2b2 !important;
  }
</style>


<script>
  import axios from 'axios';
  import QrcodeVue from 'qrcode.vue';

  const api = "http://10.30.92.108:3000/api/CheckMeat";

  export default {
    name: 'TextFields',
    props: {
      meat: {
        type: Object
      },
      readOnly: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      checker: ""
    }),
    components: {
      QrcodeVue
    },
    methods: {
      addTask(meatId, checker) {
        axios.post(api, {
          $class: "com.thoughtworks.CheckMeat",
          meat: "resource:com.thoughtworks.Meat#"+meatId,
          checkedBy: checker
        })
          .then(response => {
            this.success = true;
            this.$emit('changeView');
          })
          .catch(e => {
            console.log(e)
          })
      }
    }

  }
</script>
