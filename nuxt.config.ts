// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: ['@nuxtjs/i18n', "@nuxt/content"],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    strategy: 'prefix',
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  }
})