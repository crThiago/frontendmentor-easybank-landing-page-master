<template>
  <div id="app">
    <Navbar/>
    <!-- <Banner/> -->
    <Services/>
    <Articles/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Banner from './components/Banner'
import Services from './components/Services'
import Articles from './components/Articles'

export default {
  name: 'app',
  components: {
    Navbar,
    Services,
    Articles
  },
}
</script>

<style src="./assets/tailwind.css"></style>
