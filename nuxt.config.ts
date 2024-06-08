// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: ['@nuxtjs/i18n', "@nuxt/content", "@nuxt/image"],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    strategy: 'prefix',
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Santiago Mind and Cognition'
    }
  }
})