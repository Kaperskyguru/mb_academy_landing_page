
<template>
  <section class="pt-16">
    <div class="container">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div
            class="wow fadeInUp bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
            data-wow-delay=".1s"
          >
            <div
              v-for="brand in brandsData"
              :key="brand.id"
              class="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"
            >
              <a
                :href="brand.href"
                target="_blank"
                rel="nofollow noreferrer"
                class="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
              >
                <img :src="brand.image" :alt="brand.name" class="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import brandsData from "./brandsData";
</script>

<style>
</style>
