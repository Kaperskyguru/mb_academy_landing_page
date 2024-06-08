

<template>
  <div
    class="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
    data-wow-delay=".1s"
  >
    <a :href="blog.link" class="relative block w-full">
      <span
        class="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white"
      >
        {{ blog?.tags[0] }}
      </span>
      <img :src="blog?.image" alt="image" class="w-full" />
    </a>
    <div class="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
      <h3>
        <a
          :href="blog.link"
          class="mb-4 block text-md font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
        >
          {{ blog?.title }}
        </a>
      </h3>
      <p
        class="pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
      >
        {{ blog?.paragraph }}
      </p>
      <!-- <div class="flex items-center">
        <div
          class="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5"
        >
          <div class="mr-4">
            <div class="relative h-10 w-10 overflow-hidden rounded-full">
              <img :src="blog?.author?.image" alt="author" />
            </div>
          </div>
          <div class="w-full">
            <h4 class="mb-1 text-sm font-medium text-dark dark:text-white">
              By {{ blog?.author?.name }}
            </h4>
            <p class="text-xs text-body-color">
              {{ blog?.author?.designation }}
            </p>
          </div>
        </div>
        <div class="inline-block">
          <h4 class="mb-1 text-sm font-medium text-dark dark:text-white">
            Date
          </h4>
          <p class="text-xs text-body-color">{{ blog?.publishDate }}</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
defineProps(["blog"]);
</script>

<style>
</style>
