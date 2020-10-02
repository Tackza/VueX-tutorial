<template>
  <div>
    {{ $store.state.count }}
    <div>
        <button @click="minus">minus</button>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Text2',
    methods: {
        minus() {
            this.$store.dispatch('actionMinusCount')
        }
    },
};
</script>

<style>
</style>