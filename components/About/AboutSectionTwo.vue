<template>
  <section class="py-16 md:py-20 lg:py-28">
    <div class="container">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="w-full px-4 lg:w-1/2">
          <div
            class="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
            data-wow-delay=".15s"
          >
            <img
              src="/images/about/about-image-2.svg"
              alt="about image"
              class="drop-shadow-three dark:hidden dark:drop-shadow-none"
            />
            <img
              src="/images/about/about-image-2-dark.svg"
              alt="about image"
              class="drop-shadow-three hidden dark:block dark:drop-shadow-none"
            />
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2">
          <div class="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
            <div class="mb-9">
              <h3
                class="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                Bug free code
              </h3>
              <p
                class="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="mb-9">
              <h3
                class="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                Premier support
              </h3>
              <p
                class="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div class="mb-1">
              <h3
                class="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                Next.js
              </h3>
              <p
                class="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"
              >
                Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                consectetur adipiscing elit setim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(["bootcamp"]);
</script>

<style>
</style>

