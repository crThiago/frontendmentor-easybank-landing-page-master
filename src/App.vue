<template>
  <div id="app" class="w-full relative overflow-hidden">
    <Navbar/>
    <Banner/>
    <Services/>
    <Articles/>
    <CFooter/>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'
import Services from './components/Services.vue'
import Articles from './components/Articles.vue'
import CFooter from './components/CFooter.vue'
</script>

