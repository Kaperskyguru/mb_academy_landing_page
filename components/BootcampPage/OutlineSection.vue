<script lang="ts">
export default {
  name: 'HeroSection'
}
</script>

<template>
  <section class="mb-52 flex flex-col w-full items-center gap-5 mt-5">
    <div class="flex flex-col items-center jusify-center">
      <div class="flex flex-col items-center jusify-center">
        <h2 class="lg:text-6xl text-2xl text-center font-bold">
          What's Inside The Backend Bootcamp?
        </h2>
        <p class="lg:text-2xl py-5 text-center">
          Watch the video below to see the incredible value this cutting-edge training has to offer.
        </p>
      </div>
    </div>
    <div
      class="lg:w-5/6 h-[670px] w-full border-4 bg-[#242299] shadow-lg rounded-3xl border-[#242299]"
    >
      <iframe
        width="100%"
        class="rounded-3xl"
        height="100%"
        src="https://www.youtube.com/embed/2kMSR-4SySs?si=XKwdWViKvR-GDO2S"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>