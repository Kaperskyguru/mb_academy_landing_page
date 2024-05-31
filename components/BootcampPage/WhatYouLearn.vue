<script lang="ts">
export default {
  name: "WhatYouLearn",
};
</script>

<template>
  <section class="mb-52 flex flex-col justify-center items-center">
    <div class="w-fullflex flex-col justify-center text-center pb-20">
      <h2 class="font-bold text-2xl lg:text-6xl pb-5">
        The Ultimate Solution to Master Backend Engineering Step-by-Step
      </h2>
      <p class="lg:text-xl">
        Backend developers are the backbone of the tech industry. By completing
        this course, you'll be equipped to:
      </p>
    </div>

    <div class="p-5 flex flex-col gap-8">
      <div
        class="lg:grid grid-cols-2 flex flex-col gap-4 w-full border-b-2 border-gray-400 py-5"
      >
        <div class="col-span-1 flex lg:flex-row flex-col gap-4 lg:gap-16">
          <h3 class="font-bold text-2xl">Module (6wks)</h3>
          <ul class="list-disc gap-5 flex flex-col text-start">
            <li class="text-start">
              We will look at overview and introducing the instructors, key
              takeways and what to expect in this bootcamp.
            </li>
            <li>
              We will explore the basics of backend engineering, deep dive into
              a specific backend engineering language and start building backend
              systems with frameworks.
            </li>
            <li>
              Lastly, we will introduce Git and Github for proper collaboration
              and working with team of any size.
            </li>
          </ul>
        </div>
        <div class="col-span-1 flex justify-center">
          <img alt="logo" class="lg:w-[500px] w-[500px]" src="~/assets/1.png" />
        </div>
      </div>

      <div
        class="lg:grid grid-cols-2 flex flex-col gap-4 w-full border-b-2 border-gray-400 py-5"
      >
        <div class="col-span-1 flex lg:flex-row flex-col gap-4 lg:gap-16">
          <h3 class="font-bold text-2xl">Module (8wks)</h3>
          <ul class="list-disc gap-5 flex flex-col text-start">
            <li class="text-start">
              We will go deeper into backend engineering by learning and
              expanding our knowledge on databases. We will learn how to scale
              and manipulate data from databases.
            </li>
            <li>
              We will learn software testing and deployment where we will deeper
              expand our knowledge of TDD and different deployment cloud
              providers.
            </li>
            <li>
              We will learn about different software design principles, patterns
              and building complex backend systems. We will also exploring web
              security and caching to enhance our backend performance.
            </li>
          </ul>
        </div>
        <div class="col-span-1 flex justify-center">
          <img alt="logo" class="lg:w-[500px] w-[500px]" src="~/assets/2.png" />
        </div>
      </div>

      <div
        class="lg:grid grid-cols-2 flex flex-col gap-4 w-full border-b-2 border-gray-400 py-5"
      >
        <div class="col-span-1 flex lg:flex-row flex-col gap-4 lg:gap-16">
          <h3 class="font-bold text-2xl">Module (10wks)</h3>
          <ul class="list-disc gap-5 flex flex-col text-start">
            <li class="text-start">
              In this module, we will continue with our scalability
              implimentation where we will discuss message brokers and search
              engines.
            </li>
            <li>
              We will deep dive into containerization and CI/CD to help us
              understand how to create pipelines to deploy and scale our backend
              systems.
            </li>
            <li>
              Lastly, we will get you hired. We will introduce to the milestone
              project to be completed and work you through algorithms and data
              structures for your interview preparations.
            </li>
          </ul>
        </div>
        <div class="col-span-1 flex justify-center">
          <img alt="logo" class="lg:w-[500px] w-[500px]" src="~/assets/3.png" />
        </div>
      </div>
    </div>
  </section>
</template>