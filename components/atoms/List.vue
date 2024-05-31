<template>
  <p class="mb-5 flex items-center text-lg font-medium text-body-color">
    <span
      class="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
    >
      <CheckIcon />
    </span>
    {{ text }}
  </p>
</template>

<script setup>
const props = defineProps(["text"]);
</script>

<style>
</style>