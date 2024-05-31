

<template>
  <section id="contact" class="overflow-hidden py-16 md:py-20 lg:py-28">
    <div class="container">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div
            class="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s"
          >
            <h2
              class="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl"
            >
              Need Help? Open a Ticket
            </h2>
            <p class="mb-12 text-base font-medium text-body-color">
              Our support team will get back to you ASAP via email.
            </p>

            <iframe
              data-tally-src="https://tally.so/embed/nPEzXe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="200"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Contact form
"
            ></iframe>
          </div>
        </div>
        <div class="w-full px-4 lg:w-5/12 xl:w-4/12">
          <NewsLatterBox />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  Tally.loadEmbeds();
});
</script>

<style>
</style>

