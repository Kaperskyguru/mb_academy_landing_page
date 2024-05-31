<template>
  <section id="features" class="py-16 md:py-20 lg:py-28">
    <div class="container">
      <SectionTitle
        title="Why learn with us ✨"
        paragraph="All our bootcamps includes unmatched benefits. Our trainings are structured to help you learn, get mentored, build portfolio and be on a fast track to a high paying tech job"
        center
      />

      <div
        class="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
      >
        <SingleFeature
          v-for="feature in featuresData"
          :key="feature.id"
          :feature="feature"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import featuresData from "./featuresData";
</script>

<style>
</style>

