// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";



import mdx from "@astrojs/mdx";



// https://astro.build/config
export default defineConfig({
  site: "https://www.santiagomindandcognition.cl/",

  i18n: {
      locales: ["es", "en"],
      defaultLocale: "es",
      routing: {
          prefixDefaultLocale: true,
          redirectToDefaultLocale: false
      }
  },

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});