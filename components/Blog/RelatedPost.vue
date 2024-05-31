
<template>
  <div class="flex items-center lg:block xl:flex">
    <div class="mr-5 lg:mb-3 xl:mb-0">
      <div
        class="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]"
      >
        <img :src="image" :alt="title" />
      </div>
    </div>
    <div class="w-full">
      <h5>
        <nuxt-link
          :to="slug"
          class="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          {{ title }}
        </nuxt-link>
      </h5>
      <p class="text-xs font-medium text-body-color">{{ date }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(["image", "slug", "title", "date"]);
</script>

<style>
</style>