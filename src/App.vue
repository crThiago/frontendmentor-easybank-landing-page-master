<template>
  <div id="app">
    <Navbar/>
    <Banner/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Banner from './components/Banner'

export default {
  name: 'app',
  components: {
    Navbar,
    Banner
  },
}
</script>

<style src="./assets/tailwind.css"></style>
