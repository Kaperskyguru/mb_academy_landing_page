<template>
  <section id="about" class="">
    <div class="container">
      <div
        class="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] pt-5 md:pb-20 lg:pb-28"
      >
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="w-full px-4 lg:w-1/2">
            <SectionTitle
              :title="bonus?.title"
              :paragraph="bonus?.description"
              mb="10px"
            />

            <div
              class="text-primary text-xl font-semi-bold hovertext-primary/50 py-5 mb-12"
            >
              <a target="_blank" :href="bonus?.link"
                >Click here to learn more.</a
              >
            </div>

            <div
              class="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
              data-wow-delay=".15s"
            >
              <div class="mx-[-12px] flex flex-wrap">
                <div
                  v-for="(feature, i) in bonus?.features"
                  :key="i"
                  class="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2"
                >
                  <List :text="feature" />
                </div>
              </div>
            </div>
          </div>

          <div class="w-full px-4 lg:w-1/2">
            <div
              class="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
              data-wow-delay=".2s"
            >
              <img
                :src="bonus?.image"
                alt="about-image"
                class="drop-shadow-three shadow mx-auto max-w-full w-full dark:hidden dark:drop-shadow-none lg:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(["bonus"]);
</script>

<style>
</style>
