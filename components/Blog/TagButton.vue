<template>
  <a
    :href="href"
    class="bg-gray-light mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
  >
    {{ text }}
  </a>
</template>

<script setup>
defineProps(["text", "href"]);
</script>

<style>
</style>