<template>
  <div id="app">
    <Navbar/>
    <!-- <Banner/> -->
    <Services/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Banner from './components/Banner'
import Services from './components/Services'

export default {
  name: 'app',
  components: {
    Navbar,
    Services
  },
}
</script>

<style src="./assets/tailwind.css"></style>
