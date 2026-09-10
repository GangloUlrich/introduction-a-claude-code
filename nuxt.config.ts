// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    // GitHub Pages project sites are served from /<repo-name>/, so the
    // deploy workflow sets NUXT_APP_BASE_URL to that path at build time.
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'D.Nova — Personal Portfolio Website',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  }
})
