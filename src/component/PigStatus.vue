<template>
  <md-card md-with-hover :class="pig.status != 'Permitted' && pig.status != 'Sliced' ? 'notPermitted' : 'permitted'">
    <md-card-content>
      <p>佩奇ID：{{pig.assetId}}</p>
      <p>养殖场：{{pig.farm}}</p>
      <md-field>
        <label>检疫员</label>
          <md-input v-if="!readOnly && pig.status != 'Permitted' && pig.status != 'Sliced'" v-model="checker" v-on:keyup.enter="addTask(pig.assetId, checker)"></md-input>
          <md-input v-else v-model="pig.checkedBy" disabled></md-input>
      </md-field>
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

  const api = "http://10.30.92.108:3000/api/CheckPig";

  export default {
    name: 'TextFields',
    props: {
      pig: {
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

    methods: {
      addTask(pigId, checker) {
        axios.post(api, {
          $class: "com.thoughtworks.CheckPig",
          pig: "resource:com.thoughtworks.Pig#"+pigId,
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
