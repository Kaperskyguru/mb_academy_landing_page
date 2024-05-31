<script lang="ts">
export default {
  name: 'FooterSection'
}
</script>
<template>
  <section
    class="pt-20 text-center font-semibold text-gray-600 lg:flex-row flex-col justify-between"
  >
    <p>© Masteringbackend Academy {{ new Date().getFullYear() }}. All rights reserved.</p>
    <p class="text-sm">
      Designed and built by <a href="curt.studio" class="text-red-800"> curt.studio</a>
    </p>
  </section>
</template>