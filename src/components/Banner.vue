<template>
  <section class="bg-gray-100 flex flex-col-reverse md:flex-row">
    <div class="py-16 md:max-w-sm md:mt-32">
      <h1 class="text-4xl text-center md:text-left">Next generation digital banking</h1>
      <p class="mt-3 text-center text-gray-500 md:text-left">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
      <!-- <button class="block mt-6 mx-auto px-6 py-2 text-xs font-medium rounded-full bg-black text-white focus:outline-none md:mx-0">
        Request Invite
      </button> -->
      <Btn class="mt-6 mx-auto md:mx-0"/>
    </div>
    <div class="bg-cover bg-center md:bg-left md:w-1/2" style="background-image: url('/images/bg-intro-mobile.svg');">
      <img class="-mt-16 md:mt-16 md:ml-16" src="/images/image-mockups.png" alt="mockup">
    </div>
  </section>
</template>

<script>
import Btn from './Btn'
export default {
  components: {
    Btn
  }
}
</script>

<style>

</style>