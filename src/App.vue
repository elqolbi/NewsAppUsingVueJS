<template>
  <div class="cointainer" id="app">
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <router-view v-bind:source="source"></router-view>
  </div>
</template>

<script>
import SourceSelection from './components/SourceSelection'

export default {
  name: 'app',
  components: {
    SourceSelection
  },
  data () {
    return {
      source: ''
    }
  },
  methods: {
    sourceChanged: function (source) {
      this.source = source
    }
  }
}
</script>

<style>
#app {
  padding: 20px;
}
</style>