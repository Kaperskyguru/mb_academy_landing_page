<script lang="ts">
export default {
  name: 'HeroSection'
}
</script>

<template>
  <section class="py-10 mb-52">
    <ul class="text-red-500 font-bold py-4 list-disc pl-10 lg:pl-4">
      <li>50% OFF LAUNCH SALE LIMITED TIME</li>
    </ul>

    <div class="flex flex-col lg:flex-row w-full items-center gap-5">
      <div class="flex flex-col items-center jusify-center lg:justify-start lg:items-baseline">
        <div class="flex w-4/5 flex-col items-center jusify-center">
          <h1 class="lg:text-6xl text-2xl font-bold">Become A Great Backend Engineer</h1>
          <p class="lg:text-2xl py-5">
            Our comprehensive backend engineeing bootcamp will equip you with the skills to take
            your backend engineeing career to the next level.
          </p>
        </div>
        <div class="inline gap-3 flex py-5">
          <a
            href="#pricing"
            class="lg:px-20 px-6 rounded-xl py-3 lg:py-6 font-semibold bg-[#242099] text-white inline"
          >
            Enroll Now
          </a>

          <a
            style="display: flex; justify-content: center; align-items: center"
            target="_blank"
            href="https://newsletter.masteringbackend.com/p/becoming-a-great-backend-engineer"
            class="rounded-xl font-semibold border-[#242099] border text-[#242099] px-5"
          >
            Learn more about GBE
          </a>
        </div>
      </div>
      <div class="w-full border-4 bg-[#242299] shadow-lg rounded-3xl p-1 border-[#242299]">
        <img
          alt="Become a great backend engineer"
          class="w-full rounded-3xl"
          src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/c344877a-7be7-470e-83f4-fa5180741432/becoming_a_great_backend_engineer.png?t=1706354101"
        />
      </div>
    </div>
  </section>
</template>