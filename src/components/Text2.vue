<template>
  <div>
    <p>{{getEventById(3)}} </p>
    <h2>{{getTodo}} </h2>
    <div>
        <button @click="minus">minus</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name : 'Text2',
    methods: {
        minus() {
            this.$store.dispatch('actionMinusCount')
        }
    },
    computed : {
      ...mapGetters(['getEventById']),
      getTodo(){
        return this.$store.getters.getsTodo
      }
    }
};
</script>

<style>
</style>