<!-- eslint-disable vue/no-v-html -->
<template>
  <div style="margin-top: 150px" class="">
    <div class="relative mt-5">
      <div class="bordder-primary text-center" style="max-width: 950px; height: 500px">
        <div style="width: 200px; margin: -100px auto 30px">
          <img class="rounded-full w-80" :src="image" :alt="name" />
        </div>

        <div class="lg:p-3 p-2" style="width: auto">
          <div class="w-full">
            <p
              class="text-md"
              style="text-align: left; font-size: 16px; font-weight: 700; font-style: italic"
              v-html="feedback"
            ></p>
          </div>
          <div class="flex pt-3 flex-row justify-center w-full" style="width: auto">
            <p class="text-lg font-bold">
              {{ name }}
              <span class="font-normal">. {{ position }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      
      <script>
export default {
  name: 'TestimonialComponent',

  props: {
    testimonial: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    image() {
      if (this.testimonial) {
        if (this.testimonial?.image) {
          return this.testimonial?.image
        }
      }
      return '/img/backend-2023.jpg'
    },

    feedback() {
      return this.testimonial?.feedback ?? ''
    },

    name() {
      return this.testimonial?.name ?? ''
    },

    position() {
      return this.testimonial?.position ?? ''
    }
  }
}
</script>
      
      <style scoped>
h1 {
  color: #0a083b;
}

p {
  color: #57586e;
  font-size: 0.8rem;
}

.bordder-primary {
  border: 2px solid #1c168c;
  border-radius: 5px;
}

small {
  color: #57586e;
}
</style>
      