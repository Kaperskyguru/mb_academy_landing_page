<script>
export default {
  name: "learnSection",
};
</script>


<template>
  <section
    class="mb-52 py-10 flex flex-col gap-20 w-5/6 container mx-auto items-center w-full justify-center"
  >
    <div class="w-full flex flex-col gap-6 items-center">
      <h2 class="font-bold text-center text-2xl lg:text-6xl">
        Build real-world projects and <br />deploy to real users.
      </h2>
      <p class="lg:text-xl text-center">
        Backend engineering is the backbone of the tech industry. Building real
        world projects is the only way to master it. By completing this course,
        you'll be equipped to:
      </p>
    </div>

    <main class="flex gap-10 flex-col">
      <div class="flex flex-col md:flex-row items-center my-10 gap-10">
        <div
          class="flex flex-col lg:w-1/2 lg:py-20 gap-10 lg:w-3/4 w-full justify-start items-start"
        >
          <h3 class="font-bold text-xl lg:py-4 lg:text-5xl">
            Build a Content Automation App
          </h3>
          <p class="lg:text-lg text-start">
            We will be building
            <a class="text-red-600" href="https://techpad.ink">TechPad</a> -> An
            AI assistant head of content for busy founders. This product helps
            founders handle SEO, Content Marketing, and Publishing on autopilot.
          </p>
        </div>
        <div
          class="flex w-full border-4 border-[#242299] lg:w-2/4 rounded-xl justify-end"
        >
          <img
            alt="logo"
            class="w-full rounded-xl"
            src="~/assets/techpad.gif"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center my-10 gap-10">
        <div class="flex w-full border-4 border-[#242299] lg:w-2/4 rounded-xl">
          <img
            alt="Profaily demo"
            class="w-full rounded-xl"
            src="/images/profaily_demo.gif"
          />
        </div>
        <div
          class="flex flex-col lg:w-1/2 lg:py-20 gap-10 lg:w-3/4 w-full justify-start items-start"
        >
          <h3 class="font-bold text-xl lg:py-4 lg:text-5xl">
            Build a Social Media Management App
          </h3>
          <p class="lg:text-lg text-start">
            We will be building
            <a class="text-red-600" href="https://profaily.com">Profaily</a> ->
            A social profile and managment app for internet businesses owners
            and individuals . This product helps you sync and manage your social
            media profile in one place.
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center my-10 gap-10">
        <div
          class="flex flex-col lg:w-1/2 lg:py-20 gap-10 lg:w-3/4 w-full justify-start items-start"
        >
          <h3 class="font-bold text-xl lg:py-4 lg:text-5xl">
            Code 4 Mini Projects
          </h3>
          <p class="lg:text-lg text-start">
            To understand the concepts been taught in the bootcamp better, we
            will be using the project-based practical approach. This means that
            you will build lots of mini projects to help foster your
            understanding of different concepts. Here's a list of
            <a
              class="text-red-600"
              href="https://projects.masteringbackend.com?ref=academy&utm_source=academy"
            >
              Backend Projects</a
            >
            we can choose from.
          </p>
        </div>
        <div
          class="flex w-full border-4 border-[#242299] lg:w-2/4 rounded-xl justify-end"
        >
          <img
            alt="logo"
            class="w-full rounded-xl"
            src="~/assets/demo_projects.gif"
          />
        </div>
      </div>

      <div
        class="md:flex grid grid-cols-1 flex-col lg:flex-row items-center my-10 gap-10"
      >
        <div class="flex flex-col gap-5 w-full lg:w-2/3">
          <div class="flex justify-center gap-5 w-full">
            <div class="px-5 w-1/2 py-8 text-center border-2 border-gray-300">
              Great Backend Engineer
            </div>
          </div>
          <div class="flex gap-5 w-full">
            <div class="px-5 w-full text-center py-8 border-2 border-gray-300">
              Node.js
            </div>
            <div class="px-5 w-full text-center py-8 border-2 border-gray-300">
              PHP
            </div>
          </div>

          <div class="md:flex gap-5 w-full grid grid-cols-2">
            <div class="px-5 w-full py-8 text-center border-2 border-gray-300">
              Express
            </div>
            <div class="px-5 w-full py-8 text-center border-2 border-gray-300">
              Laravel
            </div>
            <div class="px-5 w-full py-8 text-center border-2 border-gray-300">
              Nuxt.js
            </div>
          </div>
          <div class="md:flex gap-5 grid grid-cols-2 w-full">
            <div class="px-5 w-full py-8 text-center border-2 border-gray-300">
              Postgres
            </div>
            <div class="px-5 w-full py-8 text-center border-2 border-gray-300">
              Docker
            </div>
            <div class="px-5 w-full py-8 text-center border-2 border-gray-300">
              Redis
            </div>
            <div class="px-5 w-full py-8 text-center border-2 border-gray-300">
              Kafka
            </div>
          </div>
          <div class="md:flex gap-5 w-full grid grid-cols-2">
            <div class="px-3 w-full py-8 text-center border-2 border-gray-300">
              Team work
            </div>
            <div class="px-3 w-full py-8 text-center border-2 border-gray-300">
              Trust
            </div>
            <div class="px-3 w-full py-8 text-center border-2 border-gray-300">
              Collaboration
            </div>
            <div class="px-3 w-full py-8 text-center border-2 border-gray-300">
              Projects
            </div>
            <div
              class="px-3 w-full py-8 text-sm text-center border-2 border-gray-300"
            >
              <p class="w-full">Communication</p>
            </div>
            <div
              class="px-5 w-full md:hidden block py-8 text-center border-2 border-gray-300"
            >
              Land Your Dream Backend Job
            </div>
          </div>
          <div class="md:flex justify-center hidden md:block gap-5 w-full">
            <div class="px-5 w-1/2 py-8 text-center border-2 border-gray-300">
              Land Your Dream Backend Job
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:w-1/2 lg:py-10 gap-10 w-full justify-start items-start"
        >
          <h3 class="font-bold text-xl lg:text-4xl">
            In-Demand Backend Programming Languages and Technologies
          </h3>
          <p class="lg:text-lg text-justify">
            JavaScript, Node.js, PHP, Express, Laravel, Nuxt.js, Postgres,
            Docker, Redis, Kafka
          </p>
        </div>
      </div>
    </main>
  </section>
</template>