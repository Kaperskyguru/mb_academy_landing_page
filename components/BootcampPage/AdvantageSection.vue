<script lang="ts">
export default {
  name: 'AdvantageSection'
}
</script>


<template>
  <section class="mb-52 flex flex-col items-center my-20 lg:px-16 gap-20">
    <div class="w-full flex flex-col gap-6">
      <h2 class="font-bold text-2xl lg:text-6xl text-center">The Best Value on The Market</h2>
      <p class="lg:text-xl text-center">
        The cost of enrollment is a competitive value to a computer science degree or other
        bootcamps.
      </p>
    </div>

    <main class="flex lg:grid grid-cols-3 flex-col gap-10 items-center justify-center w-full">
      <div class="col-span-2 flex flex-col lg:grid grid-cols-2 gap-10 h-fit">
        <div
          class="col-span-1 flex flex-col gap-8 p-5 border border-black rounded-2xl bg-white py-10"
        >
          <div class="flex flex-col gap-5">
            <h3 class="font-semibold text-2xl">CS Degree</h3>

            <ul class="list-disc flex flex-col gap-3 pl-5">
              <li>Limited access to the course content and materials.</li>
              <li>Old curriculum on computer science.</li>
              <li>No dedicated supportive online community.</li>
              <li>No practical based learning</li>
              <li>No structured-based learning and roadmaps</li>
            </ul>

            <div class="flex gap-5 flex-col">
              <div class="border-b py-2">
                <p class="py-2 text-gray-600">Price</p>
                <p class="text-3xl">$70k-$150k</p>
              </div>

              <div class="border-b py-2">
                <p class="py-2 text-gray-600">Time Commitment</p>
                <p class="text-3xl">4+ Years</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-1 flex flex-col gap-8 p-5 border border-black rounded-2xl bg-white py-10"
        >
          <div class="flex flex-col gap-5">
            <h3 class="font-semibold text-2xl">Other Bootcamps</h3>

            <ul class="list-disc flex flex-col gap-3 pl-5">
              <li>Limited access to the course content and materials.</li>
              <li>No regular course updates and new content.</li>
              <li>Exclusive access to a supportive online community.</li>
              <li>Always theoretical-based learning</li>
            </ul>

            <div class="flex gap-5 flex-col">
              <div class="border-b py-2">
                <p class="py-2 text-gray-600">Price</p>
                <p class="text-3xl">$20k-$40k</p>
              </div>

              <div class="border-b py-2">
                <p class="py-2 text-gray-600">Time Commitment</p>
                <p class="text-3xl">6-12 Months</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 flex flex-col gap-8 p-5 border border-black rounded-2xl text-white py-10 bg-gradient-to-tr to-[#322EB0] from-[#8F03A1]"
      >
        <div class="flex flex-col gap-5">
          <h3 class="font-semibold text-2xl">Backend Bootcamp</h3>
          <ul class="list-disc flex flex-col gap-3 pl-5">
            <li>Lifetime access to the course content and materials.</li>
            <li>Regular course updates and new content.</li>
            <li>Exclusive access to a supportive online community.</li>
            <li>Regular course updates and new content.</li>
            <li>Exclusive access to a supportive online community.</li>
            <li>Regular course updates and new content.</li>
            <li>Free Unlimited access to a MB Platform for 6 month.</li>
            <li>Free Unlimited access to a MB Projects for 6 month.</li>
            <li>Free Unlimited access to a BackendPrep for 6 month.</li>
          </ul>
        </div>

        <div class="flex gap-5 flex-col">
          <div class="border-b py-2">
            <p class="py-2 text-gray-200">Price</p>
            <p class="text-3xl">$500-<span class="text-xl px-1 line-through">$1000</span></p>
          </div>

          <div class="border-b py-2">
            <p class="py-2 text-gray-200">Time Commitment</p>
            <p class="text-3xl">1-6 Months</p>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>