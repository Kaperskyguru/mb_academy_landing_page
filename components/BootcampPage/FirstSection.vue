
<template>
  <section class="mt-52 py-10 items-start gap-8 container mx-auto">
    <div>
      <CourseTestimonials />
    </div>

    <div class="">
      <div class="py-3 input-group d-flex justify-content-center">
        <!-- <CourseButton :color="color" :link="link" :title="btnText" /> -->
      </div>
    </div>
  </section>
</template>

<script>
import CourseTestimonials from './CourseTestimonials.vue'

export default {
  components: {
    CourseTestimonials
  }
}
</script>