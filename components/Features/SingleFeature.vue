<template>
  <div class="w-full">
    <div class="wow fadeInUp" data-wow-delay=".15s">
      <div
        class="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
      >
        <component :is="feature.icon" />
        <!-- <Feature1 /> -->
      </div>
      <h3
        class="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
      >
        {{ feature.title }}
      </h3>
      <p
        class="pr-[10px] text-base font-medium leading-relaxed text-body-color"
      >
        {{ feature.paragraph }}
      </p>
    </div>
  </div>
</template>

<script setup>
// import Feature from "@/types/feature";
const props = defineProps({
  feature: {
    type: Object,
    default: () => {},
  },
});
</script>

<style>
</style>
