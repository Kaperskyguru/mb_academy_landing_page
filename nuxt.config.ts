// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  ssr: true,

  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
      },
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: `Backend Engineering Bootcamps and Training`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Get Exclusive Backend Engineering Bootcamps and Trainings with Masteringbackend Academy. Advanced Backend Engineering Training: a proven way to learn Backend Engineering. Learn from experts. Learn from advanced backend developer/engineer courses",
        },

        {
          hid: "keywords",
          name: "keywords",
          content: `backend development bootcamp, best back end development bootcamp, back end coding bootcamp, bootcamp backend, backend coding bootcamp, backend engineer training, back end training, backend developer training, back end developer training, backend training, back-end development training, backend academy, software development academy`,
        },

        {
          hid: "og:title",
          property: "og:title",
          content: `Backend Engineering Bootcamps and Training`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `Get Exclusive Backend Engineering Bootcamps and Trainings with Masteringbackend Academy. Advanced Backend Engineering Training: a proven way to learn Backend Engineering. Learn from experts. Learn from advanced backend developer/engineer courses`,
        },

        {
          hid: "og:url",
          property: "og:url",
          content: `https://academy.masteringbackend.com`,
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "100",
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "100",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },

        {
          hid: "twitter:creator",
          property: "twitter:creator",
          content: "@master_backend",
        },

        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
