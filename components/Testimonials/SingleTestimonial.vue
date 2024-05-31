<template>
  <div class="w-full">
    <div
      class="wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
      data-wow-delay=".1s"
    >
      <div class="mb-5 flex items-center space-x-1">
        <span
          v-for="rating in testimonial?.star"
          :key="rating"
          class="text-yellow"
        >
          <StartIcon />
        </span>
      </div>
      <p
        class="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white"
      >
        “{{ testimonial?.content }}
      </p>
      <div class="flex items-center">
        <div
          class="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full"
        >
          <img
            :src="testimonial?.image"
            :alt="testimonial?.name"
            class="w-full"
          />
        </div>
        <div class="w-full">
          <h3
            class="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg"
          >
            {{ testimonial?.name }}
          </h3>
          <p class="text-sm text-body-color">{{ testimonial?.designation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { Testimonial } from "@/types/testimonial";

const props = defineProps({
  testimonial: {
    type: Object,
    default: () => {},
  },
});
</script>

<style>
</style>
