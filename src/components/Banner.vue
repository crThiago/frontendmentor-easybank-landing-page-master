<template>
  <section class="bg-image bg-gray-100">
    <div class="container flex flex-col-reverse md:flex-row md:py-32">
      <div class="mx-5 pt-4 pb-16 md:max-w-sm md:mt-32 md:mx-0">
        <h1 class="text-3xl text-center leading-snug md:text-5xl md:text-left">Next generation digital banking</h1>
        <p class="mt-3 text-sm text-center text-gray-500 md:text-left">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <Btn class="block mt-6 mx-auto md:mx-0"/>
      </div>
      <div class="md:max-w-sm lg:absolute lg:max-w-none lg:w-auto lg:right-0 lg:-mt-24 lg:-mr-32">
        <img class="-mt-16 md:mt-10 lg:-mt-16" src="/images/image-mockups.png" alt="mockup">
      </div>
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
.bg-image {
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/images/bg-intro-mobile.svg');
}

@media (min-width: 767px) {
  .bg-image {
    background-size: auto;
    background-position: 42vw -16vh;
    background-image: url('/images/bg-intro-desktop.svg');
  }
}
</style>