<template>
  <div id="app">
    <Navbar/>
    <!-- <Banner/> -->
    <Services/>
    <Articles/>
    <CFooter/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Banner from './components/Banner'
import Services from './components/Services'
import Articles from './components/Articles'
import CFooter from './components/CFooter'

export default {
  name: 'app',
  components: {
    Navbar,
    Services,
    Articles,
    CFooter,
  },
}
</script>

<style src="./assets/tailwind.css"></style>
