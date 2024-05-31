<script lang="ts">
export default {
  name: 'CertificateSection'
}
</script>


<template>
  <section
    class="lg:p-20 mb-52 p-5 flex flex-col lg:flex-row gap-10 items-center bg-gradient-to-r to-[#322EB0] from-[#8F03A1] rounded-3xl"
  >
    <div class="flex flex-col gap-6">
      <h2 class="lg:text-5xl text-xl font-bold text-gray-200">
        Become a Certified Backend Engineer
      </h2>
      <p class="text-gray-300 lg:text-xl">
        <span class="text-white text-lg font-bold">
          Receive a personalized Masteringbackend Academy </span
        >developer certification upon completion.
      </p>
    </div>
    <div class="bg-white rounded-2xl p-5">
      <img alt="logo" class="w-full" src="../assets/block.png" />
    </div>
  </section>
</template>