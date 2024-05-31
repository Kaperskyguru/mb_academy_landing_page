

<template>
  <section
    id="blog"
    class="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
  >
    <div class="container">
      <SectionTitle
        title="Get Inspired"
        paragraph="Take your future into your own hands and discover your potential."
        center
      />

      <div
        class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"
      >
        <div v-for="blog in blogData" :key="blog.id" class="w-full">
          <SingleBlog :blog="blog" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import blogData from "./blogData";
</script>

<style>
</style>