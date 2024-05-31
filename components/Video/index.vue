<template>
  <section class="relative z-10 py-16 md:py-20 lg:py-28">
    <div class="container">
      <SectionTitle
        title="We are here to help"
        paragraph="Finally, Backend Engineering bootcamps that shows you exactly how to level up your backend engineeing skills, step-by-step."
        center
        :show-list="true"
        mb="40px"
      />

      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div
            class="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
            data-wow-delay=".15s"
          >
            <div class="relative aspect-[77/40] items-center justify-center">
              <img src="/images/video/video.jpg" alt="video image" />
              <div
                class="absolute right-0 top-0 flex h-full w-full items-center justify-center"
              >
                <button
                  aria-label="video play button"
                  @click.prevent="isOpen = true"
                  class="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                >
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    class="fill-current"
                  >
                    <path
                      d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      /> -->

    <!-- <iframe
      width="100%"
      class="rounded-3xl"
      height="100%"
      src="https://www.youtube.com/embed/2kMSR-4SySs?si=XKwdWViKvR-GDO2S"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe> -->

    <div
      class="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"
    ></div>
  </section>
</template>

<script setup>
const isOpen = ref(false);
</script>

<style>
</style>

