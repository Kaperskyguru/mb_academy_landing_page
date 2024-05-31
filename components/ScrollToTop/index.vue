<template>
  <div class="fixed bottom-8 right-8 z-[99]">
    <div
      v-if="isVisible"
      @click.prevent="scrollToTop"
      aria-label="scroll to top"
      class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
    >
      <span
        class="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"
      ></span>
    </div>
  </div>
</template>

<script setup>
const isVisible = ref(false);

// Top: 0 takes us all the way back to the top of the page
// Behavior: smooth keeps it smooth!
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  // Button is displayed after scrolling for 500 pixels
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      isVisible.value = true;
    } else {
      isVisible.value = false;
    }
  };

  window.addEventListener("scroll", toggleVisibility);
  window.removeEventListener("scroll", toggleVisibility);
});
</script>

<style>
</style>

