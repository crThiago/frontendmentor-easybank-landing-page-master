<template>
  <section class="bg-gray-100">
    <div class="container pt-24 px-6">
      <header>
        <h3 class="text-center text-3xl text-dark-blue leading-tight md:text-4xl md:text-left">Latest Articles</h3>
      </header>
      <div class="flex flex-col flex-wrap justify-around mt-8 sm:flex-row">
        <div v-for="article in articles" :key="article.title" class="sm:w-1/2 sm:pr-6 lg:w-1/3 xl:w-1/4">
          <article  class="mt-6 pb-10 rounded overflow-hidden bg-white">
            <div class="relative pb-48">
              <img class="absolute h-full w-full object-cover" :src="`./images/${ article.image }`" alt="">
            </div>
            <div class="relative pt-6 px-8">
              <p class="mt-1 text-xs text-gray-600">By {{ article.author }}</p>
              <h4 class="mt-3 cursor-pointer text-base text-dark-blue leading-snug hover:text-lime-green">{{ article.title }}</h4>
              <p class="mt-2 text-sm leading-snug text-gray-600">{{ article.resume }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          image: "image-currency.jpg",
          author: "Claire Robinson",
          title: "Receive money in any currency with no fees",
          resume: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        },
        {
          image: "image-restaurant.jpg",
          author: "Wilson Hutton",
          title: "Treat yourself without worrying about money",
          resume: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        },
        {
          image: "image-plane.jpg",
          author: "Wilson Hutton",
          title: "Take your Easybank card wherever you go",
          resume: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        },
        {
          image: "image-confetti.jpg",
          author: "Claire Robinson",
          title: "Our invite-only Beta accounts are now live!",
          resume: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        }
      ]
    }
  }
}
</script>

<style>

</style>