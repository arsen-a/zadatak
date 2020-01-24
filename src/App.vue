<template>
  <div class="container-fluid m-0 p-0">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>

</style>
