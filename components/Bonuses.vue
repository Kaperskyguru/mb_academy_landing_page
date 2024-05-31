<template>
  <section
    class="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28"
  >
    <div class="container">
      <SectionTitle
        title="All Bootcamps Includes"
        paragraph="All our bootcamps includes the following bonues platforms throughout the duration of the bootcamp to help you become a great backend engineer and land your dream jobs."
        center
      />

      <AboutSectionOne
        :bonus="{
          title: 'Free Premium Access to MB Platform',
          link: 'https://app.masteringbackend.com?utm_source=academy',
          image: '/images/mb_platform.gif',
          features: [
            '100+ Backend Courses',
            'Track Schedules',
            'Unlimited Backend Quizzes',
            'Unlimited Backend Exercises',
          ],
          description:
            'Learn backend engineering with 1000+ backend engineering courses, challenges, tasks, execises, and code playgrounds. Learn from expert-vetted courses and roadmaps, track your learnings and set schedules, and solve backend engineering tasks, exercises, and challenges.',
        }"
      />

      <AboutSectionOne
        :bonus="{
          title: 'Free Access to BackendProjects',
          link: 'https://app.masteringbackend.com?utm_source=academy',
          image: '/images/demo_projects.gif',
          features: [
            '100+ Backend Projects',
            'Own a Backend Portfolio',
            'Practice playground',
          ],
          description:
            'Build unlimited real world projects with backend Projectland. MB Projects enables Backend engineers through a learn-by-building model. Build real-world backend projects without coding the frontend. We will build the frontend and set up everything for you while you focus only on the backend APIs and databases.',
        }"
      />

      <AboutSectionOne
        :bonus="{
          title: 'Free Access to BackendPrep',
          link: 'https://app.masteringbackend.com?utm_source=academy',
          image: '/images/mb_platform.gif',
          features: [
            '100+ Backend Interview Questions',
            'Get Backend Jobs',
            'Practice playground',
          ],
          description:
            'Ace your backend engineering interviews with BackendPrep. A backend interview preparation playground. Build real world backend projects, APIs, System Designs, Database Designs, backend algorithms and challenges.',
        }"
      />
    </div>
  </section>
</template>

<script setup>
</script>

<style>
</style>