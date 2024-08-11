// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxt/image",
    "dayjs-nuxt"
  ],
  typescript: {
    strict: false
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    strategy: 'prefix',
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  dayjs: {
    locales: ['en', 'es'],
    plugins: ['localizedFormat']
  },
  image: {
    provider: 'netlify',
    domains: ['images.unsplash.com']
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Santiago Mind and Cognition',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  }
})