<template>
    <div class="mediaData">
        <div class="container">
            <table class="data">
                <tr>
                    <td class="tabTitle">Name</td>
                    <td class="spliter">:</td>
                    <td>{{ data.name }}</td>
                </tr>
                <tr>
                    <td class="tabTitle">Description</td>
                    <td class="spliter">:</td>
                    <td>{{ data.description }}</td>
                </tr>
                <tr>
                    <td class="tabTitle">URL</td>
                    <td class="spliter">:</td>
                    <td>{{ data.url }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mediaData',
  props: ['source'],
  data () {
    return {
      data: this.source
    }
  },
  methods: {
    updateSource: function (source) {
      this.data = source
    }
  },
  watch: {
    source: function (val) {
      this.updateSource(val)
    }
  }
}
</script>

<style scoped>
.tabTitle {
    font-weight: bold;
}
.spliter {
    padding: 0px 10px;
}
</style>