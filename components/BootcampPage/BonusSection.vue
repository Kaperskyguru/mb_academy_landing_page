<script>
export default {
  name: "learnSection",
};
</script>


<template>
  <section
    class="mb-52 flex flex-col gap-5 w-5/6 container mx-auto items-center w-full justify-center"
  >
    <div class="w-full flex flex-col gap-6 items-center">
      <h2 class="font-bold text-2xl lg:text-6xl">
        Don't Miss These Bonuses At Checkout
      </h2>
      <p class="lg:text-xl text-center">
        Take Your Skills to the next level by claiming these special bonuses at
        checkout.
      </p>
    </div>

    <main class="flex gap-10 flex-col">
      <div class="flex flex-col md:flex-row items-center my-10 gap-10">
        <div
          class="flex flex-col lg:w-1/2 lg:py-20 gap-5 w-full justify-start items-start"
        >
          <h3 class="font-bold text-xl lg:text-5xl">
            Access MB Platform Premium Free for 6 Months
          </h3>
          <p class="lg:text-lg text-start text-gray-600">
            Learn backend engineering with 1000+ backend engineering courses,
            challenges, tasks, execises, and code playgrounds. Learn from
            expert-vetted courses and roadmaps, track your learnings and set
            schedules, and solve backend engineering tasks, exercises, and
            challenges.
          </p>
          <a
            href="https://app.masteringbackend.com?ref=academy&utm_source=academy"
            class="text-red-500"
            ><span>Click here to learn more.</span></a
          >
        </div>
        <div
          class="flex w-full border-4 border-[#242299] lg:w-2/4 rounded-xl justify-end"
        >
          <img
            alt="logo"
            class="w-full rounded-xl"
            src="~/assets/mb_platform.gif"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center my-10 gap-10">
        <div class="flex w-full border-4 lg:w-2/4 border-[#242299] rounded-xl">
          <img
            alt="logo"
            class="w-full rounded-xl"
            src="~/assets/demo_projects.gif"
          />
        </div>
        <div
          class="flex flex-col lg:w-1/2 lg:py-20 gap-10 w-full justify-start items-start"
        >
          <h3 class="font-bold text-xl lg:text-5xl">
            Build Unlimited Premium Projects
          </h3>
          <p class="lg:text-lg text-start">
            Build unlimited real world projects with backend Projectland. MB
            Projects enables Backend engineers through a learn-by-building
            model. Build real-world backend projects without coding the
            frontend. We will build the frontend and set up everything for you
            while you focus only on the backend APIs and databases.
          </p>
          <a
            href="https://projects.masteringbackend.com?ref=academy&utm_source=academy"
            class="text-red-500"
            ><span>Click here to learn more.</span></a
          >
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center my-10 gap-10">
        <div
          class="flex flex-col lg:w-1/2 lg:py-20 gap-10 w-full justify-start items-start"
        >
          <h3 class="font-bold text-xl lg:text-5xl">
            6 Months Free Access to BackendPrep
          </h3>
          <p class="lg:text-lg text-start">
            Ace your backend engineering interviews with BackendPrep. A backend
            interview preparation playground. Build real world backend projects,
            APIs, System Designs, Database Designs, backend algorithms and
            challenges.
          </p>
          <a
            href="https://backendprep.com?ref=academy&utm_source=academy"
            class="text-red-500"
            ><span>Click here to learn more.</span></a
          >
        </div>
        <div
          class="flex w-full border-4 lg:w-2/4 border-[#242299] rounded-xl justify-end"
        >
          <img
            alt="logo"
            class="w-full rounded-xl"
            src="~/assets/techpad.gif"
          />
        </div>
      </div>
    </main>
  </section>
</template>