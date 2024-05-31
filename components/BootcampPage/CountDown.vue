<script>
export default {
  name: 'CountDown',
  data() {
    return {
      days: 24,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  mounted() {
    const updateCountdown = () => {
      if (this.days > 0 || this.hours > 0 || this.minutes > 0 || this.seconds > 0) {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            if (this.hours === 0) {
              this.days--
              this.hours = 23
              this.minutes = 59
              this.seconds = 59
            } else {
              this.hours--
              this.minutes = 59
              this.seconds = 59
            }
          } else {
            this.minutes--
            this.seconds = 59
          }
        } else {
          this.seconds--
        }
      } else {
        clearInterval(interval)
        // Handle countdown completion if needed
      }
    }

    // Initial call to update countdown
    updateCountdown()

    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000)
  }
}
</script>

<template>
  <section
    class="mb-52 rounded-xl lg:p-16 p-2 flex flex-col items-center gap-10 lg:gap-20 border-2 border-[#303030] bg-white"
  >
    <div class="flex flex-col lg:gap-16 gap-6 text-[#303030]">
      <h2 class="font-bold lg:text-6xl text-xl text-center">
        Unlock Your Backend Engineering Career <br />in {{ 6 }} Months!
      </h2>
      <p class="text-center lg:text-3xl font-semibold">
        Don't wait! Enroll now and get instant access to the course materials to start learning in
        minutes.
      </p>
    </div>

    <div class="grid grid-cols-4 gap-2 lg:gap-10 w-full">
      <div
        class="col-span-1 gap-4 flex flex-col items-center rounded-xl bg-[#8F03A1] text-white py-4 lg:py-6"
      >
        <p class="font-bold lg:text-8xl">{{ days }}</p>
        <p class="lg:lg:text-3xl text-xs">DAYS</p>
      </div>

      <div
        class="col-span-1 gap-4 flex flex-col items-center rounded-xl bg-[#8F03A1] text-white py-4 lg:py-6"
      >
        <p class="font-bold lg:text-8xl">{{ hours }}</p>
        <p class="lg:text-3xl text-xs">HOURS</p>
      </div>
      <div
        class="col-span-1 gap-4 flex flex-col items-center rounded-xl bg-[#8F03A1] text-white py-4 lg:py-6"
      >
        <p class="font-bold lg:text-8xl">{{ minutes }}</p>
        <p class="lg:text-3xl text-xs">MINUTES</p>
      </div>
      <div
        class="col-span-1 gap-4 flex flex-col items-center rounded-xl bg-[#8F03A1] text-white py-4 lg:py-6"
      >
        <p class="font-bold lg:text-8xl">{{ seconds }}</p>
        <p class="lg:text-3xl text-xs">SECONDS</p>
      </div>
    </div>

    <div class="inline">
      <a
        href="#pricing"
        class="lg:px-20 px-6 rounded-xl py-3 lg:py-6 font-semibold bg-[#242099] text-white inline text-2xl"
      >
        Enroll Now
      </a>
    </div>
  </section>
</template>
