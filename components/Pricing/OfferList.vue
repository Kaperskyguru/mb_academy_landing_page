<template>
  <div class="mb-3 flex items-center">
    <span
      class="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
    >
      {{ status === "active" ? checkIcon : crossIcon }}
    </span>
    <p class="m-0 text-base font-medium text-body-color">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps(["text", "status"]);
</script>

<style>
</style>

