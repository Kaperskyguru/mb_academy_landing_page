<script lang="ts">
export default {
  name: 'MeetInstructor'
}
</script>

<template>
  <section class="mb-52 flex flex-col items-center justify-center w-full gap-10">
    <h2 class="lg:text-6xl font-bold text-2xl">Meet Your Instructors</h2>
    <main
      class="lg:mx-20 lg:p-20 p-5 bg-white rounded-2xl border-2 border-gray-400 flex flex-col gap-10 items-center b"
    >
      <div class="flex flex-col justify-center items-center gap-1">
        <img
          alt="logo"
          class="w-20 lg:w-46 rounded-full"
          src="https://enterprisevue.dev/img/solomon-eseme-4ca96bc7-3024.png"
        />
        <p class="lg:text-3xl font-bold text-xl">Solomon Eseme</p>
        <p class="lg:text-xl">Founder, MasteringBackend</p>
      </div>

      <div class="text-center flex flex-col gap-2 lg:text-xl lg:px-20">
        <p>
          Solomon Eseme is an Great Backend Engineer with 5+ years of experience in developing
          scalable and innovative software. Beyond just writing code, I understand how important
          testing, logging, design systems, design patterns, and the principle of least privilege
          are to a system.
        </p>
        <p>
          I'm also the founder of multiple startups and the author of "Architecting Vue.js 3
          Enterprise-Ready Web Applications"
        </p>
      </div>

      <div class="w-full items-center flex flex-col justify-center">
        <button class="lg:px-10 px-6 rounded-xl py-3 lg:py-6 font-semibold bg-[#242099] text-white">
          Learn more about me
        </button>
      </div>
    </main>
  </section>
</template>