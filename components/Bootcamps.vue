<template>
  <section class="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-10">
    <div class="container" id="bootcamps">
      <SectionTitle :title="title" :paragraph="description" center />
      <div
        v-if="type === 'general'"
        class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"
      >
        <div
          class="w-full"
          v-for="(bootcamp, i) in bootcamps?.filter(
            (i) => i?.category === 'general'
          )"
          :key="i"
        >
          <Bootcamp :bootcamp="bootcamp" />
        </div>
      </div>

      <div
        v-if="type === 'language'"
        class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"
      >
        <div
          class="w-full"
          v-for="(bootcamp, i) in bootcamps?.filter(
            (i) => i?.category === 'language'
          )"
          :key="i"
        >
          <Bootcamp :bootcamp="bootcamp" />
        </div>
      </div>

      <div
        v-if="type === 'framework'"
        class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"
      >
        <div
          class="w-full"
          v-for="(bootcamp, i) in bootcamps?.filter(
            (i) => i?.category === 'framework'
          )"
          :key="i"
        >
          <Bootcamp :bootcamp="bootcamp" />
        </div>
      </div>

      <div
        v-if="type === 'tools'"
        class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"
      >
        <div
          class="w-full"
          v-for="(bootcamp, i) in bootcamps?.filter(
            (i) => i?.category === 'tools'
          )"
          :key="i"
        >
          <Bootcamp :bootcamp="bootcamp" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(["type", "title", "description"]);

const bootcamps = ref([
  {
    isLive: false,
    slug: "backend-engineering-101",
    image:
      "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/free%20backend%20bootcamp.png",
    category: "general",
    title: "Backend Engineering 101 Bootcamp",
    description:
      "Learn the basics of backend engineering with our 8 weeks free backend engineering bootcamp",
    features: ["Online", "Full Time", "1-3 Months", "Certification"],
  },

  {
    isLive: true,
    slug: "advanced-backend-bootcamp",
    category: "general",
    image:
      "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/backend-bootcamp.png",
    title: "Advanced Backend Engineering Bootcamp",
    description:
      "Advanced Backend Bootcamp: a proven way to learn Backend Engineering. Learn from experts.",
    features: ["Online", "Full Time", "4-6 Months", "Certification"],
  },

  {
    isLive: false,
    slug: "#",
    category: "framework",
    image: "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/19.png",
    title: "Advanced Nestjs Bootcamp",
    description:
      "All-in-one Nestjs Bootcamp for learning backend engineering with Nestjs. This bootcamp is designed for Nestjs developers seeking proficiency in Nestjs.",
    features: ["Online", "Full Time", "3-4 Months", "Certification"],
  },

  {
    slug: "#",
    isLive: false,
    category: "framework",
    image: "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/20.png",
    title: "Advanced Laravel Bootcamp",
    description:
      "All-in-one Laravel Bootcamp for learning backend engineering with Laravel. This bootcamp is designed for Laravel developers seeking proficiency in Laravel.",
    features: ["Online", "Full Time", "3-4 Months", "Certification"],
  },

  {
    category: "language",
    slug: "#",
    isLive: false,
    image: "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/17.png",
    title: "Advanced Python Bootcamp",
    description:
      "All-in-one Python Bootcamp for learning backend engineering with Python. This bootcamp is designed for Python developers seeking proficiency in Python.",
    features: ["Online", "Full Time", "3-4 Months", "Certification"],
  },

  {
    category: "language",
    slug: "#",
    isLive: false,
    image: "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/15.png",
    title: "Advanced Go Bootcamp",
    description:
      "All-in-one Golang Bootcamp for learning backend engineering with Golang. This bootcamp is designed for Golang developers seeking proficiency in Golang.",
    features: ["Online", "Full Time", "3-4 Months", "Certification"],
  },

  {
    category: "language",
    slug: "#",
    isLive: false,
    image: "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/14.png",
    title: "Advanced Java Bootcamp",
    description:
      "All-in-one Java Bootcamp for learning backend engineering with Java. This bootcamp is designed for Java developers seeking proficiency in Java.",
    features: ["Online", "Full Time", "3-4 Months", "Certification"],
  },

  {
    category: "language",
    slug: "#",
    image: "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/18.png",
    isLive: false,
    title: "Advanced Node.js Bootcamp",
    description:
      "All-in-one Node.js Bootcamp for learning backend engineering with Node.js. This bootcamp is designed for Node.js developers seeking proficiency in Node.js.",
    features: ["Online", "Full Time", "3-4 Months", "Certification"],
  },

  {
    category: "language",
    slug: "#",
    isLive: false,
    image: "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/21.png",
    title: "Advanced PHP Bootcamp",
    description:
      "All-in-one PHP Bootcamp for learning backend engineering with PHP. This bootcamp is designed for PHP developers seeking proficiency in PHP.",
    features: ["Online", "Full Time", "3-4 Months", "Certification"],
  },

  {
    category: "language",
    slug: "#",
    isLive: false,
    image: "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/16.png",
    title: "Advanced Rust Bootcamp",
    description:
      "All-in-one Rust Bootcamp for learning backend engineering with Rust. This bootcamp is designed for Rust developers seeking proficiency in Rust.",
    features: ["Online", "Full Time", "3-4 Months", "Certification"],
  },

  {
    category: "tools",
    slug: "#",
    isLive: false,
    image: "https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/22.png",
    title: "Advanced Docker Bootcamp",
    description:
      "All-in-one Docker training. This training is designed for Backend engineers seeking proficiency in Docker.",
    features: ["Online", "Full Time", "3-4 Months", "Certification"],
  },
]);
</script>

<style>
</style>