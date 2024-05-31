<script lang="ts">
export default {
  name: 'TestimonialSection'
}
</script>
<template>
  <section class="mb-52 flex flex-col py-20 gap-16 items-center">
    <div class="w-full flex flex-col gap-6">
      <h2 class="font-bold text-2xl lg:text-6xl text-center">Testimonials of past students</h2>
      <p class="lg:text-xl text-center">
        See how these graduates have transformed their careers in the Advanced Backend 1.0 industry
        with MasteringBackend Academy.
      </p>
    </div>
    <main class="lg:grid grid-cols-3 gap-6 flex flex-col">
      <div
        class="col-span-1 text-gray-500 bg-white rounded-2xl border border-gray-400 flex flex-col gap-3 p-4 lg:p-6"
      >
        <img alt="logo" class="w-14 lg:w-10" src="../assets/quote.svg" />
        <div class="flex flex-col lg:gap-8 gap-4">
          <p class="text-2xl lg:text-2xl">
            I strongly recommend exploring Mastering Backend as a resource for your personal and/or
            professional growth.
          </p>

          <span class="flex gap-2 items-center text-xl lg:text-xl">
            <img alt="logo" class="w-10 lg:w-16" src="/people/agoro.jpeg" />
            <span class="font-bold"
              >Agoro, Adegbenga. B, <span class="font-normal">CTO, Crenet</span></span
            >
          </span>
        </div>
      </div>
      <div
        class="col-span-1 text-gray-500 bg-white rounded-2xl border border-gray-400 flex flex-col gap-3 p-4 lg:p-6"
      >
        <img alt="logo" class="w-14 lg:w-10" src="../assets/quote.svg" />
        <div class="flex flex-col lg:gap-8 gap-4">
          <p class="text-2xl lg:text-2xl">
            The practical examples and hands-on exercises were particularly beneficial. They not
            only reinforced the theoretical concepts but also allowed me to apply them in real-world
            scenarios. The inclusion of best practices and common pitfalls added a practical
            dimension to the learning process.
          </p>

          <span class="flex gap-2 items-center text-xl lg:text-xl">
            <img alt="logo" class="w-10 lg:w-16 rounded-full" src="/people/daniel.webp" />
            <span class="font-bold"
              >Daniel Tinivella, <span class="font-normal">Software Engineer, Globant</span></span
            >
          </span>
        </div>
      </div>
      <div
        class="col-span-1 text-gray-500 bg-white rounded-2xl border border-gray-400 flex flex-col gap-3 p-4 lg:p-6"
      >
        <img alt="logo" class="w-14 lg:w-10" src="../assets/quote.svg" />
        <div class="flex flex-col lg:gap-8 gap-4">
          <p class="text-2xl lg:text-2xl">
            The bootcamp is an excellent resource for backend engineers. Your explanations of the
            basics are clear, making it easy for newcomers to grasp. I particularly enjoyed the task
            management application; it's a practical example that helps solidify the concepts.
          </p>

          <span class="flex gap-2 items-center text-xl lg:text-xl">
            <img alt="logo" class="w-10 lg:w-16 rounded-full" src="/people/ashan.jpeg" />
            <span class="font-bold"
              >Eshan Shafeeq,
              <span class="font-normal">Blockchain & Web3 Engineer, Cake Defi</span></span
            >
          </span>
        </div>
      </div>
      <div
        class="col-span-1 text-gray-500 bg-white rounded-2xl border border-gray-400 flex flex-col gap-3 p-4 lg:p-6"
      >
        <img alt="logo" class="w-14 lg:w-10" src="../assets/quote.svg" />
        <div class="flex flex-col lg:gap-8 gap-4">
          <p class="text-2xl lg:text-2xl">
            I particularly learned how to work with teams and collaboration with Github on project
            based level. It was really an awesome experience and I will highly recommend it to
            anyone.
          </p>

          <span class="flex gap-2 items-center text-xl lg:text-xl">
            <span class="font-bold"
              >Abideen Abdulazeez,
              <span class="font-normal">Backend Engineer, Freelancer</span></span
            >
          </span>
        </div>
      </div>
      <div
        class="col-span-1 text-gray-500 bg-white rounded-2xl border border-gray-400 flex flex-col gap-3 p-4 lg:p-6"
      >
        <img alt="logo" class="w-14 lg:w-10" src="../assets/quote.svg" />
        <div class="flex flex-col lg:gap-8 gap-4">
          <p class="text-2xl lg:text-2xl">
            I learned the deep concepts around databases for backend engineers that are not taught
            in courses. The bootcamp was highly impactful and help me land backend role with Refine
            Agency. I will highly recommend it to other backend engineers who wants to be great.
          </p>

          <span class="flex gap-2 items-center text-xl lg:text-xl">
            <span class="font-bold"
              >Oduwale Awwal,
              <span class="font-normal">Backend Developer, Refine Agency</span></span
            >
          </span>
        </div>
      </div>
      <div
        class="col-span-1 text-gray-500 bg-white rounded-2xl border border-gray-400 flex flex-col gap-3 p-4 lg:p-6"
      >
        <img alt="logo" class="w-14 lg:w-10" src="../assets/quote.svg" />
        <div class="flex flex-col lg:gap-8 gap-4">
          <p class="text-2xl lg:text-2xl">
            The bootcamp contributed immersively in my journey of transitioning from Resources
            Personnel to a Backend Engineer. I learned how to mitigating techniques and different
            backend technologies, team work and collaborating with team members efficiently.
          </p>

          <span class="flex gap-2 items-center text-xl lg:text-xl">
            <span class="font-bold"
              >Saheed Olayinka,
              <span class="font-normal">Resources Personnel, Elite page </span></span
            >
          </span>
        </div>
      </div>
    </main>
  </section>
</template>