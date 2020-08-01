<template>
  <div>
    <header class="fixed z-20 w-full px-4 py-5 bg-white md:py-0">
      <div class="container flex items-center justify-between">
        <img src="/images/logo.svg" alt="logo">
        <nav :class="isOpen ? 'block' : 'hidden'" class="absolute z-20 right-0 w-11/12 py-4 mr-5 mt-21 text-lg rounded bg-white md:sticky md:flex md:items-center md:w-auto md:mt-0 md:bg-transparent md:text-sm md:py-0">
          <a class="block py-2 box-contain text-center text-gray-900 border-lime-green border-solid md:flex md:items-center md:py-0  md:h-20 md:ml-6 md:hover:border-b-4 hover:font-semibold md:text-left md:text-gray-600" href="#">Home</a>
          <a class="block py-2 box-contain text-center text-gray-900 border-lime-green border-solid md:flex md:items-center md:py-0  md:h-20 md:ml-6 md:hover:border-b-4 hover:font-semibold md:text-left md:text-gray-600" href="#">About</a>
          <a class="block py-2 box-contain text-center text-gray-900 border-lime-green border-solid md:flex md:items-center md:py-0  md:h-20 md:ml-6 md:hover:border-b-4 hover:font-semibold md:text-left md:text-gray-600" href="#">Contact</a>
          <a class="block py-2 box-contain text-center text-gray-900 border-lime-green border-solid md:flex md:items-center md:py-0  md:h-20 md:ml-6 md:hover:border-b-4 hover:font-semibold md:text-left md:text-gray-600" href="#">Blog</a>
          <a class="block py-2 box-contain text-center text-gray-900 border-lime-green border-solid md:flex md:items-center md:py-0  md:h-20 md:ml-6 md:hover:border-b-4 hover:font-semibold md:text-left md:text-gray-600" href="#">Careers</a>
        </nav>
        <svg v-show="!isOpen" @click="isOpen = !isOpen" class="block cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="11">
          <g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g>
        </svg>
        <svg v-show="isOpen" @click="isOpen = !isOpen" class="block cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="19">
          <g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g>
        </svg>
        <Btn class="hidden md:block"></Btn>
      </div>

    </header>
    
    <div v-show="isOpen" @click="isOpen = false" class="absolute z-10 top-0 right-0 w-screen h-screen bg-black opacity-25"></div>
  </div>
</template>

<script>
import Btn from './Btn'

export default {
  components: {
    Btn
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style>

</style>