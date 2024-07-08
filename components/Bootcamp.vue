

<template>
  <div
    class="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
    data-wow-delay=".1s"
  >
    <div class="relative block w-full">
      <div
        class="wow fadeInUp relative lg:mr-0 max-w-[500px] h-auto max-h-auto"
        data-wow-delay=".2s"
      >
        <span
          v-if="!bootcamp?.isLive"
          class="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white"
        >
          {{ "Closed" }}
        </span>
        <img
          :src="bootcamp?.image ?? '/images/blog/blog-03.jpg'"
          alt="about-image"
          class="drop-shadow-three max-w-full w-full dark:hidden dark:drop-shadow-none lg:mr-0"
        />
      </div>
    </div>
    <div
      class="p-6 sm:p-8 md:px-6 md:py-8 w-full lg:p-8 xl:px-5 xl:py-8 2xl:p-8"
    >
      <h3>
        <div
          :to="bootcamp?.slug"
          class="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
        >
          {{ bootcamp?.title }}
        </div>
      </h3>
      <p
        class="mb-4 pb-4 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
        :class="{
          'border-b border-body-color border-opacity-10': !bootcamp?.isLive,
        }"
      >
        {{ bootcamp?.description }}
      </p>

      <div
        v-if="bootcamp?.isLive"
        class="w-full border-b border-body-color border-opacity-10 pb-5"
      >
        <nuxt-link
          :to="bootcamp?.slug"
          class="shadow-submit block text-center dark:shadow-submit-dark w-full uppercase rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
        >
          Enrol Now
        </nuxt-link>
      </div>

      <div
        class="wow fadeInUp my-5 max-w-[570px] lg:mb-0"
        data-wow-delay=".15s"
      >
        <div class="mx-[-12px] flex flex-wrap">
          <div
            v-for="(feature, i) in bootcamp?.features"
            :key="i"
            class="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2"
          >
            <List :text="feature" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["bootcamp"]);
</script>

<style>
</style>
