<template>
  <section class="pt-40 pb-20 bg-gray-200 lg:pb-32">
    <div class="container">
      <header class="mt-12 mx-6 text-center md:w-3/4 md:mx-auto lg:mx-0 lg:text-left lg:w-1/2">
        <h3 class="w-2/3 mx-auto text-3xl text-dark-blue leading-tight md:text-4xl md:w-auto">
          Why choose Easybank?
        </h3>
        <p class="mt-5 text-gray-500 text-sm md:mt-8 md:text-lg md:leading-snug">
          We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.
        </p>
      </header>
      <div class="flex flex-col flex-wrap mt-16 sm:flex-row">
        <article v-for="service in services" :key="service.title" class="mt-12 px-6 text-center sm:w-1/2 lg:w-1/4 lg:pl-0 lg:pr-16 lg:text-left">
          <img class="inline" :src="`./images/${service.image}`" alt="">
          <h4 class="mt-8 text-2xl text-dark-blue">
            {{ service.title }}
          </h4>
          <p class="mt-5 text-gray-500 text-sm lg:mt-6 lg:text-base">
            {{ service.describle }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    title: 'Online Banking',
    image: 'icon-online.svg',
    describle: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
  },
  {
    title: 'Simple Budgeting',
    image: 'icon-budgeting.svg',
    describle: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
  },
  {
    title: 'Fast Onboarding',
    image: 'icon-onboarding.svg',
    describle: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
  },
  {
    title: 'Open API',
    image: 'icon-api.svg',
    describle: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
  }
])
</script>