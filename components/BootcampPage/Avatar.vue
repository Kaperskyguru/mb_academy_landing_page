<template>
  <picture
    class="flex overflow-hidden grow-0 shrink-0 justify-center items-center rounded-full border border-solid border-inherit"
    :class="[
      sizeAsClasses,
      colorAsClasses,
      { 'text-opacity-40 font-bold': initials === '?' },
    ]"
  >
    <img
      v-if="src"
      :src="src"
      :alt="name"
      :width="sizeAsNumber"
      :height="sizeAsNumber"
      class="object-cover w-full h-full rounded-full"
    />

    <span v-else>{{ initials }}</span>
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "",
    },

    size: {
      type: String,
      validate: (value) =>
        ["small", "normal", "auto", "medium"].includes(value),
      default: "normal",
    },

    color: {
      type: String,
      validate: (value) => ["blue", "silver"].includes(value),
      default: "silver",
    },
  },

  computed: {
    initials() {
      if (!this.name) return "?";
      const names = this.name.toUpperCase().split(" ");
      const firstName = names.shift() || "";
      const lastName = names.pop() || "";
      if (!firstName && !lastName) return "?";
      return `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`;
    },

    sizeAsNumber() {
      return this.size === "small" ? 24 : 48;
    },

    sizeAsClasses() {
      return this.size === "small"
        ? "w-6 h-6 text-2xs"
        : this.size === "normal"
        ? "w-16 h-16 text-base tracking-wider"
        : this.size === "medium"
        ? " h-40 w-40 text-base tracking-wider"
        : "w-full h-full text-base tracking-wider";
    },
    colorAsClasses() {
      switch (this.color) {
        case "silver":
          return "text-black bg-white";
        default:
          return "text-blue-800 bg-gray-400";
      }
    },
  },
};
</script>
