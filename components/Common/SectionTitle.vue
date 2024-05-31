


<template>
  <div
    class="`wow fadeInUp w-full"
    :class="{ 'mx-auto text-center': center }"
    data-wow-delay=".1s"
    :style="[{ maxWidth: width, marginBottom: mb }]"
  >
    <h2
      class="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
    >
      {{ title }}
    </h2>

    <p class="text-base !leading-relaxed text-body-color md:text-lg">
      {{ paragraph }}
    </p>

    <ul
      class="pt-5 mt-5 md:grid grid-cols-2 gap-5 w-full flex px-0 text-base flex-col px-5 md:px-0 text-left !leading-relaxed text-body-color md:text-lg"
      style="list-style: disc"
      v-if="showList"
    >
      <li class="pb-2">
        Even if... you've struggled with Backend Engineering in the past
      </li>
      <li class="py-2">Even if... you're new to Backend Engineering</li>
      <li class="py-2">
        Even if... you're overwhelmed with no idea where to start
      </li>
      <li class="py-2">
        Even if... you've thought to yourself “Backend Engineering doesn't work
        for me”
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  paragraph: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "570px",
  },
  center: {
    type: Boolean,
    default: false,
  },
  mb: {
    type: String,
    default: "100px",
  },

  showList: {
    default: false,
    type: Boolean,
  },
});
</script>

<style>
</style>
