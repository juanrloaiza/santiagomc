// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import vue from "@astrojs/vue";


// https://astro.build/config
export default defineConfig({
    site: "https://www.santiagomindandcognition.cl/",
  i18n: {
      locales: ["es", "en"],
      defaultLocale: "es",
      routing: {
          prefixDefaultLocale: true
      }
  },

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [vue()],
});