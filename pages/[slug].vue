<script setup>
</script>
<template>
  <main class="bg-gray-100">
    <section class="container mx-auto w-full lg:px-16 py-10 px-5">
      <header class="pb-5 w-full">
        <a href="https://masteringbackend.com?utm_source=academy">
          <img alt="logo" src="~/assets/logo.svg" />
        </a>
      </header>
      <div class="py-6">
        <hero-section />

        <count-down />
        <first-section />

        <!-- <become-section /> -->
        <WhatYouLearn />
        <limited-slot />
        <learn-section />
        <certificate-secttion />
        <limited-slot />

        <outline-section />

        <advantage-section />

        <bonus-section />
        <testimonials-section />
        <meet-instructor />
        <faq-section />
        <count-down />
      </div>
      <footer-section />
    </section>
  </main>
</template>




<style scoped></style>
