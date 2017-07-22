<template>
  <div class='homeComponent'>
    Welcome to Dodd's Home!
    <el-button @click='buttonClick'>btn</el-button>
  </div>
</template>

<script>
  import * as api from './home.api'

  export default {
    name: 'home',
    methods: {
      buttonClick () {
        api.getUser().then((json) => alert(json))
      }
    }
  }

</script>

<style scoped>

</style>
