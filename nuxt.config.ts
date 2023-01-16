// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  ]
})
