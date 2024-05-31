<script lang="ts">
export default {
  name: 'LimitedSlot'
}
</script>
<template>
  <section
    id="pricing"
    class="mb-52 flex items-center justify-center flex-col gap-10 lg:p-10 rounded-2xl"
  >
    <!-- <div class="col-span-1 hidden lg:flex">
      <img alt="logo" class="lg:w-96 w-52" src="../assets/ball.svg" />
    </div> -->

    <div
      class="justify-center items-center md:w-2/3 w-full flex flex-col gap-5 p-5 lg:p-20 items-center bg-white rounded-xl border"
    >
      <div class="inline">
        <p class="bg-red-500 text-white lg:text-sm text-xs rounded-full p-3 lg:px-9 inline">
          LIMITED SLOTS AVAILABLE
        </p>
      </div>
      <p class="lg:text-6xl font-bold text-center">Get Started <span> Now</span></p>
      <p class="text-center text-gray-600">
        Join The <span class="text-black text-lg font-bold"> Backend Bootcamp</span> today to
        transform your career in the booming Backend industry. Claim your
        <span class="text-black text-lg font-bold">50% off </span>launch discount for
        <span class="text-black text-lg font-bold">30 days only</span>.
      </p>

      <p class="text-5xl relative lg:block flex my-3 lg:text-8xl font-extrabold">
        $500
        <span
          class="absolute -bottom-8 lg:bottom-0 text-gray-500 decoration-red-500 line-through text-4xl"
          >$1000</span
        >
      </p>
      <div class="flex flex-col gap-3">
        <h2 class="font-bold text-xl">This investment unlocks:</h2>
        <ul class="list-disc pl-3 flex flex-col gap-2 text-lg text-gray-700">
          <li>Lifetime access to the course content and materials.</li>
          <li>Regular course updates and new content.</li>
          <li>Exclusive access to a supportive online community.</li>
          <li>Learn from Unlimited courses with the MB Platform for 6 month.</li>
          <li>
            Practice backend by building real-world projects with MB Projects Pro for 6 month.
          </li>
          <li>Ace your backend interviews with BackendPrep Access for 6 month.</li>
        </ul>
      </div>
      <div class="w-full py-5 flex">
        <a
          href="https://backend.lemonsqueezy.com/buy/cc2d276d-7a63-4515-82ac-e9b78173920a?embed=1"
          class="lg:px-10 px-6 rounded-xl py-3 lg:py-5 flex items-center text-3xl justify-center font-semibold bg-[#242099] text-white w-full lemosqueezy-button"
        >
          Enroll Now
        </a>
      </div>
    </div>
  </section>
</template>