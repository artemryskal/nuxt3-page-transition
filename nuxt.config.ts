// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL || ''
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'page'
      },
      bodyAttrs: {
        class: 'page__body'
      }
    }
  },

  css: [
    '@/assets/scss/styles.scss'
  ],
})
