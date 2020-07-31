<template>
  <header class="fixed w-full px-4 py-4 flex items-center justify-between bg-white md:py-3">
      <img src="/images/logo.svg" alt="logo">
      <nav :class="isOpen ? 'block' : 'hidden'" class="absolute py-4 mt-64 text-lg rounded bg-white md:sticky md:flex md:w-auto md:mt-0 md:bg-transparent md:text-sm">
        <a class="block py-1 text-center text-gray-900 md:text-left md:pl-6 md:py-0 md:text-gray-600" href="#">Home</a>
        <a class="block py-1 text-center text-gray-900 md:text-left md:pl-6 md:py-0 md:text-gray-600" href="#">About</a>
        <a class="block py-1 text-center text-gray-900 md:text-left md:pl-6 md:py-0 md:text-gray-600" href="#">Contact</a>
        <a class="block py-1 text-center text-gray-900 md:text-left md:pl-6 md:py-0 md:text-gray-600" href="#">Blog</a>
        <a class="block py-1 text-center text-gray-900 md:text-left md:pl-6 md:py-0 md:text-gray-600" href="#">Careers</a>
      </nav>
      <svg v-show="!isOpen" @click="isOpen = !isOpen" class="block cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="11">
        <g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g>
      </svg>
      <svg v-show="isOpen" @click="isOpen = !isOpen" class="block cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="19">
        <g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g>
      </svg>
      <button class="hidden px-6 py-2 text-xs font-medium rounded-full bg-black text-white font-bolded focus:outline-none md:block">
        Request Invite
      </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style>

</style>